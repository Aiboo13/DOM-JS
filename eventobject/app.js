const button = document.querySelector('button').addEventListener('click',(e) => {
	console.log(e);
});

const input = document.querySelector('input');
input.addEventListener(`keydown`,(e) => {
	switch (e.code) {
		// e.code tanpa tanda petik
		case `ArrowDown`:
			// a besar setap kata yang di sambung diawali huruf besar 
			console.log('bawah')
			break;
			case `ArrowLeft`:
			console.log('kiri')
			break;
			case `ArrowRight`:
			console.log('Kanan')
			break;
			case `ArrowUp`:
			console.log('atas')
			break;
	
		default:
			console.log('tidak diketahui');
			break;
	}
});


const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
	e.preventDefault(); // menhentikan submit form secara default
  console.log(`Form submitted`);
});