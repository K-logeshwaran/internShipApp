import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Posts {
  id: Number;
  userId: Number;
  title: string;
  body: string;
}

function SecondPg() {
  const navigator = useNavigate();
  const [posts, setPosts] = useState<any | null>();

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigator("/", {
        replace: true,
        state: {
          message: "Please Fill The Form to go Page2",
        },
      });
    }
    fetch("https://jsonplaceholder.typicode.com/posts").then(val=>val.json()).then(res=>{
        console.log(res)
        setPosts(res)
    })
  }, []);
  const columns: GridColDef[] = [
    {
      field: "userId",
      headerName: "User Id",
      width: 150,
      
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      
    },
    {
      field: "body",
      headerName: "Body",
      flex:2
    },
  ];

  return (
    <Container sx={{pt:2}}>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={posts ? posts :""}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Container>
  );
}

export default SecondPg;
