import { expect } from "chai"
import { Item, GildedRose } from "../app/gilded-rose"

describe("Sulfuras", function () {

	it("should not decrease sellIn by 1", function () {
		const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 80)])
		const items = gildedRose.updateQuality()
        expect(items[0].sellIn).to.equal(5)
	})

	it("should have price remain at 80", function () {
		const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 80)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(80)
	})

})