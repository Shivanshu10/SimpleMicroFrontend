import faker from "faker";

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;

    document.querySelector(el).innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-cart");

    if (el) {
        mount("#dev-cart");
    }
}
// export the mount function
export { mount };