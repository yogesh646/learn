import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { useState } from "react";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemText } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { blue, yellow, red } from "@mui/material/colors";
import { FormControl, FormLabel } from "@mui/material";
function App() {
  function Copyright() {
    return (
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "text.secondary",
        }}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    );
  }
  const [items, setItems] = useState([]);
  const [Check, setCheck] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [updation, setupdation] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      anger: createColor("#f08080"),
      apple: createColor("#5DBA40"),
      steelBlue: createColor("#5C76B7"),
      violet: createColor("#BC00A3"),
    },
  });
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };
  const handleEdit = (id, a, b,c) => {
    //console.log("edit",id,a,b)
    setName(a);
    setMail(b);
    setId(id);
    // setIsDisabled(false)
    setCheck(c);
   
  };
  //console.log("check :", Check);
  const handleDelete = (id) => {
    if(Check!=null){
      console.log('unable to delete',Check);
      setCheck(null);
      setId('')
      setName('')
      setMail('')
    }else
    {
    console.log("deleted", id);
    setItems(items.filter((a) => a.id != id));
    }
 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateData(id);
    } else {
      createData();
    }
  };
  const createData = () => {
    console.log("success");
    const newItem = {
      id: Math.floor(Math.random() * 30000),
      name: name,
      mail: mail,
    };
    setItems((preitem) => [...preitem, newItem]);
    setName("");
    setMail("");
    console.log(items);
  };

  const updateData = (ids) => {
    console.log(ids);
    try {
      const gel = items.map((b) => {
        if (b.id === ids) {
          return { ...updation, id: ids, name: name, mail: mail };
        }
        return b;
      });
      setItems(gel);
      setName("");
      setMail("");
      setId("");
      setCheck(null);
      console.log(gel);
    } catch {
      console.error("Error updating data:");
    }
  };
  return (
    <div className="App">
      <Container maxWidth="50">
        <Typography variant="h4" component="h1" sx={{ mb: 2, mt: 4 }}>
          <b>Welcome to New Syndicate bank with new Form</b>
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "300px",
            marginTop: "50px",
            marginLeft: "50px",
          }}
        >
          <ThemeProvider theme={theme}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={handleNameChange}
              fullWidth
              required
            />
            <TextField
              label="Mail"
              variant="outlined"
              name="mail"
              value={mail}
              onChange={handleMailChange}
              fullWidth
              required
            />
            <Button variant="contained" type="submit" color="primary">
              {id ? "Update" : "Save"}
            </Button>
          </ThemeProvider>

          {/* <Button variant="contained"  color="primary" onClick={handleUpdate}>Update</Button> */}
        </Box>
      </Container>
      <List sx={{ textAlign: "center", marginLeft: "55px" }}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <div>{index + 1}.</div>
            <div style={{ marginLeft: "5px" }}>{item.id}</div>
            <div style={{ marginLeft: "5px" }}>{item.name}</div>
            <div style={{ marginLeft: "30px" }}>{item.mail}</div>
            <Button
              onClick={() => handleEdit(item.id, item.name, item.mail,index)}
              variant="contained"
              style={{
                marginLeft: "30px",
                //backgroundColor:Check==id ? 'red' : 'primary',
              }}
              color="primary"
            >
              {Check===index ? <div className="updating">..Updating</div> : "Edit"}
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              variant="contained"
              style={{ marginLeft: "30px" }}
              color="violet"
            >
              {Check===index ? <div className="cancel">Cancel</div> : "Delete"}
            </Button>
          </ListItem>
        ))}
      </List>
      <div className="down">
        <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
          {"Pro tip: See more "}
          <Link href="https://mui.com/material-ui/getting-started/templates/">
            templates
          </Link>
          {" in the Material UI documentation."}
        </Typography>
        <Copyright />
      </div>
      {/* <Home /> */}
    </div>
  );
}

export default App;
