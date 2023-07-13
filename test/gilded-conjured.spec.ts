import { expect } from "chai"
import { Item, GildedRose } from "../app/gilded-rose"

describe("Conjured items", function () {

	it("should have value go down by two when sellIn above 0", function () {
		const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 20, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(23)
	})
	it("should have value go down by four when sellIn below 0", function () {
		const gildedRose = new GildedRose([new Item("Conjured Mana Cake", -2, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(21)
	})
	
	it("should not have go below 0 ", function () {
		const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 10, 1)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(0)
	})

})
