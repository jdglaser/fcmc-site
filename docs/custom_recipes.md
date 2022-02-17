# :blue_book: Custom Recipes

- [:blue_book: Custom Recipes](#blue_book-custom-recipes)
  - [String](#string)
  - [Lead](#lead)
  - [Saddle](#saddle)
  - [Horse Armor](#horse-armor)
  - [Gunpowder](#gunpowder)

## String

<img src="img/string.png" width=50% height=50%>

|       |        |       |
| ----- | ------ | ----- |
| `AIR` | `AIR`  | `AIR` |
| `AIR` | `Wool` | `AIR` |
| `AIR` | `AIR`  | `AIR` |

## Lead

<img src="img/lead.png" width=50% height=50%>

|          |          |          |
| -------- | -------- | -------- |
| `AIR`    | `STRING` | `STRING` |
| `AIR`    | `STRING` | `STRING` |
| `STRING` | `AIR`    | `AIR`    |

## Saddle

<img src="img/saddle.png" width=50% height=50%>

|           |           |           |
| --------- | --------- | --------- |
| `AIR`     | `AIR`     | `LEAD`    |
| `LEATHER` | `LEATHER` | `LEATHER` |
| `LEATHER` | `AIR`     | `LEATHER` |

## Horse Armor

<img src="img/leather_horse_armor.png" width=50% height=50%>
<img src="img/iron_horse_armor.png" width=50% height=50%>
<img src="img/gold_horse_armor.png" width=50% height=50%>
<img src="img/diamond_horse_armor.png" width=50% height=50%>

|                                   |          |                                   |
| --------------------------------- | -------- | --------------------------------- |
| `AIR`                             | `AIR`    | `LEATHER`/`IRON`/`GOLD`/`DIAMOND` |
| `LEATHER`/`IRON`/`GOLD`/`DIAMOND` | `Saddle` | `LEATHER`/`IRON`/`GOLD`/`DIAMOND` |
| `LEATHER`/`IRON`/`GOLD`/`DIAMOND` | AIR      | `LEATHER`/`IRON`/`GOLD`/`DIAMOND` |

## Gunpowder

First you will need to craft `SULFUR` (note obtain charcoal by cooking `LOGS`)

<img src="img/sulfur.png" width=50% height=50%>

|            |            |            |
| ---------- | ---------- | ---------- |
| `SAND`     | `CHARCOAL` | `SAND`     |
| `CHARCOAL` | `SAND`     | `CHARCOAL` |
| `LEATHER`  | `AIR`      | `LEATHER`  |

Then heat the sulfur in a blast furnace to produce gunpowder

<img src="img/gunpowder.png" width=50% height=50%>

| BLAST FURNACE |
| ------------- |
| `SULFUR`      |
| :fire:        |
| `COAL`        |

