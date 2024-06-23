// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    JSON: any,
    JSONObject: any,
    String: string,
    Boolean: boolean,
    Int: number,
    Upload: any,
}

export interface BaseResponse {
    message: (Scalars['String'] | null)
    status: (Scalars['Boolean'] | null)
    response: (Scalars['JSON'] | null)
    params: (Scalars['JSON'] | null)
    __typename: 'BaseResponse'
}

export interface BaseList {
    count: (Scalars['Int'] | null)
    next: (Scalars['String'] | null)
    previous: (Scalars['String'] | null)
    results: ((BaseName | null)[] | null)
    status: (Scalars['Boolean'] | null)
    message: (Scalars['String'] | null)
    __typename: 'BaseList'
}

export interface Ability {
    ability: (BaseName | null)
    is_hidden: (Scalars['Boolean'] | null)
    slot: (Scalars['Int'] | null)
    __typename: 'Ability'
}

export interface GameIndex {
    game_index: (Scalars['Int'] | null)
    version: (BaseName | null)
    __typename: 'GameIndex'
}

export interface VersionDetail {
    rarity: (Scalars['Int'] | null)
    version: (BaseName | null)
    __typename: 'VersionDetail'
}

export interface HeldItem {
    item: (BaseName | null)
    version_details: ((VersionDetail | null)[] | null)
    __typename: 'HeldItem'
}

export interface VersionGroupDetail {
    level_learned_at: (Scalars['Int'] | null)
    move_learn_method: (BaseName | null)
    version_group: (BaseName | null)
    __typename: 'VersionGroupDetail'
}

export interface Move {
    move: (BaseName | null)
    version_group_details: ((VersionGroupDetail | null)[] | null)
    __typename: 'Move'
}

export interface Sprite {
    back_default: (Scalars['String'] | null)
    back_female: (Scalars['String'] | null)
    back_shiny: (Scalars['String'] | null)
    back_shiny_female: (Scalars['String'] | null)
    front_default: (Scalars['String'] | null)
    front_female: (Scalars['String'] | null)
    front_shiny: (Scalars['String'] | null)
    front_shiny_female: (Scalars['String'] | null)
    __typename: 'Sprite'
}

export interface Stat {
    base_stat: (Scalars['Int'] | null)
    effort: (Scalars['Int'] | null)
    stat: (BaseName | null)
    __typename: 'Stat'
}

export interface Type {
    slot: (Scalars['Int'] | null)
    type: (BaseName | null)
    __typename: 'Type'
}

export interface BaseName {
    id: (Scalars['Int'] | null)
    url: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    __typename: 'BaseName'
}

export interface Pokemon {
    abilities: ((Ability | null)[] | null)
    base_experience: (Scalars['Int'] | null)
    forms: ((BaseName | null)[] | null)
    game_indices: ((GameIndex | null)[] | null)
    height: (Scalars['Int'] | null)
    held_items: ((HeldItem | null)[] | null)
    id: (Scalars['Int'] | null)
    is_default: (Scalars['Boolean'] | null)
    location_area_encounters: (Scalars['String'] | null)
    moves: ((Move | null)[] | null)
    name: (Scalars['String'] | null)
    order: (Scalars['Int'] | null)
    species: (BaseName | null)
    sprites: (Sprite | null)
    stats: ((Stat | null)[] | null)
    types: ((Type | null)[] | null)
    weight: (Scalars['Int'] | null)
    status: (Scalars['Boolean'] | null)
    message: (Scalars['String'] | null)
    __typename: 'Pokemon'
}

export interface PokemonItem {
    id: (Scalars['Int'] | null)
    url: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    image: (Scalars['String'] | null)
    artwork: (Scalars['String'] | null)
    dreamworld: (Scalars['String'] | null)
    __typename: 'PokemonItem'
}

export interface PokemonList {
    count: (Scalars['Int'] | null)
    next: (Scalars['String'] | null)
    previous: (Scalars['String'] | null)
    nextOffset: (Scalars['Int'] | null)
    prevOffset: (Scalars['Int'] | null)
    params: (Scalars['JSON'] | null)
    results: ((PokemonItem | null)[] | null)
    status: (Scalars['Boolean'] | null)
    message: (Scalars['String'] | null)
    __typename: 'PokemonList'
}

