import "../../css/widgetslg.css";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Widgetslg() {
  const [rows, setData] = useState([]);
  const api_url = process.env.REACT_APP_BACKEND_URL + "/ads";
  useEffect(() => {
    fetch(api_url)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.ads);
      });
  }, []);
  const datarow = rows.slice(Math.max(rows.length - 5, 0));
  return (
    <div className="widgetslg">
      <h3 className="widgetLgTitle"> Latest Ads</h3>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 250 }}
          aria-label="simple table"
          borderBottom="none"
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Validity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datarow.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img
                    src={row.ad_details.image_url}
                    className="WidgetssmUserImage"
                  />
                </TableCell>
                <TableCell>{row.ad_details.title}</TableCell>
                <TableCell>{row.ad_details.location}</TableCell>
                <TableCell>{row.ad_details.category}</TableCell>
                <TableCell>{row.ad_details.valid_till}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
