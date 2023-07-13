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
		const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 80)])
		const items = gildedRose.updateQuality()
        expect(items[0].sellIn).to.equal(5)
	})

	it("sulfuras price remains at 80", function () {
		const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 80)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(80)
	})

	it("backstage pass value goes to zero after concert", function () {
		const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(0)
	})

	it("backstage pass value goes up by one when days > 10", function () {
		const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(26)
	})
	it("backstage pass value goes up by 2 when 10 >= days > 5 ", function () {
		const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(27)
	})

	it("backstage pass value goes up by 3 when 5 >= days > 0 ", function () {
		const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 25)])
		const items = gildedRose.updateQuality()
        expect(items[0].quality).to.equal(28)
	})





})
