import React from "react";
import { firebaseConfig } from "config/firebase";
import { FirebaseAppProvider } from "reactfire";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Routes from "routes";
import theme from "config/theme";

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Routes />
      </ThemeProvider>
    </FirebaseAppProvider>
  );
}

export default App;
