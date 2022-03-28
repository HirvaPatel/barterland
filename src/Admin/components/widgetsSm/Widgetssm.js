import './widgetssm.css'
import { useState,useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Widgetssm() {
  const [rows,setData]=useState([]);
  const api_url=process.env.REACT_APP_BACKEND_URL + '/api/users';
  useEffect(()=>{
      fetch(api_url)
      .then(resp=>resp.json())
      .then(resp=>{setData(resp.users)})
  },[])
  const datarow=rows.slice(Math.max(rows.length - 5, 0))
  
  
  return (
  
    <div className='Widgetssm'>
      <p className='WidgetssmTitle'>New Users</p>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table" borderBottom= "none">
        <TableHead>
          <TableRow>
            <TableCell >Users</TableCell>
            {/* <TableCell >Name</TableCell>
            <TableCell></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {datarow.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{<img src={row.picture} className='WidgetssmUserImage'/>}</TableCell>
              <TableCell align="right">{row.first_name + " "+row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    </div>
    
  )
}
