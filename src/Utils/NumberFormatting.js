export function priceFormat(price) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    }).format(price);
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