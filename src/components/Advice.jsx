import { useState } from "react";
import { useEffect } from "react"

export const Advice = () => {
	const [advice, setAdvice] = useState("");

	useEffect(() => {
		const url = "https://api.adviceslip.com/advice";
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				console.log(json.slip.advice);
				setAdvice(json.slip.advice);
			} catch (error) {
			console.log("Error: ", error);
			}
		};
		fetchData();
	}, []);

	return <div className="border border-rose-600 p-7">{advice}</div>
};