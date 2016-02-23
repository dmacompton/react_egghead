import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './component/Slider';
import BButton from './component/BButton';
import BIcon from './component/BIcon';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	red: 0,
        	green: 0,
        	blue: 0
        }
        this.state.divStyle = {
			height: '200px',
			width: '200px',
			backgroundColor: 'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')'
		}

        this.update = this.update.bind(this);
    }
    update(e) {
    	var red = ReactDOM.findDOMNode(this.refs.red.refs.range).value;
    	var green = ReactDOM.findDOMNode(this.refs.green.refs.range).value;
    	var blue = ReactDOM.findDOMNode(this.refs.blue.refs.range).value;
    	this.setState({
        	red: red,
        	green: green,
        	blue: blue,
			divStyle: {
				height: '200px',
				width: '200px',
				backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')'
			}
    	})
    }
    render() {
        return <div className="container">
        	<div className="col-sm-6">
		    	<Slider key="red" ref="red" value={this.state.red} update={this.update}/>
		    	<Slider key="green" ref="green" value={this.state.green} update={this.update}/>
		    	<Slider key="blue" ref="blue" value={this.state.blue} update={this.update}/>
        	</div>
        	<div className="col-sm-6" style={this.state.divStyle}></div>
            <div>
                <BButton href="success" className="btn-success">
                    <BIcon className="glyphicon-heart" /> Button
                </BButton>
                <BButton href="warning" className="btn-warning">
                    <BIcon className="glyphicon-pencil" /> Button
                </BButton>
                <BButton href="danger" className="btn-danger">
                    <BIcon className="glyphicon-inbox" /> Button
                </BButton>
                <BButton href="primary" className="btn-primary">
                    <BIcon className="glyphicon-file" /> Button
                </BButton>
            </div>
        </div>;
    }
}

export default App;
