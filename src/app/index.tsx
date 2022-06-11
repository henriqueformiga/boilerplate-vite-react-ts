import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppRouter } from "./router";
import { GlobalStyle } from "./styles/global.styled";
import { LightTheme } from "./styles/themes/light.theme";
import { UserService } from "./_services/user.service";

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(LightTheme)
  const service = new UserService();

  return (
    <div className="App">
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
};

export default App;
