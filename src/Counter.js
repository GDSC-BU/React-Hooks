import React, { useEffect, useState } from "react";
import "./Counter.css";

function Counter() {
	// Set the initial count state to zero, 0
	const [count, setCount] = useState(0);

	// useEffect(() => {
	//   console.log('Count is: ', count);
	// }, [count]);

	// Create handleIncrement event handler
	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	//Create handleDecrement event handler
	const handleDecrement = () => {
		setCount((prevCount) => prevCount - 1);
	};
	return (
		<div className="Counter">
			<h1>Counter Component</h1>
			<div>
				<button class="button_change" onClick={handleDecrement}>
					-
				</button>
				<h2>{count}</h2>
				<button class="button_change" onClick={handleIncrement}>
					+
				</button>
			</div>
			<button class="button_set" onClick={() => setCount(0)}>
				Reset
			</button>
		</div>
	);
}

export default Counter;
