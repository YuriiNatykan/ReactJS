import preloader from "../../../assets/images/Spinner.svg";
import React from "react";

let Preloader = (props) => {
    return <div style={ { backgroundColor: 'white' } }>
        <img src={preloader} />
    </div>
}

export default Preloader;