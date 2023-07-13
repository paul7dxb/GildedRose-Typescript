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
    minItemValue:number = 0;
    backstageTripleThreshold: number = 5;
    backstageDoubleThreshold: number = 10;


	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	updateQuality() {
		for (let item of this.items) {
			// Sulfuras. They don't expire
			if (item.name === "Sulfuras, Hand of Ragnaros") {
				continue;
			}

			// All other products than sulfuras get older
			item.sellIn--;

			// Backstage passes
			if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
				if (item.sellIn < 0) {
					item.quality = 0;
				} else {
					let passIncrease
                    if(item.sellIn < this.backstageTripleThreshold){
                        passIncrease = 3;
                    } else if( item.sellIn < this.backstageDoubleThreshold){
                        passIncrease = 2;
                    } else{
                        passIncrease = 1;
                    }
					this.increaseQuality(item, passIncrease);
				}
				continue;
			}

			// Items affected by Expiry
			const qualityChangeRate = item.sellIn < 0 ? 2 : 1;

			// Aged Brie
			if (item.name === "Aged Brie") {
				this.increaseQuality(item, qualityChangeRate);
				continue;
			}

			// Conjured
			if (item.name === "Conjured Mana Cake") {
				this.decreaseQuality(item, 2 * qualityChangeRate);
				continue;
			}

			// Other items
			this.decreaseQuality(item, qualityChangeRate);
		}

		return this.items;
	}

	decreaseQuality(item, value) {
		item.quality = item.quality - value < this.minItemValue ? this.minItemValue : item.quality - value;
	}
	increaseQuality(item, value) {
		item.quality = item.quality + value > this.maxItemValue ? this.maxItemValue : item.quality + value;
	}
}
