# Filter Countries Containing a Given Location

Given a list of "countries", each having an idealized rectangular border,
return the set of those that contain a given lat/lon location.

This is a tiny node.js demo application.

This demo uses a set of three "countries" (USA states), described by a yaml file.
Each country name associates to a border described by the top left and bottom right
points of a rectangle. The units are degrees of latitude and longitude.

## Purpose
Prototype filtering a list of geographic locations according to each encompassing some
arbitrary lat/lon location. The logic is to be incorporated in a larger application.

## Installation
Assume `yarn` and `node.js` are present.

1. git clone the project
2. Issue `yarn install` from the project root

## Running

Issue `node app` from a terminal opened in the project root.

## Output
``` text
Test locations: [
  { lat: 40, lon: -100 },
  { lat: 0, lon: 0 },
  { lat: 37.05, lon: -116.04 },
  { lat: 37.05, lon: -116.04 },
  { lat: 37.05, lon: -116.04 },
  { lat: 35.6, lon: -78.8 },
  { lat: 39.05, lon: -100.01 }
]
All country names:
"Nevada"
"North Carolina"
"Nebraska"
"Lower Slobovia"

Hit country names: Set(3) { 'Nevada', 'North Carolina', 'Nebraska' }
```

