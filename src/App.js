import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import SpecSheet from "./Components/SpecSheet/SpecSheet";
import Footer from "./Components/Footer/Footer";
import Splash from "./Components/Splash/Splash";

function App() {
	return (
		<div className="App">
			<Splash />
			<Header />
			<Intro />
			<Contacts />
			<About />
			<Projects />
			<SpecSheet></SpecSheet>
			<Footer></Footer>
		</div>
	);
}

export default App;
