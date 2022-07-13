// making checkbox required & select only one checkbox from multiple checkbox
$(document).ready(function(){
$('.check').click(function() {
let name = $(this).attr("name")
if($(this).prop('checked')){
$('.check[name="'+ name +'"]').prop('required', false);
} else {
$('.check[name="'+ name +'"]').prop('required', true);
}
$('.check[name="'+ name +'"]').not(this).prop('checked', false)
});
});
// making kyc no. field required for update
$('#ofc_use').on("change", function(){
if($('#update').prop('checked')){
$('#ofc_use input[type="text"]').prop("required", true);
}
})
// restricting user to input future date
$(function(){
var dtToday = new Date();
var month = dtToday.getMonth() + 1;
var day = dtToday.getDate();
var year = dtToday.getFullYear();
if(month < 10)
month = '0' + month.toString();
if(day < 10)
day = '0' + day.toString();

var maxDate = year + '-' + month + '-' + day;
$('input[type = date]').attr('max', maxDate);
});
// displaying the image
function previewImage() {
var thisElement = event.target
var file = thisElement.files;
var fileReader = new FileReader();
fileReader.onload = function(event) {
thisElement.nextElementSibling.querySelector("img").setAttribute("src", event.target.result);
}
if (file.length) {
fileReader.readAsDataURL(file[0])
} else{
    thisElement.nextElementSibling.querySelector("img").src = "";
}
};
// making text box required whose corresponding checkbox is checked & disabled other for section 2
$('#pia').on("change", function(){
$('.chk input[type="text"]').prop("disabled", true);
$('.chk input[type="tel"]').prop("disabled", true);
if($('#pn').prop('checked')){
$("#psprt").prop("required", true);
$("#psprt").prop("disabled", false);
} else{
$("#psprt").prop("required", false);
}
if($('#vc').prop('checked')){
$("#vic").prop("required", true);
$("#vic").prop("disabled", false);
} else{
$("#vic").prop("required", false);
}
if($('#dlc').prop('checked')){
$("#dl").prop("required", true);
$("#dl").prop("disabled", false);
} else{
$("#dl").prop("required", false);
}
if($('#njcc').prop('checked')){
$("#njc").prop("required", true);
$("#njc").prop("disabled", false);
} else{
$("#njc").prop("required", false);
}
if($('#nprc').prop('checked')){
$("#npr").prop("required", true);
$("#npr").prop("disabled", false);
} else{
$("#npr").prop("required", false);
}
if($('#ppa').prop('checked')){
$("#adhr").prop("required", true);
$("#adhr").prop("disabled", false);
} else{
$("#adhr").prop("required", false);
}
if($('#eka').prop('checked')){
$("#e-kyc").prop("required", true);
$("#e-kyc").prop("disabled", false);
} else{
$("#e-kyc").prop("required", false);
}
if($('#ova').prop('checked')){
$("#verification").prop("required", true);
$("#verification").prop("disabled", false);
} else{
$("#verification").prop("required", false);
}
})
// making text box required whose corresponding checkbox is checked & disabled other for section 3
$('#crnt_add').on("change", function(){
$('.chk input[type="text"]').prop("disabled", true);
if($('#pn1').prop('checked')){
$("#psprt1").prop("required", true);
$("#psprt1").prop("disabled", false);
} else{
$("#psprt1").prop("required", false);
}
if($('#vc1').prop('checked')){
$("#vic1").prop("required", true);
$("#vic1").prop("disabled", false);
} else{
$("#vic1").prop("required", false);
}
if($('#dlc1').prop('checked')){
$("#dl1").prop("required", true);
$("#dl1").prop("disabled", false);
} else{
$("#dl1").prop("required", false);
}
if($('#njcc1').prop('checked')){
$("#njc1").prop("required", true);
$("#njc1").prop("disabled", false);
} else{
$("#njc1").prop("required", false);
}
if($('#nprc1').prop('checked')){
$("#npr1").prop("required", true);
$("#npr1").prop("disabled", false);
} else{
$("#npr1").prop("required", false);
}
if($('#ppa1').prop('checked')){
$("#adhr1").prop("required", true);
$("#adhr1").prop("disabled", false);
} else{
$("#adhr1").prop("required", false);
}
if($('#eka1').prop('checked')){
$("#e-kyc1").prop("required", true);
$("#e-kyc1").prop("disabled", false);
} else{
$("#e-kyc1").prop("required", false);
}
if($('#ova1').prop('checked')){
$("#verification1").prop("required", true);
$("#verification1").prop("disabled", false);
} else{
$("#verification1").prop("required", false);
}
if($('#dpa1').prop('checked')){
$("#dpa").prop("required", true);
$("#dpa").prop("disabled", false);
} else{
$("#dpa").prop("required", false);
}
})
// auto fill on clicking checkbox
function autoFill(){
if(same.checked == true){
$('.chk input[type="checkbox"]').prop("disabled", true);
if(pn.checked == true){
pn1.checked = true;
} else{
pn1.checked = false;
}
if(vc.checked == true){
vc1.checked = true;
} else{
vc1.checked = false;
}
if(dlc.checked == true){
dlc1.checked = true;
} else{
dlc1.checked = false;
}
if(njcc.checked == true){
njcc1.checked = true;
} else{
njcc1.checked = false;
}
if(nprc.checked == true){
nprc1.checked = true;
} else{
nprc1.checked = false;
}
if(ppa.checked == true){
ppa1.checked = true;
} else{
ppa1.checked = false;
}
if(eka.checked == true){
eka1.checked = true;
} else{
eka1.checked = false;
}
if(ova.checked == true){
ova1.checked = true;
} else{
ova1.checked = false;
}
document.getElementById("psprt1").value = document.getElementById("psprt").value;
document.getElementById("vic1").value = document.getElementById("vic").value;
document.getElementById("dl1").value = document.getElementById("dl").value;
document.getElementById("njcc1").value = document.getElementById("njcc").value;
document.getElementById("npr1").value = document.getElementById("npr").value;
document.getElementById("adhr1").value = document.getElementById("adhr").value;
document.getElementById("e-kyc1").value = document.getElementById("e-kyc").value;
document.getElementById("verification1").value = document.getElementById("verification").value;
document.getElementById("cadd1").value = document.getElementById("add1").value; 
document.getElementById("cadd2").value = document.getElementById("add2").value;
document.getElementById("cadd3").value = document.getElementById("add3").value;
document.getElementById("ccity1").value = document.getElementById("city1").value;
document.getElementById("cdist1").value = document.getElementById("dist1").value;
document.getElementById("cpin1").value = document.getElementById("pin1").value;
document.getElementById("cstate1").value = document.getElementById("state1").value;
document.getElementById("ciso1").value = document.getElementById("iso1").value;
document.getElementById("psprt1").readOnly = true;
document.getElementById("vic1").readOnly = true;
document.getElementById("dl1").readOnly = true;
document.getElementById("njc1").readOnly = true;
document.getElementById("npr1").readOnly = true;
document.getElementById("adhr1").readOnly = true;
document.getElementById("e-kyc1").readOnly = true;
document.getElementById("verification1").readOnly = true;
document.getElementById("dpa").readOnly = true;
document.getElementById("cadd1").readOnly = true;
document.getElementById("cadd2").readOnly = true;
document.getElementById("cadd3").readOnly = true;
document.getElementById("ccity1").readOnly = true;
document.getElementById("cdist1").readOnly = true;
document.getElementById("cpin1").readOnly = true;
document.getElementById("cstate1").readOnly = true;
document.getElementById("ciso1").readOnly = true;
} else{
$('.chk input[type="checkbox"]').prop("disabled", false);
pn1.checked = false;
vc1.checked = false;
dlc1.checked = false;
njcc1.checked = false;
nprc1.checked = false;
ppa1.checked = false;
eka1.checked = false;
ova1.checked = false;
document.getElementById("psprt1").value = "";
document.getElementById("vic1").value = "";
document.getElementById("dl1").value = "";
document.getElementById("njc1").value = "";
document.getElementById("npr1").value = "";
document.getElementById("adhr1").value = "";
document.getElementById("e-kyc1").value = "";
document.getElementById("verification1").value = "";
document.getElementById("dpa").value = "";
document.getElementById("cadd1").value = "";
document.getElementById("cadd2").value = "";
document.getElementById("cadd3").value = "";
document.getElementById("ccity1").value = "";
document.getElementById("cdist1").value = "";
document.getElementById("cpin1").value = "";
document.getElementById("cstate1").value = "";
document.getElementById("ciso1").value = "";
document.getElementById("psprt1").readOnly = false;
document.getElementById("vic1").readOnly = false;
document.getElementById("dl1").readOnly = false;
document.getElementById("njc1").readOnly = false;
document.getElementById("npr1").readOnly = false;
document.getElementById("adhr1").readOnly = false;
document.getElementById("e-kyc1").readOnly = false;
document.getElementById("verification1").readOnly = false;
document.getElementById("dpa").readOnly = false;
document.getElementById("cadd1").readOnly = false;
document.getElementById("cadd2").readOnly = false;
document.getElementById("cadd3").readOnly = false;
document.getElementById("ccity1").readOnly = false;
document.getElementById("cdist1").readOnly = false;
document.getElementById("cpin1").readOnly = false;
document.getElementById("cstate1").readOnly = false;
document.getElementById("ciso1").readOnly = false;
}
}
// making border uniform throughout the form
var x = window.matchMedia("(max-width: 992px)");
myFunction(x);
x.addListener(myFunction);

