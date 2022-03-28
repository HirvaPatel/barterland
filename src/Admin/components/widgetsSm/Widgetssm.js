import './widgetssm.css'
import { useState,useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
// import TableContainer from '@material-ui/core/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { useState,useEffect } from "react";

export default function Widgetssm() {
  const [rows,setData]=useState([]);
  const api_url="http://localhost:8080/api/users";
  useEffect(()=>{
      fetch(api_url)
      .then(resp=>resp.json())
      .then(resp=>{setData(resp.users)})
  },[])
  
  return (
    <div className='Widgetssm'>
      <h1 className='WidgetssmTitle'>New Users</h1>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table" borderBottom= "none">
        <TableHead>
          <TableRow>
            <TableCell ></TableCell>
            <TableCell ></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell ><img src={row.picture} className='WidgetssmUserImage'/></TableCell>
              <TableCell align="right">{row.first_name + " "+row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    </div>
    
  )
}
