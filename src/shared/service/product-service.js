
export default class ProductService {

    baseApiUrl = "/src/data";

    constructor() {
    }

    findProducts() {
        return fetch(this.baseApiUrl + '/products.json');
    }

    findProductById(productId) {
        // TODO
        //return fetch(this.baseApiUrl + '/products.json');
    }

    findProductByKeyword(productId) {
        // TODO
        //return fetch(this.baseApiUrl + '/products.json');
    }

}