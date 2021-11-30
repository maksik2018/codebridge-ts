import { Redirect, Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./components/HomePage/HomePage.jsx"));
const ArticleDetailsPage = lazy(() =>
  import("./components/Article/Detail/Page/ArticleDetailsPage.jsx")
);
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/articles/:id" component={ArticleDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
