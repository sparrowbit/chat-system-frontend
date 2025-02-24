import LoginPage from "./pages/authPages/LoginPage";
import SignupPage from "./pages/authPages/SignupPage";
import ChatPage from "./pages/ChatPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
