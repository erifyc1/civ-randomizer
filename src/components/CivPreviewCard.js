import React from 'react';

export default class CivPreviewCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			revealed: false,
			counter: 0
		};

		this.handleClick = this.handleClick.bind(this);
		this.incrementCounter = this.incrementCounter.bind(this);
	}

	handleClick() {
		this.setState({ revealed: !this.state.revealed });
	}

	incrementCounter() {
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {
		return (
			<>
				<div onClick={this.handleClick}>
					<h1>{this.props.civ}</h1>
					<p>{this.props.description}</p>
					{this.state.revealed && <p>{this.props.secondaryDescription}</p>}
				</div>
				<button onClick={this.incrementCounter}>{this.state.counter} Clicks</button>
			</>
		);
	}
}
