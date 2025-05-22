import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";
import CustomerCenter from "./pages/CustomerCenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />    //내가 이 한줄 추가하니까 잘 구현되긴했으..
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/customercenter" element={<CustomerCenter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
