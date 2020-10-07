import React, { Component } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { _products } = this.props._products;
    if (_products.length > 0) {
      return (
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-12">
            <div className="row">
              {_products.map((item, index) => (
                <div
                  key={index}
                  className="col-md-2"
                  style={{ marginBottom: "10px" }}
                >
                  <img
                    src={item.image}
                    className="img-resposive"
                    style={{ width: "100%", height: "100px" }}
                    alt="products"
                  />
                  <h5>{item.name}</h5>
                  <span
                    className="badge badge-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.props.AddCart(item)}
                  >
                    Add Cart
                  </span>
                  <div>
                    <Link to={`/product/${item.id}`}>
                      <button>view</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
