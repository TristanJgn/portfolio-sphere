export function priceFormat(price) {
    // For most prices, only show 2 decimals like a normal currency
    if (price >= 1) {
        return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        }).format(price);
    }

    // For coins with a price under a dollar but at least 1 cent, show 4 decimals
    if (price < 1 && price >= 0.01) {
        return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 4,
        }).format(price);
    }

    // For the coins that are very low prices, i.e. under 1 cent, show 8 decimals
    if (price >= 0 && price < 0.01) {
        return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 8,
        }).format(price);
    }
};

export function roundedDollarFormat(value) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    }).format(value);
};

export function percentageFormat(value) {
    return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    }).format(value / 100);
};

export function amountFormat(amount) {
    return amount.toLocaleString("en-US");
}