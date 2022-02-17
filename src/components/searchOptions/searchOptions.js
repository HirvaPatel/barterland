import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "../style.scss";
import { Switch } from "@material-ui/core";

export class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subNav">
        <div className="search">
          <form className="col-12 col-lg-15 mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
        <div className="sortBy">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              className="radioGroup"
            >
              <FormControlLabel
                value="date"
                control={<Switch />}
                label="Sort By:"
              />
              <FormControlLabel value="date" control={<Radio />} label="Date" />
              <FormControlLabel
                value="price"
                control={<Radio />}
                label="Price"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}
