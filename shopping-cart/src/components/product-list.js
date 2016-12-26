import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import ProductStore from '../stores/product-store';
import { Button } from '@blueprintjs/core';

class ProductList extends Component {
  editProduct(product, key, value) {
    product[key] = value;
    product.update();
  }

  render() {
    const { user } = this.props;
    const products = ProductStore.all;

    return (
      <div>
        <table className="pt-table pt-interactive" style={{ width: '100%' }}>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </thead>
          <tbody>
            {products.map(product => (
              <tr>
                <td>{product.id}</td>
                <td>
                  <input
                    className="pt-input pt-fill"
                    onChange={e => {
                      product.name = e.target.value;
                      product.update();
                    }}
                    value={product.name}
                  />
                </td>
                <td>
                  $ <input
                    className="pt-input pt-small"
                    onChange={e => {
                      product.price = Number(e.target.value);
                      product.update();
                    }}
                    value={product.price}
                  />
                </td>
                <td style={{ textAlign: 'right' }}>
                  <Button onClick={() => user.addToCart(product.id)}>
                    Add to cart
                  </Button>
                  &nbsp;
                  <Button onClick={() => user.removeFromCart(product.id)}>-</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default listener(ProductStore)(ProductList);