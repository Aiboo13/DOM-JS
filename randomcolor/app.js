const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

button.addEventListener('click', () =>{
	const newColor = generateRandomcolor();
	const newcColorforh1 = generateForh1();
	document.body.style.backgroundColor= newColor;
	h1.style.color = newcColorforh1;
	h1.innerText = newcColorforh1;
	h2.innerText = newColor;
})

const generateRandomcolor = () => {
	const r = Math.floor(Math.random() * 25	);
	const g = Math.floor(Math.random() * 25	);
	const b = Math.floor(Math.random() * 25	);

	return `rgb(${r}, ${g}, ${b})`;
}

const generateForh1 = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
}