import { Color, Mark } from "./enums"
import { Card, Deck, Joker } from "./types"

export function createDeck(): Deck {
  const deck: Deck = []
  const colors = Object.values(Color)
  const marks = Object.values(Mark)
  for (const c of colors) {
    for (const m of marks) {
      deck.push(<Card>{
        color: c,
        mark: m,
        getString() {
          return this.color + this.mark
        }
      })
    }
  }
  let joker: Joker = {
    type: "small",
    getString() {
      return "joker"
    },
  }
  deck.push(joker)
  joker = {
    type: "big",
    getString() {
      return "Joker"
    },
  }
  deck.push(joker)
  return deck
}

export function printDeck(deck: Deck) {
  let result = ""
  deck.forEach((card, i) => {
    result += card.getString() + "\t"
    if ((i + 1) % 6 === 0) {
      result += "\n"
    }
  })
  console.log(result)
}
