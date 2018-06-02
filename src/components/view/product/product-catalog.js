import React from 'react';

import ProductService from '../../../shared/service/product-service';

export default class ProductCatalog extends React.Component {

    _productService = new ProductService();

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentWillMount() {
        let response = await this._productService.findProducts();
        let data = await response.json();
        this.setState({
            products: data.groups ? data.groups : []
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div>
                <ProductTable items={products} />
            </div>
        );
    }
}


const ProductTable = (props) => {

    const { items } = props;
    return (
        <div>
            <br/>
            <h4>Catalog</h4>
            <p>Current listing of items</p>
            <hr/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Messages</th>
                        <th scope="col">Price range</th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.map((product, i) => {
                        let { name, thumbnail, priceRange, messages } = product;
                        return (
                            <tr key={i}>
                                <td>
                                    <img src={thumbnail.href} width={100} height={100}></img>
                                </td>
                                <td>
                                    {name}
                                </td>
                                <td>
                                    <ul>
                                        {messages && messages.map((msg, i) => <li key={i}>{msg}</li>)}
                                    </ul>
                                </td>
                                <td>
                                    ${priceRange.selling.low} to ${priceRange.selling.high}
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

