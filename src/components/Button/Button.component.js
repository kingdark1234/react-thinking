import React, {Component} from 'react';
import './Button.style.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Button extends Component {
	render () {
		const {title, type, onClick} = this.props;

		return (
			<button className="Button" onClick={onClick}>
				{title}
			</button>
		);
	}
}

Button.propTypes = {
	type: PropTypes.oneOf(["ADD", "SUB"]).isRequired,
	onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
	type: "ADD",
	onClick: noop
};

export default Button;
