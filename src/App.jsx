import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/productCard";
import AdminPage from "./pages/adminPage";
import TestPage from "./pages/test";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginPage";

function App() {
	return (
		<BrowserRouter>
			<div className="w-full h-[100vh] ">

				<Routes path="/">
					<Route path="/*" element={<HomePage/>}/>
					<Route path="/register" element={<h1>Register page</h1>} />
          <Route path="/login" element={<LoginPage/>} />
					<Route path="/admin/*" element={<AdminPage/>} />
					<Route path="/test" element={<TestPage/>} />			
				</Routes>

			</div>
		</BrowserRouter>
	);
}

export default App;