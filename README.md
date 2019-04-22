[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Åpne data om Norske naturvernområder.

## Kilde og bruk
### Dataene brukes blant annet av

* [Natur i Norge kart](https://github.com/Artsdatabanken/nin-kart-frontend)
* [Artsdatabanken åpne data](https://data.artsdatabanken.no/)
* [Egenskapsdata lastejobb](https://github.com/Artsdatabanken/nin-egenskapsdata-lastejobb-kverna)

### Baserer seg på åpne data fra (takk til)

* [Miljødirektoratet](https://www.miljodirektoratet.no/)
* [Wikidata](https://www.wikidata.org/wiki/Q473972)

### Bygges av

* [naturvern-lastejobb](https://github.com/Artsdatabanken/naturvern-lastejobb) (lastejobb)

## Datasettet

```json
{
  "forvaltning": {
    "myndighet": "Lyngen kommune",
    "myndighettype": "2"
  },
  "ident_lokalid": "VV00000077",
  "lenke": {
    "faktaark": "https://faktaark.naturbase.no/?id=VV00000077",
    "verneforskrift": "http://www.lovdata.no/for/lf/mv/xv-19951208-1015.html"
  },
  "navn": {
    "navn": "Sørlenangsbotn",
    "offisielt": "Sørlenangsbotn naturreservat"
  },
  "revisjon": {
    "planbehov": "5",
    "plandato": "1 1",
    "status": "IkkeRevidert"
  },
  "vernedato": "19951208",
  "verneform": {
    "kode": "NR",
    "navn": {
      "nb": "Naturreservat"
    }
  },
  "verneplan": {
    "indeks": "2",
    "kode": "VV",
    "navn": {
      "nb": "Verneplan for våtmark"
    }
  },
  "vurdering": {
    "iucn": "1",
    "moblandprioritet": "G",
    "nettverk": "2",
    "truet": "2"
  }
}
```

Nøkkel i JSON-objektet er identifikatoren i [Naturbase](https://www.miljodirektoratet.no/verktoy/naturbase/).

## Logo

<img src="./logo/40px.png" alt="logo">

Egen [README om logo](./logo/README.md).

### Spesifikke logoer

En del verneområder har egne logoer.  Disse ligger ikke her, men hos [Miljødirektoratet](https://www.miljodirektoratet.no/om-oss/profilbank/norske-verneomrader/nasjonalparkene/nasjonalparklogoer/).

## Visuelt uttrykk

### Farger på vernelinjer
Grensene for de fremhevede verneområdene skal være tydelige og tegnet med ulike farger avhengig av typen vern.

Verneområder som ønskes vist utenfor interesseområdet kan vises med en tynnere font. Vernegrensene gis strektykkelse etter følgende oppsett:

Nasjonalpark vises med tykkere linje.
Nabo-nasjonalpark vises med en tynnere linje og samme fargekode.
Naturreservat vises med en tynnere linje.
Annet verneområde vises med en tynnere linje.


Verneformene fargesettes basert på følgende fargekoder:

| Signatur                                                           | Verneform           | C-M-Y-K         | R-G-B                                                                                     | Web          |
| ------------------------------------------------------------------ | ------------------- | --------------- | ----------------------------------------------------------------------------------------- | ------------ |
| ![#006d2c](https://placehold.it/15/006d2c/000000?text=+) Grønn     | Nasjonalpark        | 1-0-0,6-0,57    | <span style="_color:pink;  background-color:rgb(0,109,44)">0-109-44</span>                | 100-57-83-0  |
| ![#66bc5a](https://placehold.it/15/66bc5a/000000?text=+) Lys grønn | Landskapsvernområde | 0,4-0-0,5-0,2   | <span style="color:black;  background-color:rgb(102,188,90)">102-188-90</span>            | 60-26-65-0   |
| ![#990000](https://placehold.it/15/990000/000000?text=+) Rød       | Naturreservat       | 0-1-1-0,4       | <span style="_color:pink;  background-color:rgb(153,0,0)">153-0-0</span>                  | 40-100-100-0 |
| ![#e96d1f](https://placehold.it/15/e96d1f/000000?text=+) Oransje   | Marint verneområde  | 0-0,5-0,87-0,86 | <span style="_background-color:pink;  background-color:rgb(233,109,31)">233-109-31</span> | 9-57-88-0    |

Fra [Visuelt uttrykk i Designmanual](https://designmanual.norgesnasjonalparker.no/kart/visuelt-uttrykk).
