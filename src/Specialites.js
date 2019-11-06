import React from "react";
import EmptySpacer from "./utils/EmptySpacer"
import certificateIcon from "./images/certificate2.png"

class Specialite extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
        <div className="container quick-fadein">
            <div className="text-center">
					<EmptySpacer />
					<img src={certificateIcon} className="top-image" alt="Specialite" />
					<EmptySpacer />
				</div>
        </div>)
    }
}

export default Specialite;