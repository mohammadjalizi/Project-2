// @ts-ignore

import { createTheme, Button, ThemeProvider, CssBaseline, Typography, Stack, Divider } from "@mui/material";
import Addpost from "components/addpost/Addpost";
import AppBarr from "components/Appbar";
import MyList from "components/list/Mylist";
import Posts from "components/Posts/Posts";
import Rightbar from "components/rightBar/Rightbar";

import getDesignTokens from "mystyle/Mytheme";
import { useMemo, useState } from "react";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const[showlist,setshowlist]=useState("none")
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
<AppBarr showlist={showlist} setshowlist={setshowlist}/>
    <div>


<Stack divider={<Divider orientation="vertical" flexItem />} direction="row">    
<MyList setmyMOde={setmyMOde} theme={theme} showlist={showlist} setshowlist={setshowlist}/>
<Posts/>
<Rightbar theme={theme}/>
 </Stack>
    </div>
    <Addpost/>
    </ThemeProvider>
  );
}

export default App;
