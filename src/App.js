import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CreatePost from "./pages/CreatePost/CreatePost";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Posts from "./pages/Posts/Posts";
import UpdatePost from "./pages/UpdatePost/UpdatePost";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/updatepost/:id" component={UpdatePost} />
            <Route path="/" component={Home} exact />

            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
