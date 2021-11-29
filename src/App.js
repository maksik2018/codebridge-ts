import { Redirect, Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader.jsx";

// const fontList = require("font-list");

// fontList
//   .getFonts()
//   .then((fonts) => {
//     console.log(fonts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const HomePage = lazy(() => import("./components/HomePage/HomePage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./components/Movie/Detail/Page/ArticleDetailsPage.jsx")
);
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/articles/:id" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
