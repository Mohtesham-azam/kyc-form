// making all text in uppercase
$(function() { 
$('input').keyup(function() { 
this.value = this.value.toLocaleUpperCase(); 
}); 
}); 
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
}
};
$('#pia').on("change", function(){
if($('#pn').prop('checked')){
$("#psprt").prop("required", true);
} else{
    $("#psprt").prop("required", false);
}
if($('#vc').prop('checked')){
$("#vic").prop("required", true);
} else{
    $("#vic").prop("required", false);
}
if($('#dlc').prop('checked')){
$("#dl").prop("required", true);
} else{
    $("#dl").prop("required", false);
}
if($('#njcc').prop('checked')){
$("#njc").prop("required", true);
} else{
    $("#njc").prop("required", false);
}
if($('#nprc').prop('checked')){
$("#npr").prop("required", true);
} else{
    $("#npr").prop("required", false);
}
if($('#ppa').prop('checked')){
$("#adhr").prop("required", true);
} else{
    $("#adhr").prop("required", false);
}
if($('#eka').prop('checked')){
$("#e-kyc").prop("required", true);
} else{
    $("#e-kyc").prop("required", false);
}
if($('#ova').prop('checked')){
$("#verification").prop("required", true);
} else{
    $("#verification").prop("required", false);
}
})
// auto fill on clicking checkbox
function autoFill(){
if(same.checked == true){
if(pn.checked == true){
pn1.checked = true;
document.getElementById("pn1").disabled = true;
}
if(vc.checked == true){
vc1.checked = true;
document.getElementById("vc1").disabled = true;
}
if(dlc.checked == true){
dlc1.checked = true;
document.getElementById("dlc1").disabled = true;
}
if(njcc.checked == true){
njcc1.checked = true;
document.getElementById("njcc1").disabled = true;
}
if(nprc.checked == true){
nprc1.checked = true;
document.getElementById("nprc1").disabled = true;
}
if(ppa.checked == true){
ppa1.checked = true;
document.getElementById("ppa1").disabled = true;
}
if(eka.checked == true){
eka1.checked = true;
document.getElementById("eka1").disabled = true;
}
if(ova.checked == true){
ova1.checked = true;
document.getElementById("ova1").disabled = true;
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
const New = $("#new")[0].checked;
localStorage.setItem("NEW", New);
const update = $("#update")[0].checked;
localStorage.setItem("UPDATE", update);
const kyc = document.getElementById('kyc').value;
localStorage.setItem("KYC", kyc);
const normal = $("#normal")[0].checked;
localStorage.setItem("NORMAL", normal);
const minor = $("#minor")[0].checked;
localStorage.setItem("MINOR", minor);
const f2f = $("#f2f")[0].checked;
localStorage.setItem("F2F", f2f);

// setting name
const prefix = document.getElementById('prefix').value;
const fname = document.getElementById('fname').value;
const mname = document.getElementById('mname').value;
const lname = document.getElementById('lname').value;
localStorage.setItem("PREFIX", prefix);
localStorage.setItem("FNAME", fname);
localStorage.setItem("MNAME", mname);
localStorage.setItem("LNAME", lname);

// setting maiden name
const mprefix = document.getElementById('mprefix').value;
const mfname = document.getElementById('mfname').value;
const mmname = document.getElementById('mmname').value;
const mlname = document.getElementById('mlname').value;
localStorage.setItem("MPREFIX", mprefix);
localStorage.setItem("MFNAME", mfname);
localStorage.setItem("MMNAME", mmname);
localStorage.setItem("MLNAME", mlname);

// setting father name
const fprefix = document.getElementById('fprefix').value;
const ffname = document.getElementById('ffname').value;
const fmname = document.getElementById('fmname').value;
const flname = document.getElementById('flname').value;
localStorage.setItem("FPREFIX", fprefix);
localStorage.setItem("FFNAME", ffname);
localStorage.setItem("FMNAME", fmname);
localStorage.setItem("FLNAME", flname);

// setting mother name
const moprefix = document.getElementById('moprefix').value;
const mofname = document.getElementById('mofname').value;
const momname = document.getElementById('momname').value;
const molname = document.getElementById('molname').value;
localStorage.setItem("MOPREFIX", moprefix);
localStorage.setItem("MOFNAME", mofname);
localStorage.setItem("MOMNAME", momname);
localStorage.setItem("MOLNAME", molname);

// setting date of birth
const dob = document.getElementById('dob').value;
localStorage.setItem("DOB", dob);

// setting pan
const pan = document.getElementById('pan').value;
localStorage.setItem("PAN", pan);

const male = $("#male")[0].checked;
localStorage.setItem("MALE", male);
const female = $("#female")[0].checked;
localStorage.setItem("FEMALE", female);
const trans = $("#trans")[0].checked;
localStorage.setItem("TRANS", trans);
const married = $("#married")[0].checked;
localStorage.setItem("MARRIED", married);
const unmarried = $("#unmarried")[0].checked;
localStorage.setItem("UNMARRIED", unmarried);
const other = $("#other")[0].checked;
localStorage.setItem("OTHER", other);
const indian = $("#indian")[0].checked;
localStorage.setItem("INDIAN", indian);
const others = $("#others")[0].checked;
localStorage.setItem("OTHERS", others);
const ri = $("#ri")[0].checked;
localStorage.setItem("RI", ri);
const nri = $("#nri")[0].checked;
localStorage.setItem("NRI", nri);
const fn = $("#fn")[0].checked; 
localStorage.setItem("FN", fn);
const pio = $("#pio")[0].checked;
localStorage.setItem("PIO", pio);

// setting proof of identity
const psprt = document.getElementById('psprt').value;
const vic = document.getElementById('vic').value;
const dl = document.getElementById('dl').value;
const njc = document.getElementById('njc').value;
const npr = document.getElementById('npr').value;
const adhr = document.getElementById('adhr').value;
const e_kyc = document.getElementById('e-kyc').value;
const verification = document.getElementById('verification').value;

localStorage.setItem("PSPRT", psprt);
localStorage.setItem("VIC", vic);
localStorage.setItem("DL", dl);
localStorage.setItem("NJC", njc);
localStorage.setItem("NPR", npr);
localStorage.setItem("ADHR", adhr);
localStorage.setItem("E-KYC", e_kyc);
localStorage.setItem("VERIFICATION", verification);

const pn = $("#pn")[0].checked;
localStorage.setItem("PN", pn);
const vc = $("#vc")[0].checked;
localStorage.setItem("VC", vc);
const dlc = $("#dlc")[0].checked;
localStorage.setItem("DLC", dlc);
const njcc = $("#njcc")[0].checked;
localStorage.setItem("NJCC", njcc);
const nprc = $("#nprc")[0].checked;
localStorage.setItem("NPRC", nprc);
const ppa = $("#ppa")[0].checked;
localStorage.setItem("PPA", ppa);
const eka = $("#eka")[0].checked;
localStorage.setItem("EKA", eka);
const ova = $("#ova")[0].checked;
localStorage.setItem("OVA", ova);

// setting photo
const imgPath1 = document.querySelector('#file1').files[0];
const reader1 = new FileReader();
reader1.addEventListener("load", function() {
localStorage.setItem("PHOTO1", reader1.result);
}, false)
if (imgPath1) {
reader1.readAsDataURL(imgPath1);
}

// setting address
const add1 = document.getElementById("add1").value;
const add2 = document.getElementById("add2").value;
const add3 = document.getElementById("add3").value;
const city = document.getElementById("city1").value;
const dist = document.getElementById("dist1").value;
const pin = document.getElementById("pin1").value;
const state = document.getElementById("state1").value;
const iso = document.getElementById("iso1").value;

localStorage.setItem("ADD1", add1);
localStorage.setItem("ADD2", add2);
localStorage.setItem("ADD3", add3);
localStorage.setItem("CITY", city);
localStorage.setItem("DIST", dist);
localStorage.setItem("PIN", pin);
localStorage.setItem("STATE", state);
localStorage.setItem("ISO", iso);

// setting current address
const same = $("#same")[0].checked;
localStorage.setItem("SAME", same);

const psprt1 = document.getElementById('psprt1').value;
const vic1 = document.getElementById('vic1').value;
const dl1 = document.getElementById('dl1').value;
const njc1 = document.getElementById('njc1').value;
const npr1 = document.getElementById('npr1').value;
const adhr1 = document.getElementById('adhr1').value;
const e_kyc1 = document.getElementById('e-kyc1').value;
const verification1 = document.getElementById('verification1').value;
const dpa = document.getElementById('dpa').value;

localStorage.setItem("PSPRT1", psprt1);
localStorage.setItem("VIC1", vic1);
localStorage.setItem("DL1", dl1);
localStorage.setItem("NJC1", njc1);
localStorage.setItem("NPR1", npr1);
localStorage.setItem("ADHR1", adhr1);
localStorage.setItem("E-KYC1", e_kyc1);
localStorage.setItem("VERIFICATION1", verification1);
localStorage.setItem("DPA", dpa);

const pn1 = $("#pn1")[0].checked;
localStorage.setItem("PN1", pn1);
const vc1 = $("#vc1")[0].checked;
localStorage.setItem("VC1", vc1);
const dlc1 = $("#dlc1")[0].checked;
localStorage.setItem("DLC1", dlc1);
const njcc1 = $("#njcc1")[0].checked;
localStorage.setItem("NJCC1", njcc1);
const nprc1 = $("#nprc1")[0].checked;
localStorage.setItem("NPRC1", nprc1);
const ppa1 = $("#ppa1")[0].checked;
localStorage.setItem("PPA1", ppa1);
const eka1 = $("#eka1")[0].checked;
localStorage.setItem("EKA1", eka1);
const ova1 = $("#ova1")[0].checked;
localStorage.setItem("OVA1", ova1);
const dpa1 = $("#dpa1")[0].checked;
localStorage.setItem("DPA1", dpa1);

// setting address
const cadd1 = document.getElementById("cadd1").value;
const cadd2 = document.getElementById("cadd2").value;
const cadd3 = document.getElementById("cadd3").value;
const ccity = document.getElementById("ccity1").value;
const cdist = document.getElementById("cdist1").value;
const cpin = document.getElementById("cpin1").value;
const cstate = document.getElementById("cstate1").value;
const ciso = document.getElementById("ciso1").value;

localStorage.setItem("CADD1", cadd1);
localStorage.setItem("CADD2", cadd2);
localStorage.setItem("CADD3", cadd3);
localStorage.setItem("CCITY", ccity);
localStorage.setItem("CDIST", cdist);
localStorage.setItem("CPIN", cpin);
localStorage.setItem("CSTATE", cstate);
localStorage.setItem("CISO", ciso);

// setting contact details
const off = document.getElementById("off").value;
const res = document.getElementById("res").value;
const mob = document.getElementById("mob").value;
const email = document.getElementById("email").value;

localStorage.setItem("OFF", off);
localStorage.setItem("RES", res);
localStorage.setItem("MOB", mob);
localStorage.setItem("EMAIL", email);

// setting remarks
const remark = document.getElementById("remark").value;
localStorage.setItem("REMARK", remark);

// setting appling decleration
const place = document.getElementById("place").value;
localStorage.setItem("PLACE", place);

const imgPath2 = document.querySelector('#file2').files[0];
const reader2 = new FileReader();
reader2.addEventListener("load", function() {
localStorage.setItem("PHOTO2", reader2.result);
}, false)
if (imgPath2) {
reader2.readAsDataURL(imgPath2);
}

// setting attestation
const cc = $("#cc")[0].checked;
localStorage.setItem("CC", cc);
const uidai = $("#uidai")[0].checked;
localStorage.setItem("UIDAI", uidai);
const ov = $("#ov")[0].checked;
localStorage.setItem("OV", ov);
const dkp = $("#dkp")[0].checked;
localStorage.setItem("DKP", dkp);
const ed = $("#ed")[0].checked;
localStorage.setItem("ED", ed);
const vb = $("#vb")[0].checked;
localStorage.setItem("VB", vb);

const ipv = document.getElementById("ipv").value;
const date = document.getElementById("date").value;
const emp_name = document.getElementById("emp-name").value;
const emp_code = document.getElementById("emp-code").value;
const emp_desig = document.getElementById("emp-desig").value;
const emp_branch = document.getElementById("emp-branch").value;

localStorage.setItem("IPV", ipv);
localStorage.setItem("DATE", date);
localStorage.setItem("EMP-NAME", emp_name);
localStorage.setItem("EMP-CODE", emp_code);
localStorage.setItem("EMP-DESIG", emp_desig);
localStorage.setItem("EMP-BRANCH", emp_branch);

const imgPath3 = document.querySelector('#file3').files[0];
const reader3 = new FileReader();
reader3.addEventListener("load", function() {
localStorage.setItem("PHOTO3", reader3.result);
}, false)
if (imgPath3) {
reader3.readAsDataURL(imgPath3);
}

const imgPath4 = document.querySelector('#file4').files[0];
const reader4 = new FileReader();
reader4.addEventListener("load", function() {
localStorage.setItem("PHOTO4", reader4.result);
}, false)
if (imgPath4) {
reader4.readAsDataURL(imgPath4);
}

return;
}