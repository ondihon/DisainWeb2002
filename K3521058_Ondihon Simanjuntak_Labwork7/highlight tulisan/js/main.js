let myButton = document.querySelector('button');
let paragraph = document.querySelector('p')
function cari(){
	let taxts = prompt('Masukan taxs yang mau dicari')
	
	let pattern = new RegExp(`${taxts}`, "gi");

	paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}
			
myButton.onclick = function() {
	cari();
}
