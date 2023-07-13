import { expect } from "chai"
import { Item, GildedRose } from "../app/gilded-rose"

describe("Gilded Rose", function () {
	it("should foo", function () {
		const gildedRose = new GildedRose([new Item("foo", 0, 0)])
		const items = gildedRose.updateQuality()
		expect(items[0].name).to.equal("foo")
	})

	it("decrease sellIn by 1", function () {
		const gildedRose = new GildedRose([new Item("foo", 5, 0)])
		const items = gildedRose.updateQuality()
		expect(items[0].sellIn).to.equal(4)
	})
    
	it("don't decrease sellIn by 1 for sulfuras", function () {
		const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 0)])
		const items = gildedRose.updateQuality()
        expect(items[0].sellIn).to.equal(5)
	})





})
