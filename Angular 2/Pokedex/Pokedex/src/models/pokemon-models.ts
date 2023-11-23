export type ResultAPI = {
    count: number,
    next: string,
    previous: string,
    results: Pokemon[]
}

export type Pokemon = {
    name: string,
    url: string,
}

export type PokemonDescription = {
    id: number,
    name: string,
    sprites: {front_default: string},
    stats: Stats[],
    types: Types[]
}

type Stats = {
    base_stat: number,
    stat: {
        name: string
    }
}

type Types = {
    type: {
        name: string
    }
}
