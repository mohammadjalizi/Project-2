// @ts-ignore

import { createTheme, Button, ThemeProvider, CssBaseline } from "@mui/material";
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
    </div>
    </ThemeProvider>
  );
}

export default App;
