import { Pokemon } from 'types';
import { GetAPI } from 'utils/requests';
import { API_POKEMONS } from 'config/index';

interface ResponseListPokemons {
  count: number,
  next?: string,
  previoust?: string,
  results: Array<{
    name: string,
    url: string,
  }>,
}

export class PokemonService {
  // eslint-disable-next-line
  constructor() {}
  getAll(): Promise<ResponseListPokemons> {
    return GetAPI(API_POKEMONS);
  }
  show(id: number): Promise<Pokemon> {
    return GetAPI(`${API_POKEMONS}/${id}`);
  }
}

export default PokemonService;
