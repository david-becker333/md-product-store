import React from 'react';

export default class ProductDetail extends React.Component {
 
    constructor(props) {
        super(props);
     }

    render() {
        return (<h1>Category</h1>);
    }
    
}





/**
     
    handleChange = (e) => {
        console.log(this)
        e.preventDefault();
        const { name, value } = e.target;
        if (name) {
            this.setState({
                [name]: value
            })
        }
    }

    validate = (e) => {
        e.preventDefault();
    }
        //this.handleChange = this.handleChange.bind(this);
       // console.log("ProductCatalog: ", this.state.products)
    <br/>
                <form name="userInfoForm">
                    <div className="form-group">
                        <label htmlFor="email">Email address
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Primary phone 
                        <input type="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.validate}>Submit</button>
                </form>


                 <ul>
                {items && items.map((product, i) => <li key={i}>{product.name}</li>)}
            </ul>
 */


