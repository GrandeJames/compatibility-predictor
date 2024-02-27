# Input
You must provide inputs in two JSON files: “data.json” and “config.json.” 

The data.json file contains applicants with an array of individuals, each with names and attributes.
The config.json file contains the attribute weights, which determine the importance of each attribute.

Example data.json:
```json
{
  "team": [
    {
      "name": "Eddie",
      "attributes": {
        "intelligence": 1,
        "strength": 5,
        "endurance": 3,
        "spicyFoodTolerance": 1
      }
    },
    {
      "name": "Will",
      "attributes": {
        "intelligence": 9,
        "strength": 4,
        "endurance": 1,
        "spicyFoodTolerance": 6
      }
    },
    {
      "name": "Mike",
      "attributes": {
        "intelligence": 3,
        "strength": 2,
        "endurance": 9,
        "spicyFoodTolerance": 5
      }
    }
  ],
  "applicants": [
    {
      "name": "John",
      "attributes": {
        "intelligence": 4,
        "strength": 5,
        "endurance": 2,
        "spicyFoodTolerance": 1
      }
    },
    {
      "name": "Jane",
      "attributes": {
        "intelligence": 7,
        "strength": 4,
        "endurance": 3,
        "spicyFoodTolerance": 2
      }
    },
    {
      "name": "Joe",
      "attributes": {
        "intelligence": 1,
        "strength": 1,
        "endurance": 1,
        "spicyFoodTolerance": 10
      }
    },
    {
      "name": "Joe",
      "attributes": {
        "intelligence": 1,
        "strength": 1,
        "endurance": 1,
        "spicyFoodTolerance": 10
      }
    },
    {
      "name": "ray",
      "attributes": {
        "quickness": 1
      }
    }
  ]
}
```

Example config.json:
```json
{
  "attributeWeights": {
    "intelligence": 8,
    "endurance": 2,
    "spicyFoodTolerance": 0
  }
}
```

# Output
Run using “node compatibility-predictor.js” on the terminal or command line.
Results will be printed to the console in JSON format.
