import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Projects.scss";

const Projects = () => (
	<Container id="experience" className="projects card">
		<div className="section-header">
			<h2>Experience</h2>
		</div>
		<br />
		<div>
			<Row style={{ fontWeight: "bold" }}>
				<Col>ID</Col>
				<Col>Position</Col>
				<Col xs={7}>Description</Col>
			</Row>
		</div>
		<div>
			<Row>
				<Col>SAC Research Group (Concordia University)</Col>
				<Col>Research student</Col>
				<Col xs={7}>
					Assist research progress by running and reporting XLNet models on datasets.
				</Col>
			</Row>
		</div>
		<div>
			<Row>
				<Col>AITS (Concordia University)</Col>
				<Col>Service Desk Operator</Col>
				<Col xs={7}>
					Frontline support for utilizing university's IT, network, and account resources.
				</Col>
			</Row>
		</div>
		<div>
			<Row>
				<Col>
					<a href="https://islab.ca">Inertial Sensing Lab</a>
				</Col>
				<Col>Web Dev, Software Dev</Col>
				<Col xs={7}>
					Applied machine learning on accelerometric data processing using Python and
					Tensorflow.
				</Col>
			</Row>
		</div>
		{/* <div>
			<Row>
				<Col xs={1}>2</Col>
				<Col>FaceCookery (WIP)</Col>
				<Col>Front-end Developer</Col>
				<Col xs={7}>
					A feature-rich recipe-sharing website using React, Bootstrap, Django.
				</Col>
			</Row>
		</div> */}
		{/* <div>
			<Row>
				<Col xs={1}>3</Col>
				<Col>
					<a href="http://maiboatservice.com">Mai Boat Service</a>
				</Col>
				<Col>Full-stack Web Developer and SEO</Col>
				<Col xs={7}>
					Family-owned boat repair enterprise based in Orlando, Florida. Static
					webhosting.
				</Col>
			</Row>
		</div> */}
		<div>
			<Row>
				<Col>
					<a href="http://github.com/aaanh/arduino-phys4eng-w2020.git">
						Maze navigating vehicle
					</a>
				</Col>
				<Col>Arduino programmer (C++)</Col>
				<Col xs={7}>
					College engineering project. 3D-printed vehicle navigates by ultrasonic sensors
					controlled by an Arduino Uno.
				</Col>
			</Row>
		</div>
		<div>
			<Row>
				<Col>
					<a href="http://github.com/aaanh/mrca-sim-r.git">R project in Statistics</a>
				</Col>
				<Col>n/A</Col>
				<Col xs={7}>
					College project using R in statistical analysis. Simulate Most Recent Common
					Ancestor (MRCA).
				</Col>
			</Row>
		</div>
		{/* <div>
			<Row>
				<Col xs={1}>6</Col>
				<Col>
					<a href="https://blog.nogamioka.com">Personal blog</a>
				</Col>
				<Col>n/A</Col>
				<Col xs={7}>
					Bilingual blog about aspects of my life. Built with Jekyll blog framework.
					Hosted on Github Pages.
				</Col>
			</Row>
		</div> */}
		<br /> <br />
		<div className="research-papers-wrapper">
			<h3>Authored academic papers</h3>
			<a href="https://github.com/aaanh/researchpapers">Github Repository</a>
		</div>
		<div className="awards-wrapper">
			<h3>Awards &amp; Honors</h3>
			<ul>
				<li>
					FRQNT 2020 Stipend Recipient: For works on{" "}
					<a href="https://islab.ca">Inertial Sensing Labs</a>, under Prof. Chris
					Larnder's supervision (John Abbott College)
				</li>
			</ul>
		</div>
	</Container>
);

export default Projects;
