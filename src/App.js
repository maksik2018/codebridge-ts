import { Redirect, Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader.jsx";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./components/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./components/Movie/Page/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./components/Movie/Detail/Page/MovieDetailsPage")
);
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
