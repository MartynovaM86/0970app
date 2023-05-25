import { useState } from "react";


export const Settings = ()=> {
	const [count, setCount] = useState
	return (
		<>
		<div className="row">
			<div className="col-md-6">
				<p>Количество кликов: {count}</p>
			</div>
			<div className="col-md-6">
				<button className="btn btn-info" onClick={()=> {
					setCount(count + 1);
				}}>Нажми на мен</button>
			</div>
		</div>
		</>
	);
  };