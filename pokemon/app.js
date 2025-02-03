// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


// const baseImgURL ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const container = document.querySelector('#container');

const baseImgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

for (let i = 1; i <=1250; i++) {
	const pokeball = document.createElement('div');
	const imgpokemon = document.createElement("img")
	pokeball.classList.add('pokemon');
	const label = document.createElement('span');
	label.append(`#${i}`)
	imgpokemon.src = `${baseImgURL}${i}.png`;
	
	pokeball.appendChild(imgpokemon);
	pokeball.appendChild(label)
	container.appendChild(pokeball);
}