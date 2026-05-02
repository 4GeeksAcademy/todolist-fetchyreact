import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { RickApi } from "./RickApi";
import { TodoListApi } from "./TodoListApi";

//create your first component
const Home = () => {
	return (
		<div>
			{/*<h2>Consumiento mi primera Api</h2>
			//<RickApi></RickApi>
			*/}
			<TodoListApi/>
		</div>
	);
};

export default Home;