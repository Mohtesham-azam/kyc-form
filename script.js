$(document).ready(function(){
$('.check').click(function() {
let name = $(this).attr("name")
if($(this).prop('checked')){
$('.check[name="'+ name +'"]').prop('required', false)
} else {
$('.check[name="'+ name +'"]').prop('required', true)
}
$('.check[name="'+ name +'"]').not(this).prop('checked', false)
}); 
$("main").on('submit', function(e){
alert('submited')
e.preventDefault()
return false
})
});
function previewImage() {
var thisElement = event.target
var file = thisElement.files;
var fileReader = new FileReader();
fileReader.onload = function(event) {
thisElement.nextElementSibling.querySelector("img").setAttribute("src", event.target.result);
}
thisElement.style.display = 'none';
if (file.length) {
fileReader.readAsDataURL(file[0])
}
};