// making checkbox required & select only one checkbox from multiple checkbox
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
});
// displaying the image
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
// making field not required on clicking checkbox
$('#crnt_add').on("change", function(){
if($('#same').prop('checked')){
$('#crnt_add input[type="text"]').prop("required", false);
$('#crnt_add input[type="checkbox"]').prop("required",false);
}
})
// displaying whole form after submiting the form
$('#submit').on("click", function(){
let valid = true;
$('[required]').each(function() {
if ($(this).is(':invalid') || !$(this).val()){
valid = false;
}
})
if (valid){
$('#form input[type="text"]').prop("disabled", true);
$('#form input[type="checkbox"]').prop("disabled",true);
$('#form input[type="file"]').prop("disabled",true);
}
$("#form").submit(function(event){
loadAjax();
event.preventDefault()
})
})