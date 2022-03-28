import React from "react";
import { Checkbox } from "@material-ui/core";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./MyAds.css";

export class Ad extends React.Component {
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
              xlinkHref={productData.ad_details.image_url}
            ></image>
          </svg>
          <div className="card-body">
            <h2 className="card-text">{productData.ad_details.title}</h2>
            <div className="adDetail">
              <p className="card-category">{productData.ad_details.category}</p>
              <div className="Favorite">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
