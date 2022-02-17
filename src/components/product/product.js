import React from "react";
import { Checkbox } from "@material-ui/core";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const productData = this.props.data;
    console.log(productData);
    return (
      <div className="col">
        <div className="card shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="true"
          >
            <image
              width="100%"
              height="225"
              xlinkHref={productData.img}
            ></image>
          </svg>
          <div className="card-body">
            <p className="card-text">{productData.productName}</p>
            <p className="card-category">{productData.category}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p>
                <a
                  className="btn btn-secondary"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Description
                </a>
              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">{productData.description}</div>
              </div>
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
