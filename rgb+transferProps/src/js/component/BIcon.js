import React from 'react';

class BIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	var {className, other} = this.props;
        return <span className={'glyphicon ' + className}></span>;
    }
}

export default BIcon;
