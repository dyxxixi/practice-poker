import { Deck } from "./deck"

const deck = new Deck()
deck.shuffle()
console.log("========洗牌后========")
deck.print()
const result = deck.deal()
console.log("========发牌后========")
console.log("玩家1：")
result[0].print()
console.log("玩家2：")
result[1].print()
console.log("玩家3：")
result[2].print()
console.log("桌面：")
result[3].print()


