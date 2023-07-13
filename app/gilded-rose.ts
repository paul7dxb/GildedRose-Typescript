export class Item {
	name: string
	sellIn: number
	quality: number

	constructor(name, sellIn, quality) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}
}

export class GildedRose {
	items: Array<Item>

	constructor(items = [] as Array<Item>) {
		this.items = items
	}

	updateQuality() {
		for (let item of this.items) {
			// Sulfuras. They don't expire
			if (item.name === "Sulfuras, Hand of Ragnaros") {
				continue
			}

			item.sellIn--

			// Backstage passes
			if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
				if (item.sellIn < 10) {
					this.increaseQuality(item, 1)
				}
				if (item.sellIn < 5) {
					this.increaseQuality(item, 1)
				}
				if (item.sellIn < 0) {
					item.quality = 0
				} else {
					this.increaseQuality(item, 1)
				}
				this.containQualityValuesInBounds(item)
				continue
			}

			if (item.name === "Aged Brie") {
				if (item.sellIn < 0) {
					this.increaseQuality(item, 2)
				} else {
					this.increaseQuality(item, 1)
				}
				this.containQualityValuesInBounds(item)
				continue
			}

			if (item.sellIn < 0) {
				this.decreaseQuality(item, 2)
			} else {
				this.decreaseQuality(item, 1)
			}

			this.containQualityValuesInBounds(item)
		}

		return this.items
	}

	decreaseQuality(item, value) {
		item.quality = item.quality - value
	}
	increaseQuality(item, value) {
		item.quality = item.quality + value
	}
	containQualityValuesInBounds(item) {
		if (item.quality < 0) {
			item.quality = 0
		}
		if (item.quality > 50) {
			item.quality = 50
		}
	}
}
