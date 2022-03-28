import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Titlebar from "../../components/TitleBar/Titlebar";
import { style } from "@mui/system";
import FooterSection from '../../../home/js/FooterSection';

export default function UserList() {
  const [userList,setUserList]=useState([]);
  const api_url="http://localhost:8080/api/users";
  useEffect(()=>{
      fetch(api_url)
      .then(resp=>resp.json())
      .then(resp=>{setData(resp.users)})
  },[])
  
  console.log(userList)
  const [query,setQuery]=useState("");
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
        </div>, // renderCell will render the component
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
  console.log(query);
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
        pageSize={5 }
        rowsPerPageOptions={[11]}
        checkboxSelection
        className="DataGrid"
      />
      </div>
      <FooterSection />
      </div>
  )
}

