import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Coaching from "../Coaching/Coaching";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Page404 from "../Page404/Page404";
import Projects from "../Projects/Projects";
import Videos from "../Videos/Videos";
import "./App.css";

function App() {
	return (
		<HashRouter>
			<div className="Navigation">
				<Navigation />
			</div>
			<div className="Main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/coaching" element={<Coaching />} />
					<Route path="/videos" element={<Videos />} />
					<Route path="/about" element={<About />} />
					{/* <Route path="/contact" element={<Contact />} /> */}
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
			<div className="Footer">
				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;
