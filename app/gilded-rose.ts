export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class GildedRose {
	items: Array<Item>;
	maxItemValue: number = 50;
	minItemValue: number = 0;
	backstageTripleThreshold: number = 5;
	backstageDoubleThreshold: number = 10;

	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	updateQuality() {
		for (let item of this.items) {

            if(item.name === "Sulfuras, Hand of Ragnaros" ) {continue}

            item.sellIn--;
			switch (item.name) {
				case "Backstage passes to a TAFKAL80ETC concert":
					this.updateBackstagePass(item);
					break;
				case "Aged Brie":
					this.updateAgedBrie(item);
					break;
				case "Conjured Mana Cake":
					this.updateManaCake(item);
					break;
				default:
					this.updateDefaultItem(item);
			}
		}

		return this.items;
	}

	decreaseQuality(item, value) {
		item.quality =
			item.quality - value < this.minItemValue
				? this.minItemValue
				: item.quality - value;
	}
	increaseQuality(item, value) {
		item.quality =
			item.quality + value > this.maxItemValue
				? this.maxItemValue
				: item.quality + value;
	}

	updateBackstagePass(item) {
		if (item.sellIn < 0) {
			item.quality = 0;
		} else {
			let passIncrease;
			if (item.sellIn < this.backstageTripleThreshold) {
				passIncrease = 3;
			} else if (item.sellIn < this.backstageDoubleThreshold) {
				passIncrease = 2;
			} else {
				passIncrease = 1;
			}
			this.increaseQuality(item, passIncrease);
		}
	}

	updateAgedBrie(item) {
		const qualityChangeRate = item.sellIn < 0 ? 2 : 1;
		this.increaseQuality(item, qualityChangeRate);
	}

	updateManaCake(item) {
		const qualityChangeRate = item.sellIn < 0 ? 4 : 2;
		this.decreaseQuality(item, qualityChangeRate);
	}

	updateDefaultItem(item) {
		const qualityChangeRate = item.sellIn < 0 ? 2 : 1;
		this.decreaseQuality(item, qualityChangeRate);
	}
}
