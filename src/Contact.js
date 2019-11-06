import React from "react";

import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import EmptySpacer from "./utils/EmptySpacer";
import contactImage from "./images/contact2.png";
import facebookIcon from "./images/facebook-icon.png";
import externalLinkIcon from "./images/external-link-icon-small.png";
import "./css/presentation.css";

const position = [47.33405, 5.08245];

const map = (
	<Map center={position} zoom={13} width={600} height={400}>
		<Marker anchor={position} payload={1} onClick={({ event, anchor, payload }) => {}} />
	</Map>
);

class Contact extends React.Component {
	render() {
		return (
			<div className="container quick-fadein">
				<div className="text-center">
					<EmptySpacer />
					<img src={contactImage} className="top-image rounded-circle" alt="Contact" />
					<EmptySpacer />
				</div>
				<h3>Contact</h3>
				<hr />
				<div className="row">
					<b>Telephone&nbsp;:&nbsp;</b>
					<a href="tel:+3380678845">03 80 67 88 45</a>
				</div>
				<div className="row">
					<b>E-mail&nbsp;:&nbsp;</b>
					<a href="mailto: patrick.viloin@sfr.fr">patrick.viloin@sfr.fr</a>
				</div>
				<div className="row">
					<b>Facebook&nbsp;:&nbsp;</b>
					<a href="http://www.facebook.com" target="_blank">
						<img src={facebookIcon} alt="Facebook" />
						<span className="external-link-icon">
							<img alt="External link icon" src={externalLinkIcon} />
						</span>
					</a>
				</div>
				<EmptySpacer />
				<div className="row">
					<div className="col-md-4"></div>
					<ul className="list-group col-md-4">
						<li className="list-group-item">Viloin Diagnostic Immobilier</li>
						<li className="list-group-item">377 rue Gauthier</li>
						<li className="list-group-item">21850 Saint-Apollinaire</li>
					</ul>
				</div>
				<EmptySpacer />
				<div className="text-center">{map}</div>
				<EmptySpacer />
			</div>
		);
	}
}

export default Contact;
