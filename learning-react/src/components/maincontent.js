import React, { useState } from "react";
import PropTypes from "prop-types";

function MainContent(props) {
    const [count, setCount] = useState(props.numTopics);
    return (
        <maincontent>
            <h2>{props.pageTitle}</h2>
            This is the Main Content
            <p>There are {count} Topics</p>
            <button onClick={ ()=> setCount(count+1)}>Increase topic count</button>
        </maincontent>
    )
}

MainContent.propTypes = {
    pageTitle: PropTypes.string
}

export default MainContent;