import { NavLink } from "react-router-dom";
import React from "react";


const TableRow = (props) => {
	return (
	<tr>
		<th scope="row">{props.index + 1}</th>
		<td>
			<NavLink to={"/profile/" + props.id}>{props.lastname} {props.name}</NavLink></td>
		<td>{props.email}</td>
	</tr>
  );
}
export class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.state = { usersRow: [] };
	}

	componentDidMount() {
		this.props.function(). then((users) => {
		let usersRow = [];
		for (let i=0; i < users.length; i++) {
			usersRow.push(
			<TableRow
		id={users[i].id} 
		index={i} 
		key={i} 
		name={users[i].name} 
		lastname={users[i].lastname} 
		email={users[i].email}
		/>);
			}
			this.setState({userRow: usersRow})
		});
	}

	render (){
		return (
			<>
			<h2 className="text-center">Мои друзья: </h2>
			<div className="row">			
				<table className="table table-bordered">
		<thead>
		<tr>
	<th scope="col">#</th>
	<th scope="col">Фамилия и имя</th>
	<th scope="col">E-mail</th>
		</tr>
	</thead>
	<tbody>{this.state.usersRow}</tbody>
	</table>	
			</div>
			<div className="row">
				<div className="col-6">
					</div>
			</div>
			</>
		);
	}
}