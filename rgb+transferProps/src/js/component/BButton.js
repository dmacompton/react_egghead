import React from 'react';

class BButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	var {className} = this.props;
        return <a {...this.props} className={'btn ' + className}>{this.props.children}</a>;
    }
}

export default BButton;
