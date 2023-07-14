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
        
		this.items = this.items.map( item => {
			return this.updateItem(item)
		})

		return this.items;
	}


	updateItem({ name, sellIn, quality }) {

		if (name === "Sulfuras, Hand of Ragnaros") {
            return new Item(name, sellIn, quality);
		}

		const newSellIn = sellIn - 1;
		let newQuality;

		switch (name) {
			case "Backstage passes to a TAFKAL80ETC concert":
				newQuality = this.updateBackstagePass(newSellIn, quality);
				break;
			case "Aged Brie":
				newQuality = this.updateAgedBrie(newSellIn, quality);
				break;
			case "Conjured Mana Cake":
				newQuality = this.updateManaCake(newSellIn, quality);
				break;
			default:
				newQuality = this.updateDefaultItem(newSellIn, quality);
		}

		return new Item(name, newSellIn, newQuality);
	}


	decreaseQuality(quality, value) {
		return quality - value < this.minItemValue ? this.minItemValue : quality - value;
	}

	increaseQuality(quality, value) {
		return quality + value > this.maxItemValue ? this.maxItemValue : quality + value;
	}

	updateBackstagePass(sellIn, quality) {
		if (sellIn < 0) {
			return (quality = 0);
		} else {
			let passIncrease;
			if (sellIn < this.backstageTripleThreshold) {
				passIncrease = 3;
			} else if (sellIn < this.backstageDoubleThreshold) {
				passIncrease = 2;
			} else {
				passIncrease = 1;
			}
			return this.increaseQuality(quality, passIncrease);
		}
	}

	updateAgedBrie(sellIn, quality) {
		const qualityChangeRate = sellIn < 0 ? 2 : 1;
		return this.increaseQuality(quality, qualityChangeRate);
	}

	updateManaCake(sellIn, quality) {
		const manaCakeEffect = 2;
		const qualityChangeRate = sellIn < 0 ? 2 * manaCakeEffect : manaCakeEffect;
		return this.decreaseQuality(quality, qualityChangeRate);
	}

	updateDefaultItem(sellIn, quality) {
		const qualityChangeRate = sellIn < 0 ? 2 : 1;
		return this.decreaseQuality(quality, qualityChangeRate);
	}

}
