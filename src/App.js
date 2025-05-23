import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";
import CustomerCenter from "./pages/CustomerCenter";
import ItemList from "./pages/ItemList";
import GoSell from "./pages/GoSell";
import SerchTap from "./pages/SerchTap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/customercenter" element={<CustomerCenter />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/gosell" element={<GoSell />} />
        <Route path="/serchtap" element={<SerchTap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
