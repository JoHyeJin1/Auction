import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
