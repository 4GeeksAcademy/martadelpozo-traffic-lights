import React from "react";
import ReactDOM from 'react-dom';
import  '/src/styles/traffic-light.css';
import TrafficLight from "./traffic-light";


//create your first component
const Home = () => {
	return (	
		<>
		<TrafficLight />
		</>
		
	);
};

export default Home;

ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

