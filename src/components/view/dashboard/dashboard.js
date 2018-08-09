import React from 'react';
import { connect } from 'react-redux';
import { productAdds } from '../../../shared/reducer/products';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.fetchProductAddsData();
    }

    render() {
        console.log("props: ", this.props)
        const { productAdds } = this.props;
        return (
            <div className="dashboard">
                <div className="d-sm-inline-flex">
                    {productAdds && productAdds.map((product, i) => {
                        return (<ProductCard key={i} item={product} />)
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productAdds: state.products.productAdds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductAddsData: (params) => dispatch(productAdds(params))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


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

