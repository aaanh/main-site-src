import React from "react";
import { Container } from "react-bootstrap";
import "./Contacts.scss";

const Contact = () => {
	return (
		<Container id="contact" className="contact card">
			<div className="contact-head">
				<h5>Contacts</h5>
			</div>
			<div className="contact-content">
				<p>
					E-Mail 1: <code>hoanganh(dot)theodore(at)icloud(dot)com</code>
					<br></br>
					E-mail 2: <code>a_en201(at)encs(dot)concordia(dot)ca</code>
				</p>
			</div>
		</Container>
	);
};

export default Contact;
