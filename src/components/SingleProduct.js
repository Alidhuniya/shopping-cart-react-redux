import React from "react";
import { AddCart } from "../actions/index";

// Redux
import { connect } from "react-redux";

class SingleProduct extends React.Component {
  render() {
    const { _products } = this.props;
    return (
      <div>
        <div>
          <img
            src={_products.image}
            className="img-resposive"
            style={{ width: "100%", height: "100px" }}
            alt="products"
          />
          <h5>{_products.name}</h5>
          <span
            className="badge badge-primary"
            style={{ cursor: "pointer" }}
            onClick={() => this.props.AddCart(_products)}
          >
            Add Cart
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;

  return {
    _products: state._todoProduct._products.find((items) => items.id === id)

    // items: state.productLists
  };
};
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (_products) => dispatch(AddCart(_products))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
