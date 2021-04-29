import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setcolor] = useState();

	return (
		<div className="flex-container">
			<div className=" p-4">
				<button
					onClick={() => setcolor("red")}
					className="btn btn-danger">
					Red
				</button>
				<button
					onClick={() => setcolor("yellow")}
					className="btn btn-warning">
					Yellow
				</button>
				<button
					onClick={() => setcolor("green")}
					className="btn btn-success">
					Green
				</button>
			</div>
			<div className=" container col-4">
				<div className="row">
					<div className="d-flex flex-column col-12 ">
						<div
							className={
								"circle " +
								"my-3 " +
								(color == "red" ? color : "")
							}></div>
						<div
							className={
								"circle " +
								"my-3 " +
								(color == "yellow" ? color : "")
							}></div>
						<div
							className={
								"circle " +
								"my-3 " +
								(color == "green" ? color : "")
							}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
