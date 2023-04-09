import React from 'react';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export const GeneratorQR = ({ urlGenerate, color, validate }) => {
	
	const handleDownload = (format) => {
		if (validate === true) {
			const qrDiv = document.getElementById('qr-div');
			html2canvas(qrDiv)
			.then(canvas => {
				canvas.toBlob(blob => {
					saveAs(blob, `qr-code.${format}`);
				});
			});
		}
	}
  return (
    <div className='content-qr'>
			<div className='generator'>
				<div className='qr'>
					<div className='qr-main' id='qr-div'>
						<QRCode value={urlGenerate} fgColor={color} level= 'H' margin= '2' className='qrgenerate'/>
					</div>
				</div>
				<div className='download'>
					<div className="downloadmain">
						<div className='content-buttons'>
							<div className='button-download' onClick={() => handleDownload('png')}>
								Download
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
	
}
