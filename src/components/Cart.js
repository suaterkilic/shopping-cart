import React, { useState } from 'react';


const Cart = (props) => {

    const { items, onRemove } = props;

    let total = 0;

    total = items.reduce((a, c) => a + c.price * c.qty, 0);

    const deleteItem = (id) => {
        onRemove(id);
    }

    return (
        <React.Fragment>
            <div className="col-md-6" style={{float: 'right'}}>
                <h2>My Shopping Cart</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody id="ok">
                        {
                            items.length > 0 && (
                                items.map((item, key) => 
                                    <tr key={key}>
                                        <td>{ item.id }</td>
                                        <td>{ item.name }</td>
                                        <td>{ item.price }</td>
                                        <td>
                                            <img
                                                height="30px"
                                                width="30px" 
                                                src={item.image} 
                                            />
                                        </td>
                                        <td>
                                            { item.qty }                   
                                        </td>

                                        <td>
                                            <button onClick={() => deleteItem(item.id)} className="btn btn-danger">
                                                DELETE
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>

                <div className="clearfix" />
                <span className="pull-right alert alert-success">Total Price: { total } ₺</span>
            </div>
        </React.Fragment>
    )
}

export default Cart;