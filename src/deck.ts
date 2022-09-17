import { Color, Mark } from "./enums"
import { Card, Joker } from "./types"
export class Deck {
  private cards: Card[] = []
  constructor() {
    this.init()
  }
  private init() {
    const colors = Object.values(Color)
    const marks = Object.values(Mark)
    for (const c of colors) {
      for (const m of marks) {
        this.cards.push(<Card>{
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
    this.cards.push(joker)
    joker = {
      type: "big",
      getString() {
        return "Joker"
      },
    }
    this.cards.push(joker)
  }
  /**
   * 洗牌
   */
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const randomIndex = this.getRandom(0, this.cards.length)
      const temp = this.cards[i]
      this.cards[i] = this.cards[randomIndex]
      this.cards[randomIndex] = temp
    }
  }
  /**
   * 注：无法取到最大值
   * @param min 
   * @param max 
   */
  private getRandom(min: number, max: number) {
    const subs = max - min
    return Math.floor((subs * Math.random() - min))
  }

  print() {
    let result = ""
    this.cards.forEach((card, i) => {
      result += card.getString() + "\t"
      if ((i + 1) % 6 === 0) {
        result += "\n"
      }
    })
    console.log(result)
  }
}
