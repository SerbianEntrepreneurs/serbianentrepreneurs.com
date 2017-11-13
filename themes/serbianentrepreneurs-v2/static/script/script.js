
document.querySelector('.location').classList.add("selected");
var startingId = document.querySelector('.location.selected').dataset.location;
document.querySelectorAll(".card."+startingId).forEach(function(element) {
	element.classList.remove("hidden");
});

document.querySelectorAll('.location').forEach(function(element) {
	element.addEventListener('click', toggleLocation);
});

function toggleLocation() {
	var oldId = document.querySelector('.location.selected').dataset.location;
	document.querySelector('.location.selected').classList.remove("selected");
	this.classList.add("selected");
	var id = this.dataset.location;
	document.querySelectorAll(".card."+oldId).forEach(function(element) {
		element.classList.add("hidden");
	});
	document.querySelectorAll(".card."+id).forEach(function(element) {
		element.classList.remove("hidden");
	});
}