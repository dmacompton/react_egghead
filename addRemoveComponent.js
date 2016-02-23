window.render = function() {
	React.renderComponent(<App />, app);
}
window.unmount = function() {
	React.unmountComponentAtNode(app);
}

//////////////
import React from 'react';

class Component extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
    	return nextProps.val % 5 === 0; // обновится только когда val будет кратен 5
    }
    render() {
        return <div>Component</div>;
    }
}

export default Component;
