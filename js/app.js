// navbar
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}
  
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
  

// scroll to element
function scrollContactFunction() {
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView();
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



window.onload = () => {
	let sliderImagesBox = document.querySelectorAll('.cards-box');
	sliderImagesBox.forEach(el => {
		let imageNodes = el.querySelectorAll('.card:not(.hide)')
		let arrIndexes = []; // Index array
		(() => {
			// The loop that added values to the arrIndexes array for the first time
			let start = 0;
			while (imageNodes.length > start) {
				arrIndexes.push(start++);
			}
		})();

		let setIndex = (arr) => {
			for(let i = 0; i < imageNodes.length; i++) {
				imageNodes[i].dataset.slide = arr[i] // Set indexes
			}
		}
		el.addEventListener('click', () => {
			arrIndexes.unshift(arrIndexes.pop());
			setIndex(arrIndexes)
		})
		setIndex(arrIndexes) // The first indexes addition
	});
};