function myFunction(x) {
var div_list = document.querySelectorAll('.brdr');
var div_array = [...div_list];
if (x.matches) {
div_array.forEach(div => {
div.style.cssText = "border-right:1px solid black !important;border-bottom:none !important;";
});
} else{
div_array.forEach(div => {
div.style.cssText = "";
});
}
}
// setting form value to local storage
function handleSubmit(){
// setting office use
let New = $("#new")[0].checked;
localStorage.setItem("NEW", New);
let update = $("#update")[0].checked;
localStorage.setItem("UPDATE", update);
let kyc = document.getElementById('kyc').value;
localStorage.setItem("KYC", kyc);
let normal = $("#normal")[0].checked;
localStorage.setItem("NORMAL", normal);
let minor = $("#minor")[0].checked;
localStorage.setItem("MINOR", minor);
let f2f = $("#f2f")[0].checked;
localStorage.setItem("F2F", f2f);

// setting name
let prefix = document.getElementById('prefix').value;
let fname = document.getElementById('fname').value;
let mname = document.getElementById('mname').value;
let lname = document.getElementById('lname').value;
localStorage.setItem("PREFIX", prefix);
localStorage.setItem("FNAME", fname);
localStorage.setItem("MNAME", mname);
localStorage.setItem("LNAME", lname);

// setting maiden name
let mprefix = document.getElementById('mprefix').value;
let mfname = document.getElementById('mfname').value;
let mmname = document.getElementById('mmname').value;
let mlname = document.getElementById('mlname').value;
localStorage.setItem("MPREFIX", mprefix);
localStorage.setItem("MFNAME", mfname);
localStorage.setItem("MMNAME", mmname);
localStorage.setItem("MLNAME", mlname);

// setting father name
let fprefix = document.getElementById('fprefix').value;
let ffname = document.getElementById('ffname').value;
let fmname = document.getElementById('fmname').value;
let flname = document.getElementById('flname').value;
localStorage.setItem("FPREFIX", fprefix);
localStorage.setItem("FFNAME", ffname);
localStorage.setItem("FMNAME", fmname);
localStorage.setItem("FLNAME", flname);

// setting mother name
let moprefix = document.getElementById('moprefix').value;
let mofname = document.getElementById('mofname').value;
let momname = document.getElementById('momname').value;
let molname = document.getElementById('molname').value;
localStorage.setItem("MOPREFIX", moprefix);
localStorage.setItem("MOFNAME", mofname);
localStorage.setItem("MOMNAME", momname);
localStorage.setItem("MOLNAME", molname);

// setting date of birth
let dob = document.getElementById('dob').value;
localStorage.setItem("DOB", dob);

// setting pan
let pan = document.getElementById('pan').value;
localStorage.setItem("PAN", pan);

let male = $("#male")[0].checked;
localStorage.setItem("MALE", male);
let female = $("#female")[0].checked;
localStorage.setItem("FEMALE", female);
let trans = $("#trans")[0].checked;
localStorage.setItem("TRANS", trans);
let married = $("#married")[0].checked;
localStorage.setItem("MARRIED", married);
let unmarried = $("#unmarried")[0].checked;
localStorage.setItem("UNMARRIED", unmarried);
let other = $("#other")[0].checked;
localStorage.setItem("OTHER", other);
let indian = $("#indian")[0].checked;
localStorage.setItem("INDIAN", indian);
let others = $("#others")[0].checked;
localStorage.setItem("OTHERS", others);
let ri = $("#ri")[0].checked;
localStorage.setItem("RI", ri);
let nri = $("#nri")[0].checked;
localStorage.setItem("NRI", nri);
let fn = $("#fn")[0].checked; 
localStorage.setItem("FN", fn);
let pio = $("#pio")[0].checked;
localStorage.setItem("PIO", pio);

// setting proof of identity
let psprt = document.getElementById('psprt').value;
let vic = document.getElementById('vic').value;
let dl = document.getElementById('dl').value;
let njc = document.getElementById('njc').value;
let npr = document.getElementById('npr').value;
let adhr = document.getElementById('adhr').value;
let e_kyc = document.getElementById('e-kyc').value;
let verification = document.getElementById('verification').value;

localStorage.setItem("PSPRT", psprt);
localStorage.setItem("VIC", vic);
localStorage.setItem("DL", dl);
localStorage.setItem("NJC", njc);
localStorage.setItem("NPR", npr);
localStorage.setItem("ADHR", adhr);
localStorage.setItem("E-KYC", e_kyc);
localStorage.setItem("VERIFICATION", verification);

let pn = $("#pn")[0].checked;
localStorage.setItem("PN", pn);
let vc = $("#vc")[0].checked;
localStorage.setItem("VC", vc);
let dlc = $("#dlc")[0].checked;
localStorage.setItem("DLC", dlc);
let njcc = $("#njcc")[0].checked;
localStorage.setItem("NJCC", njcc);
let nprc = $("#nprc")[0].checked;
localStorage.setItem("NPRC", nprc);
let ppa = $("#ppa")[0].checked;
localStorage.setItem("PPA", ppa);
let eka = $("#eka")[0].checked;
localStorage.setItem("EKA", eka);
let ova = $("#ova")[0].checked;
localStorage.setItem("OVA", ova);

// setting photo
let imgPath1 = document.querySelector('#file1').files[0];
let reader1 = new FileReader();
reader1.addEventListener("load", function() {
localStorage.setItem("PHOTO1", reader1.result);
}, false)
if (imgPath1) {
reader1.readAsDataURL(imgPath1);
}

// setting address
let add1 = document.getElementById("add1").value;
let add2 = document.getElementById("add2").value;
let add3 = document.getElementById("add3").value;
let city = document.getElementById("city1").value;
let dist = document.getElementById("dist1").value;
let pin = document.getElementById("pin1").value;
let state = document.getElementById("state1").value;
let iso = document.getElementById("iso1").value;

localStorage.setItem("ADD1", add1);
localStorage.setItem("ADD2", add2);
localStorage.setItem("ADD3", add3);
localStorage.setItem("CITY", city);
localStorage.setItem("DIST", dist);
localStorage.setItem("PIN", pin);
localStorage.setItem("STATE", state);
localStorage.setItem("ISO", iso);

// setting current address
let same = $("#same")[0].checked;
localStorage.setItem("SAME", same);

let psprt1 = document.getElementById('psprt1').value;
let vic1 = document.getElementById('vic1').value;
let dl1 = document.getElementById('dl1').value;
let njc1 = document.getElementById('njc1').value;
let npr1 = document.getElementById('npr1').value;
let adhr1 = document.getElementById('adhr1').value;
let e_kyc1 = document.getElementById('e-kyc1').value;
let verification1 = document.getElementById('verification1').value;
let dpa = document.getElementById('dpa').value;

localStorage.setItem("PSPRT1", psprt1);
localStorage.setItem("VIC1", vic1);
localStorage.setItem("DL1", dl1);
localStorage.setItem("NJC1", njc1);
localStorage.setItem("NPR1", npr1);
localStorage.setItem("ADHR1", adhr1);
localStorage.setItem("E-KYC1", e_kyc1);
localStorage.setItem("VERIFICATION1", verification1);
localStorage.setItem("DPA", dpa);

let pn1 = $("#pn1")[0].checked;
localStorage.setItem("PN1", pn1);
let vc1 = $("#vc1")[0].checked;
localStorage.setItem("VC1", vc1);
let dlc1 = $("#dlc1")[0].checked;
localStorage.setItem("DLC1", dlc1);
let njcc1 = $("#njcc1")[0].checked;
localStorage.setItem("NJCC1", njcc1);
let nprc1 = $("#nprc1")[0].checked;
localStorage.setItem("NPRC1", nprc1);
let ppa1 = $("#ppa1")[0].checked;
localStorage.setItem("PPA1", ppa1);
let eka1 = $("#eka1")[0].checked;
localStorage.setItem("EKA1", eka1);
let ova1 = $("#ova1")[0].checked;
localStorage.setItem("OVA1", ova1);
let dpa1 = $("#dpa1")[0].checked;
localStorage.setItem("DPA1", dpa1);

// setting address
let cadd1 = document.getElementById("cadd1").value;
let cadd2 = document.getElementById("cadd2").value;
let cadd3 = document.getElementById("cadd3").value;
let ccity = document.getElementById("ccity1").value;
let cdist = document.getElementById("cdist1").value;
let cpin = document.getElementById("cpin1").value;
let cstate = document.getElementById("cstate1").value;
let ciso = document.getElementById("ciso1").value;

localStorage.setItem("CADD1", cadd1);
localStorage.setItem("CADD2", cadd2);
localStorage.setItem("CADD3", cadd3);
localStorage.setItem("CCITY", ccity);
localStorage.setItem("CDIST", cdist);
localStorage.setItem("CPIN", cpin);
localStorage.setItem("CSTATE", cstate);
localStorage.setItem("CISO", ciso);

// setting contact details
let off = document.getElementById("off").value;
let res = document.getElementById("res").value;
let mob = document.getElementById("mob").value;
let email = document.getElementById("email").value;

localStorage.setItem("OFF", off);
localStorage.setItem("RES", res);
localStorage.setItem("MOB", mob);
localStorage.setItem("EMAIL", email);

// setting remarks
let remark = document.getElementById("remark").value;
localStorage.setItem("REMARK", remark);

// setting appling decleration
let place = document.getElementById("place").value;
localStorage.setItem("PLACE", place);

let imgPath2 = document.querySelector('#file2').files[0];
let reader2 = new FileReader();
reader2.addEventListener("load", function() {
localStorage.setItem("PHOTO2", reader2.result);
}, false)
if (imgPath2) {
reader2.readAsDataURL(imgPath2);
}

// setting attestation
let cc = $("#cc")[0].checked;
localStorage.setItem("CC", cc);
let uidai = $("#uidai")[0].checked;
localStorage.setItem("UIDAI", uidai);
let ov = $("#ov")[0].checked;
localStorage.setItem("OV", ov);
let dkp = $("#dkp")[0].checked;
localStorage.setItem("DKP", dkp);
let ed = $("#ed")[0].checked;
localStorage.setItem("ED", ed);
let vb = $("#vb")[0].checked;
localStorage.setItem("VB", vb);

let ipv = document.getElementById("ipv").value;
let date = document.getElementById("date").value;
let emp_name = document.getElementById("emp-name").value;
let emp_code = document.getElementById("emp-code").value;
let emp_desig = document.getElementById("emp-desig").value;
let emp_branch = document.getElementById("emp-branch").value;

localStorage.setItem("IPV", ipv);
localStorage.setItem("DATE", date);
localStorage.setItem("EMP-NAME", emp_name);
localStorage.setItem("EMP-CODE", emp_code);
localStorage.setItem("EMP-DESIG", emp_desig);
localStorage.setItem("EMP-BRANCH", emp_branch);

let imgPath3 = document.querySelector('#file3').files[0];
let reader3 = new FileReader();
reader3.addEventListener("load", function() {
localStorage.setItem("PHOTO3", reader3.result);
}, false)
if (imgPath3) {
reader3.readAsDataURL(imgPath3);
}

let imgPath4 = document.querySelector('#file4').files[0];
let reader4 = new FileReader();
reader4.addEventListener("load", function() {
localStorage.setItem("PHOTO4", reader4.result);
}, false)
if (imgPath4) {
reader4.readAsDataURL(imgPath4);
}
return;
}