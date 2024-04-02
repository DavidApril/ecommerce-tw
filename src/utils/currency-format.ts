
export const currencyFormat = (value: number) => {
    return new Intl.NumberFormat('en-ES', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}