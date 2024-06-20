export function formatPrice(price) {
    return price.toLocaleString(undefined, {
    minimumFractionDigits: 2,//ensures that the formatted number will always have at least 2 decimal places.
    maximumFractionDigits: 2//ensures that the formatted number will not have more than 2 decimal places.
    });
}