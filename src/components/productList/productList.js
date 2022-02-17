import { Checkbox } from "@material-ui/core";
import React from "react";
import { Product } from "../product/product";
import { productData } from "./productData.js";
import { FormGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="album py-3 bg-light">
        <div className="productContainer">
          <div className="sidebar">
            <div className="category">
              <b>Lorem ipsum</b>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
                <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
                <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
                <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
              </FormGroup>
            </div>
            <div className="category">
              <b>Lorem ipsum</b>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
                <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
                <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
                <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
              </FormGroup>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
            id="products"
          >
            {console.log("productData in productList" + productData)}
            {productData.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
