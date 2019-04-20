[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Åpne data om Norske naturvernområder.

## Kilde og bruk
### Dataene brukes blant annet av

* [Natur i Norge kart](https://github.com/Artsdatabanken/nin-kart-frontend)
* [Artsdatabanken åpne data](https://data.artsdatabanken.no/)
* [Egenskapsdata lastejobb](https://github.com/Artsdatabanken/nin-egenskapsdata-lastejobb-kverna)

### Baserer seg på åpne data fra (takk til)

* [Miljødirektoratet](https://www.miljodirektoratet.no/)
* [Wikipedia](https://no.wikipedia.org)

### Bygges av

* [naturvern-lastejobb](https://github.com/Artsdatabanken/naturvern-lastejobb) (lastejobb)

## Om datasettet


Eksempel på innhold i utdata

```json
{
  "VV00000006": {
    "item": "http://www.wikidata.org/entity/Q317226",
    "article": "https://no.wikipedia.org/wiki/%C3%98vre_An%C3%A1rjohka_nasjonalpark",
    "naturbase": "VV00000006",
    "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Arctic%20sunset.jpg",
    "coords": "Point(24.75 68.733333333)",
    "inception": "1975-12-19T00:00:00Z",
    "itemLabel": "Øvre Anárjohka nasjonalpark",
    "url": "http://www.dirnat.no/anarjakka/"
  }
}
```

Nøkkel i JSON-objektet er identifikatoren i [Naturbase](https://www.miljodirektoratet.no/verktoy/naturbase/).
