export default function useFormatCurrency(price) {
    const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    return VND.format(price);
}
