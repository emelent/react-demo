import React from 'react'

class Adder extends React.Component {
	state  = {
		name: "",
		points: 0
	}

	handleNameChange  = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	handlePointsChange  = (event) => {
		this.setState({
			points: parseInt(event.target.value)
		})
	}

	render(){
		const submit = () => {
			if(this.props.hasOwnProperty("onSubmit")){
				this.props.onSubmit(this.state.name, this.state.points)
			}
		}

		return (
			<div>
				<input
					type="text"
					onChange={this.handleNameChange}
				/>
				<input 
					type="number"
					onChange={this.handlePointsChange}
				/>
				<button  onClick={submit}>Submit</button>
			</div>
		)
	}
}

export default Adder