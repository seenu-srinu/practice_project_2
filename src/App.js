import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./static/scss/main.css";
import chatlist from './components/list/chatlist';
import Singlechat from './components/single/Singlechat';
import Newchatlist from './components/newchat/Newchatlist';
import { StateProvider } from './state/Store';


function App() {
  return (
    <StateProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={chatlist} />
      <Route path="/Newchatlist" Component={Newchatlist} />
      <Route path="/Singlechat" Component={Singlechat}/>
    </Routes>
    </BrowserRouter>
    </StateProvider>
  );
}

export default App;
