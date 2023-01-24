import { render } from "react-dom";
import { StrictMode, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
// eslint-disable-next-line import/no-unresolved
import Details from "./Details";

const App = () => {
  const theme = useState("black");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to=""> Adopt Me !!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
