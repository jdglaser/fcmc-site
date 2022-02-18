# :blue_book: Custom Recipes

## String

![string](img/string.png){ width="75%" height=75% }

|       |        |       |
| ----- | ------ | ----- |
| `AIR` | `AIR`  | `AIR` |
| `AIR` | `Wool` | `AIR` |
| `AIR` | `AIR`  | `AIR` |

## Lead

![lead](img/lead.png){ width="75%" height=75% }

|          |          |          |
| -------- | -------- | -------- |
| `AIR`    | `STRING` | `STRING` |
| `AIR`    | `STRING` | `STRING` |
| `STRING` | `AIR`    | `AIR`    |

## Saddle

![saddle](img/saddle.png){ width="75%" height=75% }

|           |           |           |
| --------- | --------- | --------- |
| `AIR`     | `AIR`     | `LEAD`    |
| `LEATHER` | `LEATHER` | `LEATHER` |
| `LEATHER` | `AIR`     | `LEATHER` |

## Horse Armor

![leather_horse_armor](img/leather_horse_armor.png){ width="75%" height=75% }
![iron_horse_armor](img/iron_horse_armor.png){ width="75%" height=75% }
![gold_horse_armor](img/gold_horse_armor.png){ width="75%" height=75% }
![diamond_horse_armor](img/diamond_horse_armor.png){ width="75%" height=75% }

|                                   |          |                                   |
| --------------------------------- | -------- | --------------------------------- |
| `AIR`                             | `AIR`    | `LEATHER`/`IRON`/`GOLD`/`DIAMOND` |
| `LEATHER`/`IRON`/`GOLD`/`DIAMOND` | `Saddle` | `LEATHER`/`IRON`/`GOLD`/`DIAMOND` |
| `LEATHER`/`IRON`/`GOLD`/`DIAMOND` | `AIR`    | `LEATHER`/`IRON`/`GOLD`/`DIAMOND` |

## Gunpowder

First you will need to craft `SULFUR` (note obtain `CHARCOAL` by cooking `LOGS`)

![sulfur](img/sulfur.png){ width="75%" height=75% }

|            |            |            |
| ---------- | ---------- | ---------- |
| `SAND`     | `CHARCOAL` | `SAND`     |
| `CHARCOAL` | `SAND`     | `CHARCOAL` |
| `LEATHER`  | `AIR`      | `LEATHER`  |

Then heat the sulfur in a blast furnace to produce gunpowder

![gunpowder](img/gunpowder.png){ width="75%" height=75% }

| BLAST FURNACE |
| ------------- |
| `SULFUR`      |
| :fire:        |
| `COAL`        |

