class PriceModel {
    constructor(discount) {
        this.discount = discount;
        this.price = 0;
    }

    checkout() {
        return this.discount(this.price);
    }

    setPrice(price) {
        this.price = price;
    }
}


function regularModel(price) {
    return price;
}

function premiumModel(price) {
    return price * 1.2;
}

const regular = new PriceModel(regularModel());
export { PriceModel, regularModel, premiumModel };

