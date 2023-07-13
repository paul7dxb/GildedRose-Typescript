import { expect } from "chai"
import { Item, GildedRose } from "../app/gilded-rose"

describe("Backstage Pass", function () {

	it("should have value go to zero after concert", function () {
		const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(0)
	})

	it("should have value go up by one when days > 10", function () {
		const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(26)
	})
	it("should have value go up by 2 when 10 >= days > 5 ", function () {
		const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(27)
	})

	it("should have value go up by 3 when 5 >= days > 0 ", function () {
		const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(28)
	})

})
