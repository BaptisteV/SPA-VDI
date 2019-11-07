import React from "react";
import EmptySpacer from "./parts/EmptySpacer";
import PageTopImage from "./parts/PageTopImage";
import certificateIcon from "./images/certificate2.png";

class Specialite extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="container quick-fadein">
				<PageTopImage src={certificateIcon} alt="Specialite" />
			</div>
		);
	}
}

export default Specialite;
