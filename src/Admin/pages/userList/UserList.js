//Author: Hardik Mesvania
import "../../css/userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Titlebar from "../../components/TitleBar/Titlebar";
import FooterSection from '../../../home/js/FooterSection';

export default function UserList() {
  const api_url=process.env.REACT_APP_BACKEND_URL + '/api/users';
  useEffect(()=>{
      fetch(api_url)
      .then(resp=>resp.json())
      .then(resp=>{setData(resp.users)})
  },[])
  const [data,setData] =useState([])
  const handleDelete =(id)=>{
    setData(data.filter((item)=>item.user_id !==id))
};

const columns = [
    { field: 'user_id', headerName: 'ID', width: 300 },
    {
        field: 'picture',
        headerName: 'Image',
        width: 150,
        editable: true,
        renderCell: (params) => <div className="userListImageUser">
            <img className="userListImage" src={params.value} alt="" />
        </div>, 
      },
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: 'last_name', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'action', headerName: 'Action', width: 150,
      renderCell :(params) =>{
          return (
              <>
              <Link to={"/admin/users/" + params.row.user_id}>
              <button className="userListEdit">Edit</button>
              </Link>
              <DeleteIcon className="userListDelete" onClick={()=>handleDelete(params.row.user_id)}/>
              </>
          )
      }
},
  ];
  return (
    <div>
      <Titlebar />
    <div className="userList">
      <p className="dataGridTitle">Users List</p>
    <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={20 }
        rowsPerPageOptions={[11]}
        checkboxSelection
        className="DataGrid"
      />
      </div>
      <FooterSection />
      </div>
  )
}

