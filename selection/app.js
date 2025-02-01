const allImages = document.getElementsByTagName('img');
// menacari semua tag name yang bernama img

// for (let img of allImages) {
// 	console.log(img.src);

// 	img.src =
	// ini untuk merubah src 
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

const squareImages = document.getElementsByClassName('square');
// sama dengan tag name namun ini menggunakan class 

for (let img of squareImages) {
	img.src =
	// ini untuk merubah src 
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
}

const links = document.querySelectorAll('a');
// memilih element angker 

// mengedit style link


for (let link of links) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}

ocument.querySelectorAll('p a')
// cara membaca nya adalah carikan saya semua element a pada p

