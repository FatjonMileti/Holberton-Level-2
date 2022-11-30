document.addEventListener("DOMContentLoaded", function(event) {

	var thumbnailElement = document.getElementById("smart_thumbnail");
  thumbnailElement.addEventListener("click", function() {
    if (thumbnailElement.className == "") {
			thumbnailElement.className = "small";
		} else {
			thumbnailElement.className = "";
    }
  });
});


function myFunction() {
document.getElementById('demo').style.display='block';
document.getElementById('demo1').style.display='none';
}