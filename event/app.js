const action = document.querySelector('.click')

action.onclick = function(){
		console.log('clicked')
	}


	action.onmouseover = function() {
		// untuk action mouse menyentuk element
    console.log('jangan santuh aku');
}


const h1 = document.querySelector('h1');

h1.onmouseover = function(){
	console.log('kamu meneyentuh aku');
}

