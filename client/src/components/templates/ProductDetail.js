import React, { Component } from 'react';
import { useProduct } from '../hooks/useProduct';
import { useParams } from 'react-router-dom';

const hocProduct = (Component) => {
    return (ProductDetail = (props) => {
    const {id} = useParams();
      const { loading, error, data } = useProduct(id);
      if (loading) return `Wait, data Loading`;
      if (error) return `Error! ${error}`;
      console.log(id);
      return <Component {...props} data={data} />;
    });
  };


class ProductDetail extends Component {
    render() {
        const {data} = this.props;
        return (
            <div>
            {console.log(data)}
                ProductDetail
            </div>
        );
    }
}

export default hocProduct(ProductDetail);
