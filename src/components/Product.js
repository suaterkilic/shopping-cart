import React from 'react';


const Product = (props) => {

    const { products, onAdd } = props;
    
    return (
        <React.Fragment>
                <div className="col-md-6" style={{float: 'left'}}>
                    <h2>Products</h2>
                    <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, key) => 
                                <tr key={ key }>
                                    <td>{ product.id }</td>
                                    <td>
                                        <img width="40px" height="40px" src={ product.image } />
                                    </td>
                                    <td>{ product.name }</td>
                                    <td>{ product.price } ₺</td>
                                    <td>
                                        <button
                                        onClick={() => onAdd(product)} 
                                        className="btn btn-sm btn-info">
                                            Add to cart
                                            <i className="fa fa-shopping-cart" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
        </React.Fragment>
    )
}

export default Product;