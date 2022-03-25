import { DocumentNode } from 'graphql';
import { API_URL} from 'config';
import difference from 'lodash.difference';
import uniq from 'lodash.uniq';
import * as Fragments from './fragments';

interface FetcherOptions {
  variables?: Record<string, number | string | boolean>;
}

type Fetcher = <R = any>(query: string | DocumentNode, options?: FetcherOptions) => Promise<R>;

const fetcher: Fetcher = async (gqlQuery, { variables } = {}) => {
  let query = typeof gqlQuery === 'string' ? gqlQuery : `${gqlQuery?.loc?.source?.body}`;
  const fragments: Record<string, string> = {};
  Object.keys(Fragments).forEach((item) => {
    const fragment: string | any = Fragments[item as keyof typeof Fragments];
    const body = typeof fragment === 'string' ? fragment : fragment.loc?.source?.body;
    const [, fragmentName] = `${body}`.match(/fragment\s([a-zA-Z]+)\son/) || [];
    fragments[`${fragmentName}`] = `${body}`;
  });
  let fragmentsToAdd: string[] = [];
  let usedFragments: string[] = [];
  let newFragments: string[] = [];
  do {
    usedFragments = Array.from(query.matchAll(/\.\.\.([a-zA-Z]+)/g)).map(
      ([, fragmentName]) => fragmentName,
    );
    newFragments = difference(usedFragments, fragmentsToAdd);

    fragmentsToAdd = uniq(newFragments)
      // eslint-disable-next-line no-loop-func
      .filter((item: string) => !query.includes(`fragment ${item}`))
      .map((item: string) => fragments[item]);
    query = [...fragmentsToAdd, query].join('\n');
  } while (fragmentsToAdd.length > 0);

  const body = JSON.stringify({
    query,
    variables,
  });
  const response = await fetch(`${API_URL}/graphql`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  const { data } = await response.json();
  return data;
};

export default fetcher;
