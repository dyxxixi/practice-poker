import { Color, Mark } from "./enums"
import { Deck } from "./types"

export function createDeck(): Deck {
  const deck: Deck = []
  const colors = Object.values(Color)
  const marks = Object.values(Mark)
  for (const c of colors) {
    for (const m of marks) {
      deck.push({
        color: c,
        mark: m
      })
    }
  }
  return deck
}

export function printDeck(deck: Deck) {
  let result = ""
  deck.forEach((card, i) => {
    let str = card.color + card.mark
    result += str + "\t"
    if ((i + 1) % 6 === 0) {
      result += "\n"
    }
  })
  console.log(result)
}
