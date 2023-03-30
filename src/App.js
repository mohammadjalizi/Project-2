// @ts-ignore

import { createTheme, Button, ThemeProvider, CssBaseline, Typography, Stack } from "@mui/material";
import AppBarr from "components/Appbar";

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
 <Button    onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );

          setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
        }}  variant="text">
   chanch mod
 </Button>
 <br/>
 <br/>
<Stack>    
 <Typography variant="body1" > box1 </Typography>
 <Typography variant="body1" > box2 </Typography>
 <Typography variant="body1" > box3 </Typography>
 </Stack>
    </div>
    </ThemeProvider>
  );
}

export default App;
