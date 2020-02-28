"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var priceNum = form.price.value.replace(/\$/g, '');
      var product = {
        name: form.name.value,
        price: priceNum,
        category: form.category.value,
        image: form.imageurl.value
      };

      _this.setState({
        price: '$'
      });

      form.name.value = '';
      form.category.value = '';
      form.imageurl.value = '';

      _this.props.createProduct(product);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePriceChange", function () {
      _this.setState({
        price: document.forms.productAdd.price.value
      });
    });

    _this.state = {
      price: '$'
    };
    return _this;
  }

  var _proto = ProductAdd.prototype;

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
    this.loadData();
  };

  _proto2.loadData =
  /*#__PURE__*/
  function () {
    var _loadData = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var query, response, body, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = "query {\n      productList {\n        id category name\n        price image\n      }\n    }";
              _context.next = 3;
              return fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query
                })
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.text();

            case 6:
              body = _context.sent;
              result = JSON.parse(body);
              this.setState({
                products: result.data.productList
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadData() {
      return _loadData.apply(this, arguments);
    }

    return loadData;
  }();

  _proto2.createProduct =
  /*#__PURE__*/
  function () {
    var _createProduct = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(product) {
      var query, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = "mutation productAdd($product: ProductInputs!) {\n      productAdd(product: $product) {\n        id\n      }\n    }";
              _context2.next = 3;
              return fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query,
                  variables: {
                    product: product
                  }
                })
              });

            case 3:
              response = _context2.sent;
              this.loadData();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createProduct(_x) {
      return _createProduct.apply(this, arguments);
    }

    return createProduct;
  }();

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