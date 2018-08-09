import React from 'react';
import { connect } from 'react-redux';
import { products } from '../../../shared/reducer/products';

class ProductCatalog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.fetchProductsData();
    }

    render() {
        return (
            <div>
                <select onChange={this.handleProductSelectionChange}>{this.listProductsAsOptionList()}</select>
                <ProductTable items={ this.props.products } />
            </div>
        );
    }

    handleProductSelectionChange = (event) => {
         console.log("value: ", event.target.value);
    }

    listProductsAsOptionList() {
        return (
             this.props.products.map((item, index) => {
            return <option key={index} value={item.name}>{item.name}</option> 
        }))
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsData: (params) => dispatch(products(params))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog);


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

