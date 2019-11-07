import React from "react";
import PageTopImage from "./parts/PageTopImage";
import certificateIcon from "./images/certificate2.png";
import rickRoll from "./rick-roll.mp3";

class Specialite extends React.Component {
	constructor() {
		super();
		this.endpoint = "https://api.giphy.com/v1/gifs/random?tag=bike+stunt&api_key=lFu1aiCbnpR2Q3Wcp3baBf7fpO80K9fQ";
		this.state = { gif: null };

		this.getNewGif = this.getNewGif.bind(this);
	}

	async componentDidMount() {
		await this.getNewGif();
	}

	async getNewGif() {
		const response = await fetch(this.endpoint);
		const body = await response.json();
		const gif = body.data.image_url;
		this.setState({ gif });
	}

	render() {
		return (
			<div className="container quick-fadein">
				<PageTopImage src={certificateIcon} alt="Specialite" />
				<div className="text-center">
					<img src={this.state.gif} onClick={this.getNewGif} alt="" style={{ cursor: "pointer" }} />
					<figure>
						<audio controls loop src={rickRoll}>
							Your browser does not support the
							<code>audio</code> element.
						</audio>
					</figure>
				</div>
			</div>
		);
	}
}

export default Specialite;
