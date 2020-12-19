import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritePage } from "./pages/FavoritePage";
import { AddPage } from "./pages/AddPage";
import { DetailsPage } from "./pages/DetailsPage";
import styled from "styled-components/macro";
import { SplashPage } from "./pages/SplashPage";
import { useEffect, useState } from "react";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4100);
  });

  return (
    <AppWrapper>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            {loading ? <SplashPage /> : <HomePage />}
          </Route>

          <Route path="/splash">
            <SplashPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/add">
            <AddPage />
          </Route>
          <Route path="/favorites">
            <FavoritePage />
          </Route>
          <Route path="/products/:id">
            <DetailsPage />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
