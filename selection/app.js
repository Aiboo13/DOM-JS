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

// for (let img of squareImages) {
// 	img.src =
// 	// ini untuk merubah src 
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

const links = document.querySelectorAll('a');
// memilih element angker 

// mengedit style link


for (let link of links) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
	// untuk memebrei style garis yang ada di bahwah elemnt angker
	// link.innerText = 'haii'
	// untuk merubah setiap elemnt angker
}

document.querySelectorAll('p a')
// cara membaca nya adalah carikan saya semua element a pada p

document.querySelectorAll('#banner')
// meskipun menacari id harus menggunakan ""
document.querySelectorAll('.banner')

const banner = document.querySelector('#banner');

banner.getAttribute("src");
banner.setAttribute("class", "kucing") //untuk menambhakan class denagn nama kucing

banner.src;
// sama halnya dengan get attribtes
// untuk mendapatkan atribut src

const Bold = document.querySelectorAll("b");

for (const replice of Bold) {
	replice.innerText = "halo"
	// querySelectorAll harus menggunakan itu 
}

const h1 = document.querySelector("h1");

h1.classList.add("border-danger");

h1.classList.add('h1-bg') 
//ternyata nyambung ke file css	


// menggunakan parents childersn provious next
const parents = document.querySelector("b").parentElement
//melihat ortu element
const children = document.querySelector("p").childElementCount
// emlihat anak elememnt
const provious = document.querySelector(".square").previousElementSibling
// melihat element sbelumnya
const provioussi = document.querySelector(".square").previousSibling
// melihat element sebelumnya secara text
const next = document.querySelector(".square").nextElementSibling
// melihat element selanjutnya 
const nextsi = document.querySelector(".square").nextSibling
// melihat element selanjutnay secara text


// append and appendchild();

const newimg = document.createElement("img");
// createElement untuk membuat element baru

newimg.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFdl0wb5v55R8uB7oBE_xgSzEB1ZNNTJBWA&s`

document.body.appendChild(newimg);
// menambahkan element ke plng bawah mg dari element body 

newimg.classList.add("square");

// append adalah alternatif dari innerTexx 