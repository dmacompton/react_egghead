import React from 'react';

class Slider extends React.Component {
    render() {
        return <div>
        	<label>{this.props.value}</label>
        	<input ref="range" type="range" min="0" max="255" value={this.props.value} onChange={this.props.update} />
        </div>;
    }
}

export default Slider;
