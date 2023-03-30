// @ts-ignore

import { createTheme, Button, ThemeProvider, CssBaseline, Typography, Stack } from "@mui/material";
import AppBarr from "components/Appbar";
import MyList from "components/list/Mylist";
import Posts from "components/Posts/Posts";

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
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
<AppBarr/>
    <div>


<Stack direction="row">    
<MyList setmyMOde={setmyMOde} theme={theme}/>
<Posts/>
<Typography sx={{flexGrow:"2"}} variant="body1">112</Typography>
 </Stack>
    </div>
    </ThemeProvider>
  );
}

export default App;
