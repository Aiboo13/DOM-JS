const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () =>{
	const newColor = generateRandomcolor();
	document.body.style.backgroundColor= newColor;
	h1.innerText = newColor;
})

const generateRandomcolor = () => {
	const r = Math.floor(Math.random() * 25	);
	const g = Math.floor(Math.random() * 25	);
	const b = Math.floor(Math.random() * 25	);

	return `rgb(${r}, ${g}, ${b})`;
}