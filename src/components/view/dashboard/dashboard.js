import React from 'react';

import ProductService from '../../../shared/service/product-service';

export default class Dashboard extends React.Component {

    _productService = new ProductService();

    constructor(props) {
        super(props);
        this.state = {};
        console.log("dashboard")
    }

    async componentWillMount() {
        let response = await this._productService.findProducts();
        let data = await response.json();
        this.setState({
            products: data.groups ? data.groups.slice(0, 3) : []
        });

    }

    render() {
        const { products } = this.state;
        return (
            <div className="dashboard">
                <div className="d-sm-inline-flex">
                    {products && products.map((product, i) => {
                        return (<ProductCard item={product} />)
                    })}
                </div>
            </div>
        );
    }
}


export const ProductCard = (props) => {

    let { name, thumbnail, priceRange, messages } = props.item;
    return (
        <div className="card product-card">
            <img className="card-img-top" src={thumbnail.href} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>${priceRange.selling.low} to ${priceRange.selling.high}</p>
                <p className="card-text">Lorem ipsum dolor sit amet, in eos summo denique, nec ei saepe possim periculis.
                </p>
                <a href="#" className="btn btn-primary">BUY</a>
                <a href="#" className="btn btn-primary">DETAILS</a>
            </div>
        </div>
    );
}

