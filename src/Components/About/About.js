import React from "react";
import "./About.scss";
import { Container, Row, Col } from "react-bootstrap";
import { faAutoprefixer } from "@fortawesome/free-brands-svg-icons";

const About = () => (
	<Container id="about" className="alma-mater card">
		<div className="section-header">
			<h2>About</h2>
		</div>
		<br />
		<h3>Alma mater</h3>
		<ul>
			<li>(2017 - 2020) Pure &amp; Applied Science. John Abbott College, QC. Canada</li>
			<li>
				(2014 - 2017) Phổ thông Năng khiếu (High School for the Gifted) - VNU.HCM. Vietnam
			</li>
		</ul>
		<br />
		<h3>Tech stack/Toolkit</h3>
		<ul>
			<li>Cloud Computing: AWS S3 + EC2, GCP AE + CE + Bucket</li>
			<li>Frameworks: Jekyll (blog), React, Vue, Bootstrap, Sass, Electron</li>
			<li>Languages: C-lang family, Javascript, JSX, and Python</li>
			<li>Machine Learning: Tensorflow (Python)</li>
			<li>Server: Apache2, node</li>
		</ul>
		{/* <div className="gh-stats-wrapper">
			<img
				style={{
					filter: "none",
					width: "300px",
					height: "auto"
				}}
				src="https://camo.githubusercontent.com/02aa33baf0ebed4c72f4720263427b658ac1762d/68747470733a2f2f6769746875622d726561646d652d73746174732e7a617373687577752e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d7a61737368757775266c61796f75743d636f6d70616374267468656d653d746f6b796f6e6967687426686964655f626f726465723d74727565"
			></img>
		</div> */}
		<br />
		<h3>Human Languages</h3>
		<p>Vietnamese, English, French, Japanese, German.</p>
		<br />
		<h3>Hobbies</h3>
		<p>J-Pop, PC master race, guitar, audiophile, photography</p>
	</Container>
);

export default About;
