import { expect } from "chai"
import { Item, GildedRose } from "../app/gilded-rose"

describe("Other items", function () {

	it("should have value go down by one when sellIn above 0", function () {
		const gildedRose = new GildedRose([new Item("foo", 20, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(24)
	})
	it("should have value go down by two when sellIn below 0", function () {
		const gildedRose = new GildedRose([new Item("foo", -2, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(23)
	})
	
	it("should not have go below 0 ", function () {
		const gildedRose = new GildedRose([new Item("foo", 10, 0)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(0)
	})

})
