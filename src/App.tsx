import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/theme/defaultTheme";
import { CoffeContextProvider } from "./context/coffe";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <Router />
          <Toaster position="top-right"
            reverseOrder={false} />
        </CoffeContextProvider>
        <GlobalStyle />
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;