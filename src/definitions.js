export default {
    "definitions": {
        "Brasil_states": { "enum": ["RJ", "SP", "MG"] },
        "Argentina_states": { "enum": ["Cordoba", "Buenos Aires", "Mendoza"] },
        "EUA_states": { "enum": ["Washington", "Texas", "Alaska"] },
        "Brasil_RJ_cities": { "enum": ["Barra Mansa", "Volta Redonda", "Rio de Janeiro"] },
        "Brasil_SP_cities": { "enum": ["São Paulo", "Osasco", "Campinas"] },
        "Brasil_MG_cities": { "enum": ["Béhrizonte", "Giz de fora", "Montes Claros"] },
        "Argentina_CB_cities": { "enum": ["cb1", "cb2", "cb3"] },
        "Argentina_BA_cities": { "enum": ["ba1", "ba2", "ba3"] },
        "Argentina_MZ_cities": { "enum": ["mz1", "mz2", "mz3"] },
        "EUA_WS_cities": { "enum": ["ws1", "ws2", "ws3"] },
        "EUA_TX_cities": { "enum": ["tx1", "tx2", "tx3"] },
        "EUA_AK_cities": { "enum": ["ak1", "ak2", "ak3"] },
    },
    "dependencies": {
      "country": {
          "oneOf": [{
              "properties": {
                  "country": { "const": "Brasil" },
                  "state": { "$ref": "#/definitions/Brasil_states" }
              }
          }, {
              "properties": {
                  "country": { "const": "Argentina" },
                  "state": { "$ref": "#/definitions/Argentina_states" }
              }
          }, {
              "properties": {
                  "country": { "const": "EUA" },
                  "state": { "$ref": "#/definitions/EUA_states" }
              }
          }]
      },
    "state": {
        "oneOf": [{
            "properties": {
                "country": { "const": "Brasil" },
                "state": { "const": "RJ" },
                "city": { "$ref": "#/definitions/Brasil_RJ_cities" }
            }
        },{
            "properties": {
                "country": { "const": "Brasil" },
                "state": { "const": "SP" },
                "city": { "$ref": "#/definitions/Brasil_SP_cities" }
            }
        }, {
            "properties": {
                "country": { "const": "Brasil" },
                "state": { "const": "MG" },
                "city": { "$ref": "#/definitions/Brasil_MG_cities" }
            }
        }, {
            "properties": {
                "country": { "const": "Argentina" },
                "state": { "const": "Cordoba" },
                "city": { "$ref": "#/definitions/Argentina_CB_cities" }
            }
        }, {
            "properties": {
                "country": { "const": "Argentina" },
                "state": { "const": "Buenos Aires" },
                "city": { "$ref": "#/definitions/Argentina_BA_cities" }
            }
        }, {
            "properties": {
                "country": { "const": "Argentina" },
                "state": { "const": "Mendoza" },
                "city": { "$ref": "#/definitions/Argentina_MZ_cities" }
            }
        }, {
            "properties": {
                "country": { "const": "EUA" },
                "state": { "const": "Washington" },
                "city": { "$ref": "#/definitions/EUA_WS_cities" }
            }
        }, {
            "properties": {
                "country": { "const": "EUA" },
                "state": { "const": "Texas" },
                "city": { "$ref": "#/definitions/EUA_TX_cities" }
            }
        }, {
            "properties": {
                "country": { "const": "EUA" },
                "state": { "const": "Alaska" },
                "city": { "$ref": "#/definitions/EUA_AK_cities" }
            }
        }]
    }
    }
}
