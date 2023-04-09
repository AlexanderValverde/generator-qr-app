import React, { useState } from 'react'

export const Options = ({ getColor }) => {

	const [color, setColor] = useState("#000000");

	const handleChangeColor = (event) => {
		setColor(event.target.value);
		getColor(event.target.value);
	}

	return (
		<div className='content-options'>
			<div className="input-options">
				<input
					type="color"
					id="color-picker"
					className='colors'
					value={color}
					onChange={handleChangeColor}
				/>
			</div>
		</div>
	)
}
