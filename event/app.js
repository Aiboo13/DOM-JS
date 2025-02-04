const click = document.querySelector('.click');

click.onclick = function(){
	alert("kamu sudah click saya ")
  }

const btnevn = document.querySelector('#eventbtn');

// btnevn.onclick = function(){ 
// 	alert("haloooooooo")
// }
btnevn.addEventListener('click', function() {
	// alert('click')
});

btnevn.onmouseover = function(){
	console.log('hover')
}

function one(){
	console.log('ini function one');
}
function two(){
	console.log('this is a function');
}

btnevn.addEventListener('click', one);
btnevn.addEventListener('click', two);
// addEventListener bisa melakuan kedua function

