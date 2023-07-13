import { expect } from "chai"
import { Item, GildedRose } from "../app/gilded-rose"

describe("Aged Brie", function () {

	it("should have value go up by one", function () {
		const gildedRose = new GildedRose([new Item("Aged Brie", 20, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(26)
	})
	
	it("should not have quality go above 50 ", function () {
		const gildedRose = new GildedRose([new Item("Aged Brie", 1, 50)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(50)
	})

})
