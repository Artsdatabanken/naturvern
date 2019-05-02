{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "kode": {
            "type": "string"
          },
          "navn": {
            "type": "object",
            "properties": {
              "nor": {
                "type": "string"
              }
            }
          }
        },
        "required": [
          "kode",
          "navn"
        ]
      }
    },
    "meta": {
      "type": "object",
      "properties": {
        "tittel": {
          "type": "string"
        },
        "produsertUtc": {
          "type": "string"
        },
        "utgiver": {
          "type": "string"
        },
        "url": {
          "type": "string"
        },
        "tool": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "url": {
              "type": "string"
            }
          }
        },
        "elementer": {
          "type": "number"
        }
      }
    }
  }
}
