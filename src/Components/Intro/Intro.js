import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../../assets/pic1.JPG";
import "./Intro.scss";

const Intro = () => (
	<Container id="intro" className="intro card">
		<Row>
			<Col xs="auto" className="author-pic-wrapper">
				<div
					className="author-pic"
					style={{
						backgroundImage: `url("https://avatars3.githubusercontent.com/u/37283437?s=460&u=2a2c5c4c8b8db89ec19da727abba8daf277ba57e&v=4")`,
					}}
				/>
			</Col>
			<Col>
				<h1>Hoang Anh's portfolio</h1>
				<p>Studying B. Eng. in Computer Engineering at Concordia University.</p>
				<p>Based in Montreal, Canada.</p>
				<p>
					<a
						className="github-button"
						href="https://github.com/aaanh"
						data-color-scheme="no-preference: light; light: light; dark: dark;"
						aria-label="Follow @aaanh on GitHub"
					>
						Follow @aaanh
					</a>
					<br />
					{/* <div className="gh-stats-wrapper">
						<img
							style={{
								boxShadow: "10px 10px 14px -9px rgba(200, 200, 200, 1)",
							}}
							src="https://camo.githubusercontent.com/4e5a548f866498d0775b7db48514c2bc855c5a00/68747470733a2f2f6769746875622d726561646d652d73746174732e7a617373687577752e76657263656c2e6170702f6170693f757365726e616d653d7a617373687577752673686f775f69636f6e733d7472756526686964655f626f726465723d74727565"
						></img>
					</div> */}
				</p>
			</Col>
		</Row>
	</Container>
);

export default Intro;
