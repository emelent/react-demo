import React from 'react';
import logo from './logo.svg';
import './App.css';
import Adder from './Adder'

class App extends React.Component {
	state = {
		contestantData: {}
	}

	updateContestantData  = (name, points)  => {
		if(this.state.contestantData.hasOwnProperty(name)){
			this.setState({
				contestantData: {
					...this.state.contestantData,
					[name]: this.state.contestantData[name] + points
				}
			})
		} else {
			this.setState({
				contestantData: {
					...this.state.contestantData,
					[name]: points
				}
			})
		}
	}

	render(){
		return (
			<div className="App">
				<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Adder onSubmit={this.updateContestantData} />
				</header>
			</div>
			)
	}
	
}

export default App
