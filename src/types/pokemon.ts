interface FlavorTextEntrie {
  flavor_text: "Helps repel wild POKéMON.",
  language: {
    name: string,
    url: string,
  },
  version_group: {
    name: string,
    url: string,
  }
}
interface EffectEntrie {
  effect: string,
  language: {
    name: string,
    url: string,
  },
  short_effect?: string,
}
export interface Pokemon {
  id: number,
  is_main_series: boolean,
  effect_changes: Array<{
    effect_entries: EffectEntrie[],
    version_group: {
      name: string,
      url: string,
    }
  }>,
  effect_entries: EffectEntrie[],
  flavor_text_entries: FlavorTextEntrie[],
  generation: {
    name: string,
    url: string,
  },
  name: string,
  names: Array<{
    name: string,
    language: {
      name: string,
      url: string,
    }
  }>,
  pokemon: Array<{
    is_hidden: boolean,
    pokemon: {
      name: string,
      url: string,
    },
    slot: number,
  }>,
}

export default Pokemon;
