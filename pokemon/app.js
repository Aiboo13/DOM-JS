// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


// const baseImgURL ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const container = document.querySelector('#container');

const baseImgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

for (let i = 1; i <=1250; i++) {
	const pokeball = document.createElement('div');
	// membuat elemnt div 
	const imgpokemon = document.createElement("img")
	// membuat elemnt img
	pokeball.classList.add('pokemon');
	// menambahkan class dari style css
	const label = document.createElement('span');
	// membuat elemnt span
	label.append(`#${i}`)
	imgpokemon.src = `${baseImgURL}${i}.png`;
	// make img inicial element
	
	pokeball.appendChild(imgpokemon);
	// menyisipkan elemt imgpokemon in pokeball
	pokeball.appendChild(label)
	// menyiipkan label in pokeball
	container.appendChild(pokeball);
	// menyisipkan pokeball ke container
}