export interface Query {
    abilities: (BaseList | null)
    ability: (BaseResponse | null)
    berries: (BaseList | null)
    berry: (BaseResponse | null)
    eggGroups: (BaseList | null)
    eggGroup: (BaseResponse | null)
    encounterMethods: (BaseList | null)
    encounterMethod: (BaseResponse | null)
    evolutionChains: (BaseList | null)
    evolutionChain: (BaseResponse | null)
    evolutionTriggers: (BaseList | null)
    evolutionTrigger: (BaseResponse | null)
    genders: (BaseList | null)
    gender: (BaseResponse | null)
    growthRates: (BaseList | null)
    growthRate: (BaseResponse | null)
    locations: (BaseList | null)
    location: (BaseResponse | null)
    moves: (BaseList | null)
    move: (BaseResponse | null)
    natures: (BaseList | null)
    nature: (BaseResponse | null)
    pokemons: (PokemonList | null)
    pokemon: (Pokemon | null)
    regions: (BaseList | null)
    region: (BaseResponse | null)
    species: (BaseList | null)
    types: (BaseList | null)
    __typename: 'Query'
}

export type CacheControlScope = 'PUBLIC' | 'PRIVATE'

export interface BaseResponseGenqlSelection{
    message?: boolean | number
    status?: boolean | number
    response?: boolean | number
    params?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaseListGenqlSelection{
    count?: boolean | number
    next?: boolean | number
    previous?: boolean | number
    results?: BaseNameGenqlSelection
    status?: boolean | number
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AbilityGenqlSelection{
    ability?: BaseNameGenqlSelection
    is_hidden?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GameIndexGenqlSelection{
    game_index?: boolean | number
    version?: BaseNameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VersionDetailGenqlSelection{
    rarity?: boolean | number
    version?: BaseNameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeldItemGenqlSelection{
    item?: BaseNameGenqlSelection
    version_details?: VersionDetailGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VersionGroupDetailGenqlSelection{
    level_learned_at?: boolean | number
    move_learn_method?: BaseNameGenqlSelection
    version_group?: BaseNameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MoveGenqlSelection{
    move?: BaseNameGenqlSelection
    version_group_details?: VersionGroupDetailGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SpriteGenqlSelection{
    back_default?: boolean | number
    back_female?: boolean | number
    back_shiny?: boolean | number
    back_shiny_female?: boolean | number
    front_default?: boolean | number
    front_female?: boolean | number
    front_shiny?: boolean | number
    front_shiny_female?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatGenqlSelection{
    base_stat?: boolean | number
    effort?: boolean | number
    stat?: BaseNameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TypeGenqlSelection{
    slot?: boolean | number
    type?: BaseNameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaseNameGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PokemonGenqlSelection{
    abilities?: AbilityGenqlSelection
    base_experience?: boolean | number
    forms?: BaseNameGenqlSelection
    game_indices?: GameIndexGenqlSelection
    height?: boolean | number
    held_items?: HeldItemGenqlSelection
    id?: boolean | number
    is_default?: boolean | number
    location_area_encounters?: boolean | number
    moves?: MoveGenqlSelection
    name?: boolean | number
    order?: boolean | number
    species?: BaseNameGenqlSelection
    sprites?: SpriteGenqlSelection
    stats?: StatGenqlSelection
    types?: TypeGenqlSelection
    weight?: boolean | number
    status?: boolean | number
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PokemonItemGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    name?: boolean | number
    image?: boolean | number
    artwork?: boolean | number
    dreamworld?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PokemonListGenqlSelection{
    count?: boolean | number
    next?: boolean | number
    previous?: boolean | number
    nextOffset?: boolean | number
    prevOffset?: boolean | number
    params?: boolean | number
    results?: PokemonItemGenqlSelection
    status?: boolean | number
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    abilities?: BaseListGenqlSelection
    ability?: (BaseResponseGenqlSelection & { __args: {ability: Scalars['String']} })
    berries?: BaseListGenqlSelection
    berry?: (BaseResponseGenqlSelection & { __args: {berry: Scalars['String']} })
    eggGroups?: BaseListGenqlSelection
    eggGroup?: (BaseResponseGenqlSelection & { __args: {eggGroup: Scalars['String']} })
    encounterMethods?: BaseListGenqlSelection
    encounterMethod?: (BaseResponseGenqlSelection & { __args: {encounterMethod: Scalars['String']} })
    evolutionChains?: BaseListGenqlSelection
    evolutionChain?: (BaseResponseGenqlSelection & { __args: {id: Scalars['String']} })
    evolutionTriggers?: BaseListGenqlSelection
    evolutionTrigger?: (BaseResponseGenqlSelection & { __args: {name: Scalars['String']} })
    genders?: BaseListGenqlSelection
    gender?: (BaseResponseGenqlSelection & { __args: {gender: Scalars['String']} })
    growthRates?: BaseListGenqlSelection
    growthRate?: (BaseResponseGenqlSelection & { __args: {growthRate: Scalars['String']} })
    locations?: BaseListGenqlSelection
    location?: (BaseResponseGenqlSelection & { __args: {location: Scalars['String']} })
    moves?: BaseListGenqlSelection
    move?: (BaseResponseGenqlSelection & { __args: {move: Scalars['String']} })
    natures?: BaseListGenqlSelection
    nature?: (BaseResponseGenqlSelection & { __args: {nature: Scalars['String']} })
    pokemons?: (PokemonListGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    pokemon?: (PokemonGenqlSelection & { __args: {name: Scalars['String']} })
    regions?: BaseListGenqlSelection
    region?: (BaseResponseGenqlSelection & { __args: {region: Scalars['String']} })
    species?: BaseListGenqlSelection
    types?: BaseListGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const BaseResponse_possibleTypes: string[] = ['BaseResponse']
    export const isBaseResponse = (obj?: { __typename?: any } | null): obj is BaseResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseResponse"')
      return BaseResponse_possibleTypes.includes(obj.__typename)
    }
    


    const BaseList_possibleTypes: string[] = ['BaseList']
    export const isBaseList = (obj?: { __typename?: any } | null): obj is BaseList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseList"')
      return BaseList_possibleTypes.includes(obj.__typename)
    }
    


    const Ability_possibleTypes: string[] = ['Ability']
    export const isAbility = (obj?: { __typename?: any } | null): obj is Ability => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAbility"')
      return Ability_possibleTypes.includes(obj.__typename)
    }
    


    const GameIndex_possibleTypes: string[] = ['GameIndex']
    export const isGameIndex = (obj?: { __typename?: any } | null): obj is GameIndex => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGameIndex"')
      return GameIndex_possibleTypes.includes(obj.__typename)
    }
    


    const VersionDetail_possibleTypes: string[] = ['VersionDetail']
    export const isVersionDetail = (obj?: { __typename?: any } | null): obj is VersionDetail => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersionDetail"')
      return VersionDetail_possibleTypes.includes(obj.__typename)
    }
    


    const HeldItem_possibleTypes: string[] = ['HeldItem']
    export const isHeldItem = (obj?: { __typename?: any } | null): obj is HeldItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeldItem"')
      return HeldItem_possibleTypes.includes(obj.__typename)
    }
    


    const VersionGroupDetail_possibleTypes: string[] = ['VersionGroupDetail']
    export const isVersionGroupDetail = (obj?: { __typename?: any } | null): obj is VersionGroupDetail => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersionGroupDetail"')
      return VersionGroupDetail_possibleTypes.includes(obj.__typename)
    }
    


    const Move_possibleTypes: string[] = ['Move']
    export const isMove = (obj?: { __typename?: any } | null): obj is Move => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMove"')
      return Move_possibleTypes.includes(obj.__typename)
    }
    


    const Sprite_possibleTypes: string[] = ['Sprite']
    export const isSprite = (obj?: { __typename?: any } | null): obj is Sprite => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSprite"')
      return Sprite_possibleTypes.includes(obj.__typename)
    }
    


    const Stat_possibleTypes: string[] = ['Stat']
    export const isStat = (obj?: { __typename?: any } | null): obj is Stat => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStat"')
      return Stat_possibleTypes.includes(obj.__typename)
    }
    


    const Type_possibleTypes: string[] = ['Type']
    export const isType = (obj?: { __typename?: any } | null): obj is Type => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isType"')
      return Type_possibleTypes.includes(obj.__typename)
    }
    


    const BaseName_possibleTypes: string[] = ['BaseName']
    export const isBaseName = (obj?: { __typename?: any } | null): obj is BaseName => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseName"')
      return BaseName_possibleTypes.includes(obj.__typename)
    }
    


    const Pokemon_possibleTypes: string[] = ['Pokemon']
    export const isPokemon = (obj?: { __typename?: any } | null): obj is Pokemon => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPokemon"')
      return Pokemon_possibleTypes.includes(obj.__typename)
    }
    


    const PokemonItem_possibleTypes: string[] = ['PokemonItem']
    export const isPokemonItem = (obj?: { __typename?: any } | null): obj is PokemonItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPokemonItem"')
      return PokemonItem_possibleTypes.includes(obj.__typename)
    }
    


    const PokemonList_possibleTypes: string[] = ['PokemonList']
    export const isPokemonList = (obj?: { __typename?: any } | null): obj is PokemonList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPokemonList"')
      return PokemonList_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    

export const enumCacheControlScope = {
   PUBLIC: 'PUBLIC' as const,
   PRIVATE: 'PRIVATE' as const
}
