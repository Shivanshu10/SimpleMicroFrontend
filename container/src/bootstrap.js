import { mount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container");

mount("#my-products");
cartMount("#my-cart");