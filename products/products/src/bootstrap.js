// generate fake list of producrs
import faker from "faker";

const mount = (el) => {
    let products = "";

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();

        products += `<div>${name}</div>`;
    }

    document.querySelector(el).innerHTML = products;
};
if (process.env.NODE_ENV == "developmenet") {
    // env variable that automatically set by webpack
    // based on mode in webpack.config.js

    const el = document.querySelector("#dev-products");
    // check if html file has dev-products id
    // assuming container doest have element with this id
    if (el) {
        mount(el);
    }
}

// let container decide where to show data
export { mount };
