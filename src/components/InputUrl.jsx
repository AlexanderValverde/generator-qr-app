import React, { useState } from 'react';
import { SlClose } from 'react-icons/sl';


export const InputUrl = ({ getUrl, validate }) => {

	const [url, setUrl] = useState('');

	const handleChangeInput = (event) => {
		setUrl(event.target.value.trim());
		getUrl(event.target.value.trim());
	}

	const handleClear = () => {
		setUrl('');
		getUrl('');
	}

	const classValidate = (validate) ? "input" : "input activeValidate" ;

	return (
		<div className='content-input'>
			<div className={classValidate}>
				<input
					type="text"
					className="input-url"
					value={url}
					onChange={handleChangeInput}
					placeholder="https://www.ejemplo.com"
				/>
				<SlClose className='button icon-close' onClick={handleClear} />
			</div>
		</div>
	)
}
