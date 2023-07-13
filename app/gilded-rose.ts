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
			if (item.name === "Sulfuras, Hand of Ragnaros") {
				continue
			}

			const sellIn = item.sellIn

			if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
			}

			if (
				item.name != "Aged Brie" &&
				item.name != "Backstage passes to a TAFKAL80ETC concert"
			) {
				item.quality = item.quality - 1
			} else {
				item.quality = item.quality + 1
				if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
					if (sellIn < 11) {
						item.quality = item.quality + 1
					}
					if (sellIn < 6) {
						item.quality = item.quality + 1
					}
				}
			}

			if (sellIn <= 0) {
				if (item.name != "Aged Brie") {
					if (
						item.name != "Backstage passes to a TAFKAL80ETC concert"
					) {
						item.quality = item.quality - 1
					} else {
						item.quality = 0
					}
				} else {
					// item.quality = item.quality + 1
					this.increaseQuality(item, 1)
				}
			}

			this.containQualityValuesInBounds(item)
			//  Reduce sellIn Date
			item.sellIn--
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
