import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import { Provider } from "react-redux";
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm></PostForm>
        <hr></hr>
        <Posts></Posts>
      </div>
    </Provider>
  );
}

export default App;
