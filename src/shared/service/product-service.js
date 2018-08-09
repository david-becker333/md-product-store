
export default class ProductService {

    baseApiUrl = "/src/data";

    constructor() {
    }

    findProducts(params) {
        return fetch(this.baseApiUrl + '/products.json');
    }

    findProductAdds(params) {
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