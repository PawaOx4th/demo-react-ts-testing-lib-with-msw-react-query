export default {
    "scalars": [
        0,
        1,
        3,
        4,
        6,
        21,
        22
    ],
    "types": {
        "JSON": {},
        "JSONObject": {},
        "BaseResponse": {
            "message": [
                3
            ],
            "status": [
                4
            ],
            "response": [
                0
            ],
            "params": [
                0
            ],
            "__typename": [
                3
            ]
        },
        "String": {},
        "Boolean": {},
        "BaseList": {
            "count": [
                6
            ],
            "next": [
                3
            ],
            "previous": [
                3
            ],
            "results": [
                16
            ],
            "status": [
                4
            ],
            "message": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Int": {},
        "Ability": {
            "ability": [
                16
            ],
            "is_hidden": [
                4
            ],
            "slot": [
                6
            ],
            "__typename": [
                3
            ]
        },
        "GameIndex": {
            "game_index": [
                6
            ],
            "version": [
                16
            ],
            "__typename": [
                3
            ]
        },
        "VersionDetail": {
            "rarity": [
                6
            ],
            "version": [
                16
            ],
            "__typename": [
                3
            ]
        },
        "HeldItem": {
            "item": [
                16
            ],
            "version_details": [
                9
            ],
            "__typename": [
                3
            ]
        },
        "VersionGroupDetail": {
            "level_learned_at": [
                6
            ],
            "move_learn_method": [
                16
            ],
            "version_group": [
                16
            ],
            "__typename": [
                3
            ]
        },
        "Move": {
            "move": [
                16
            ],
            "version_group_details": [
                11
            ],
            "__typename": [
                3
            ]
        },
        "Sprite": {
            "back_default": [
                3
            ],
            "back_female": [
                3
            ],
            "back_shiny": [
                3
            ],
            "back_shiny_female": [
                3
            ],
            "front_default": [
                3
            ],
            "front_female": [
                3
            ],
            "front_shiny": [
                3
            ],
            "front_shiny_female": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Stat": {
            "base_stat": [
                6
            ],
            "effort": [
                6
            ],
            "stat": [
                16
            ],
            "__typename": [
                3
            ]
        },
        "Type": {
            "slot": [
                6
            ],
            "type": [
                16
            ],
            "__typename": [
                3
            ]
        },
        "BaseName": {
            "id": [
                6
            ],
            "url": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Pokemon": {
            "abilities": [
                7
            ],
            "base_experience": [
                6
            ],
            "forms": [
                16
            ],
            "game_indices": [
                8
            ],
            "height": [
                6
            ],
            "held_items": [
                10
            ],
            "id": [
                6
            ],
            "is_default": [
                4
            ],
            "location_area_encounters": [
                3
            ],
            "moves": [
                12
            ],
            "name": [
                3
            ],
            "order": [
                6
            ],
            "species": [
                16
            ],
            "sprites": [
                13
            ],
            "stats": [
                14
            ],
            "types": [
                15
            ],
            "weight": [
                6
            ],
            "status": [
                4
            ],
            "message": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PokemonItem": {
            "id": [
                6
            ],
            "url": [
                3
            ],
            "name": [
                3
            ],
            "image": [
                3
            ],
            "artwork": [
                3
            ],
            "dreamworld": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "PokemonList": {
            "count": [
                6
            ],
            "next": [
                3
            ],
            "previous": [
                3
            ],
            "nextOffset": [
                6
            ],
            "prevOffset": [
                6
            ],
            "params": [
                0
            ],
            "results": [
                18
            ],
            "status": [
                4
            ],
            "message": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Query": {
            "abilities": [
                5
            ],
            "ability": [
                2,
                {
                    "ability": [
                        3,
                        "String!"
                    ]
                }
            ],
            "berries": [
                5
            ],
            "berry": [
                2,
                {
                    "berry": [
                        3,
                        "String!"
                    ]
                }
            ],
            "eggGroups": [
                5
            ],
            "eggGroup": [
                2,
                {
                    "eggGroup": [
                        3,
                        "String!"
                    ]
                }
            ],
            "encounterMethods": [
                5
            ],
            "encounterMethod": [
                2,
                {
                    "encounterMethod": [
                        3,
                        "String!"
                    ]
                }
            ],
            "evolutionChains": [
                5
            ],
            "evolutionChain": [
                2,
                {
                    "id": [
                        3,
                        "String!"
                    ]
                }
            ],
            "evolutionTriggers": [
                5
            ],
            "evolutionTrigger": [
                2,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "genders": [
                5
            ],
            "gender": [
                2,
                {
                    "gender": [
                        3,
                        "String!"
                    ]
                }
            ],
            "growthRates": [
                5
            ],
            "growthRate": [
                2,
                {
                    "growthRate": [
                        3,
                        "String!"
                    ]
                }
            ],
            "locations": [
                5
            ],
            "location": [
                2,
                {
                    "location": [
                        3,
                        "String!"
                    ]
                }
            ],
            "moves": [
                5
            ],
            "move": [
                2,
                {
                    "move": [
                        3,
                        "String!"
                    ]
                }
            ],
            "natures": [
                5
            ],
            "nature": [
                2,
                {
                    "nature": [
                        3,
                        "String!"
                    ]
                }
            ],
            "pokemons": [
                19,
                {
                    "limit": [
                        6
                    ],
                    "offset": [
                        6
                    ]
                }
            ],
            "pokemon": [
                17,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "regions": [
                5
            ],
            "region": [
                2,
                {
                    "region": [
                        3,
                        "String!"
                    ]
                }
            ],
            "species": [
                5
            ],
            "types": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "CacheControlScope": {},
        "Upload": {}
    }
}