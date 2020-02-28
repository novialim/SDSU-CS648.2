"use strict";

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var productArray = [];

var ProductTable = function ProductTable(_ref) {
  var products = _ref.products;
  return React.createElement("div", null, React.createElement("h1", null, "My Company Inventory"), React.createElement("p", null, "Showing all available products"), React.createElement("hr", null), React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    className: "table-col"
  }, "Product Name"), React.createElement("th", {
    className: "table-col"
  }, "Price"), React.createElement("th", {
    className: "table-col"
  }, "Category"), React.createElement("th", {
    className: "table-col"
  }, "Image"))), React.createElement("tbody", null, products.map(function (product, index) {
    return React.createElement(ProductRow, {
      product: product,
      index: index,
      key: product.id
    });
  }))));
};

var ProductRow = function ProductRow(_ref2) {
  var index = _ref2.index,
      product = _ref2.product;
  return React.createElement("tr", {
    key: index
  }, React.createElement("th", {
    className: "table-col"
  }, product.name), React.createElement("th", {
    className: "table-col"
  }, "$", product.price), React.createElement("th", {
    className: "table-col"
  }, product.category), React.createElement("th", {
    className: "table-col"
  }, React.createElement("a", {
    href: product.image,
    target: "_blank"
  }, "View")));
};

var ProductAdd =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ProductAdd, _React$Component);

  function ProductAdd() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      price: '$'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handlePriceChange = _this.handlePriceChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ProductAdd.prototype;

  _proto.handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.productAdd;
    var priceNum = form.price.value.replace(/\$/g, '');
    var product = {
      name: form.name.value,
      price: priceNum,
      category: form.category.value,
      image: form.imageurl.value
    };
    this.props.createProduct(product);
    form.name.value = '';
    form.price.value = '';
    form.category.value = '';
    form.imageurl.value = '';
  };

  _proto.handlePriceChange = function handlePriceChange() {
    this.setState({
      price: document.forms.productAdd.price.value
    });
  };

  _proto.render = function render() {
    return React.createElement("div", null, React.createElement("p", null, "Add a new product to Inventory"), React.createElement("hr", null), React.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, React.createElement("div", {
      className: "formContainer"
    }, React.createElement("div", {
      className: "formCol"
    }, "Category ", React.createElement("br", null), React.createElement("select", {
      name: "category"
    }, React.createElement("option", {
      value: ""
    }), React.createElement("option", {
      value: "Shirts"
    }, "Shirts"), React.createElement("option", {
      value: "Jeans"
    }, "Jeans"), React.createElement("option", {
      value: "Jackets"
    }, " Jackets"), React.createElement("option", {
      value: "Sweaters"
    }, "Sweaters "), React.createElement("option", {
      value: "Accessories"
    }, "Accessories")), React.createElement("br", null), "Product Name ", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "name"
    }), React.createElement("br", null)), React.createElement("div", {
      className: "formCol"
    }, "Price Per Unit ", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "price",
      value: this.state.price,
      onChange: this.handlePriceChange
    }), React.createElement("br", null), "Image URL ", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "imageurl"
    }), React.createElement("br", null))), React.createElement("input", {
      type: "submit",
      value: "Add Product",
      className: "submitButton"
    })));
  };

  return ProductAdd;
}(React.Component);

var ProductList =
/*#__PURE__*/
function (_React$Component2) {
  _inheritsLoose(ProductList, _React$Component2);

  function ProductList() {
    var _this2;

    _this2 = _React$Component2.call(this) || this;
    _this2.state = {
      products: []
    };
    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  var _proto2 = ProductList.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    this.setState({
      products: productArray
    });
  };

  _proto2.createProduct = function createProduct(product) {
    product.id = this.state.products.length + 1;
    var newProductList = this.state.products.slice();
    newProductList.push(product);
    this.setState({
      products: newProductList
    });
  };

  _proto2.render = function render() {
    return React.createElement("div", {
      style: {
        color: 'white'
      }
    }, React.createElement(ProductTable, {
      products: this.state.products
    }), React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  };

  return ProductList;
}(React.Component);

var element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));