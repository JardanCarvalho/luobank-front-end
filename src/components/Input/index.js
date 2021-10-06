import React from 'react';
import './style.css';

const Input = (props) => {
	const { type, placeholder } = props;
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="input"
		/>
	)
}

export default Input;
