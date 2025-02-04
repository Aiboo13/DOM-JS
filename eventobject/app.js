// const button = document.querySelector('button').addEventListener('click',(e) => {
// 	console.log(e);
// });

// // const input = document.querySelector('input');
// input.addEventListener(`keydown`,(e) => {
// 	switch (e.code) {
// 		// e.code tanpa tanda petik
// 		case `ArrowDown`:
// 			// a besar setap kata yang di sambung diawali huruf besar 
// 			console.log('bawah')
// 			break;
// 			case `ArrowLeft`:
// 			console.log('kiri')
// 			break;
// 			case `ArrowRight`:
// 			console.log('Kanan')
// 			break;
// 			case `ArrowUp`:
// 			console.log('atas')
// 			break;
	
// 		default:
// 			console.log('tidak diketahui');
// 			break;
// 	}
// });


const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// input.addEventListener('change', function (e) {
// 	// nilai tidak akan berpengaruh dengan yang tidak bervalue
// 	console.log('nilai berubah')
// })
input.addEventListener('input', function (e) {
	// hanya menghitung dari keydown
	console.log('nilai berhasil diinputkan')
})

form.addEventListener('submit', function(e){
	e.preventDefault(); // menhentikan submit form secara default
  const noteValue = input.value;
	const newList = document.createElement('li');
	// membyat element baru yaitu list
	newList.innerText = noteValue;
	list.append(newList);
	// menambhkan newlist di list
	input.value = '';
	// supaya kembali kosong setelah sudmid
});

const button = document.querySelector('#changeColor')
const section = document.querySelector('#section')

const generateRandomcolor = () => {
	const r = Math.floor(Math.random() * 255	);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255	);

	return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', function(e){
  section.style.backgroundColor = generateRandomcolor();
	e.stopPropagation(); // prevents
	// untuk menghnetikan programm biar program ini yang sekali jalan
});

section.addEventListener('click', function(e){
	section.classList.toggle('hide')
	e.stopPropagation(); // prevents
});