// getting form value through local storage
window.addEventListener('load', () => {
// geeting office use
const o_New = localStorage.getItem("NEW");
if(o_New === 'true'){
document.getElementById('o-new').checked = true;
}
const o_update = localStorage.getItem("UPDATE");
if(o_update === 'true'){
document.getElementById('o-new').checked = true;
}
const o_kyc = localStorage.getItem("KYC");
document.getElementById('o-kyc').innerHTML = o_kyc;
const o_normal = localStorage.getItem("NORMAL");
if(o_normal === 'true'){
document.getElementById('o-normal').checked = true;
}
const o_minor = localStorage.getItem("MINOR");
if(o_minor === 'true'){
document.getElementById('o-minor').checked = true;
}
const o_f2f = localStorage.getItem("F2F");
if(o_f2f === 'true'){
document.getElementById('o-f2f').checked = true;
}

// getting name
const o_prefix = localStorage.getItem("PREFIX");
const o_fname = localStorage.getItem("FNAME");
const o_mname = localStorage.getItem("MNAME");
const o_lname = localStorage.getItem("LNAME");
document.getElementById('o-prefix').innerHTML = o_prefix;
document.getElementById('o-fname').innerHTML = o_fname;
document.getElementById('o-mname').innerHTML = o_mname;
document.getElementById('o-lname').innerHTML = o_lname;

// getting maiden name
const o_mprefix = localStorage.getItem("MPREFIX");
const o_mfname = localStorage.getItem("MFNAME");
const o_mmname = localStorage.getItem("MMNAME");
const o_mlname = localStorage.getItem("MLNAME");
document.getElementById('o-mprefix').innerHTML = o_mprefix;
document.getElementById('o-mfname').innerHTML = o_mfname;
document.getElementById('o-mmname').innerHTML = o_mmname;
document.getElementById('o-mlname').innerHTML = o_mlname;

// // getting father name
const o_fprefix = localStorage.getItem("FPREFIX");
const o_ffname = localStorage.getItem("FFNAME");
const o_fmname = localStorage.getItem("FMNAME");
const o_flname = localStorage.getItem("FLNAME");
document.getElementById('o-fprefix').innerHTML = o_fprefix;
document.getElementById('o-ffname').innerHTML = o_ffname;
document.getElementById('o-fmname').innerHTML = o_fmname;
document.getElementById('o-flname').innerHTML = o_flname;

// // getting mother name
const o_moprefix = localStorage.getItem("MOPREFIX");
const o_mofname = localStorage.getItem("MOFNAME");
const o_momname = localStorage.getItem("MOMNAME");
const o_molname = localStorage.getItem("MOLNAME");
document.getElementById('o-moprefix').innerHTML = o_moprefix;
document.getElementById('o-mofname').innerHTML = o_mofname;
document.getElementById('o-momname').innerHTML = o_momname;
document.getElementById('o-molname').innerHTML = o_molname;

// getting date of birth
const o_dob = localStorage.getItem("DOB");
document.getElementById('o-dob').innerHTML = o_dob;

// getting pan
const o_pan = localStorage.getItem("PAN");
document.getElementById('o-pan').innerHTML = o_pan;

const o_male = localStorage.getItem("MALE");
if(o_male === 'true'){
document.getElementById('o-male').checked = true;
}
const o_female = localStorage.getItem("FEMALE");
if(o_female === 'true'){
document.getElementById('o-female').checked = true;
}
const o_trans = localStorage.getItem("TRANS");
if(o_trans === 'true'){
document.getElementById('o-trans').checked = true;
}
const o_married = localStorage.getItem("MARRIED");
if(o_married === 'true'){
document.getElementById('o-married').checked = true;
}
const o_unmarried = localStorage.getItem("UNMARRIED");
if(o_unmarried === 'true'){
document.getElementById('o-unmarried').checked = true;
}
const o_other = localStorage.getItem("OTHER");
if(o_other === 'true'){
document.getElementById('o-other').checked = true;
}
const o_indian = localStorage.getItem("INDIAN");
if(o_indian === 'true'){
document.getElementById('o-indian').checked = true;
}
const o_others = localStorage.getItem("OTHERS");
if(o_others === 'true'){
document.getElementById('o-others').checked = true;
}
const o_ri = localStorage.getItem("RI");
if(o_ri === 'true'){
document.getElementById('o-ri').checked = true;
}
const o_nri = localStorage.getItem("NRI");
if(o_nri === 'true'){
document.getElementById('o-nri').checked = true;
}
const o_fn = localStorage.getItem("FN");
if(o_fn === 'true'){
document.getElementById('o-fn').checked = true;
}
const o_pio = localStorage.getItem("PIO");
if(o_pio === 'true'){
document.getElementById('o-pio').checked = true;
}
// getting proof of identity
const o_psprt = localStorage.getItem("PSPRT");
const o_vic = localStorage.getItem("VIC");
const o_dl = localStorage.getItem("DL");
const o_njc = localStorage.getItem("NJC");
const o_npr = localStorage.getItem("NPR");
const o_adhr = localStorage.getItem("ADHR");
const o_e_kyc = localStorage.getItem("E-KYC");
const o_verification = localStorage.getItem("VERIFICATION");

document.getElementById('o-psprt').innerHTML = o_psprt;
document.getElementById('o-vic').innerHTML = o_vic;
document.getElementById('o-dl').innerHTML = o_dl;
document.getElementById('o-njc').innerHTML = o_njc;
document.getElementById('o-npr').innerHTML = o_npr;
document.getElementById('o-adhr').innerHTML = o_adhr;
document.getElementById('o-e-kyc').innerHTML = o_e_kyc;
document.getElementById('o-verification').innerHTML = o_verification;

const o_pn = localStorage.getItem("PN");
if(o_pn === 'true'){
document.getElementById('o-pn').checked = true;
}
const o_vc = localStorage.getItem("VC");
if(o_vc === 'true'){
document.getElementById('o-vc').checked = true;
}
const o_dlc = localStorage.getItem("DLC");
if(o_dlc === 'true'){
document.getElementById('o-dlc').checked = true;
}
const o_njcc = localStorage.getItem("NJCC");
if(o_njcc === 'true'){
document.getElementById('o-njcc').checked = true;
}
const o_nprc = localStorage.getItem("NPRC");
if(o_nprc === 'true'){
document.getElementById('o-nprc').checked = true;
}
const o_ppa = localStorage.getItem("PPA");
if(o_ppa === 'true'){
document.getElementById('o-ppa').checked = true;
}
const o_eka = localStorage.getItem("EKA");
if(o_eka === 'true'){
document.getElementById('o-eka').checked = true;
}
const o_ova = localStorage.getItem("OVA");
if(o_ova === 'true'){
document.getElementById('o-ova').checked = true;
}
// getting photo
const o_photo = document.getElementById("display1");
o_photo.src = localStorage.getItem("PHOTO1");
localStorage.removeItem("PHOTO1");

// getting address
const o_add1 = localStorage.getItem("ADD1");
const o_add2 = localStorage.getItem("ADD2");
const o_add3 = localStorage.getItem("ADD3");
const o_city = localStorage.getItem("CITY");
const o_dist = localStorage.getItem("DIST");
const o_pin = localStorage.getItem("PIN");
const o_state = localStorage.getItem("STATE");
const o_iso = localStorage.getItem("ISO");

document.getElementById('o-add1').innerHTML = o_add1;
document.getElementById('o-add2').innerHTML = o_add2;
document.getElementById('o-add3').innerHTML = o_add3;
document.getElementById('o-city1').innerHTML = o_city;
document.getElementById('o-dist1').innerHTML = o_dist;
document.getElementById('o-pin1').innerHTML = o_pin;
document.getElementById('o-state1').innerHTML = o_state;
document.getElementById('o-iso1').innerHTML = o_iso;

// getting current address
const o_same = localStorage.getItem("SAME");
if(o_same === 'true'){
document.getElementById('o-same').checked = true;
document.getElementById('o-pn1').checked = false;
document.getElementById('o-vc1').checked = false;
document.getElementById('o-dlc1').checked = false;
document.getElementById('o-njcc1').checked = false;
document.getElementById('o-nprc1').checked = false;
document.getElementById('o-ppa1').checked = false;
document.getElementById('o-eka1').checked = false;
document.getElementById('o-ova1').checked = false;
document.getElementById('o-dpa1').checked = false;

document.getElementById('o-psprt1').innerHTML = "";
document.getElementById('o-vic1').innerHTML = "";
document.getElementById('o-dl1').innerHTML = "";
document.getElementById('o-njc1').innerHTML = "";
document.getElementById('o-npr1').innerHTML = "";
document.getElementById('o-adhr1').innerHTML = "";
document.getElementById('o-e-kyc1').innerHTML = "";
document.getElementById('o-verification1').innerHTML = "";
document.getElementById('o-dpa').innerHTML = "";
} else{
const o_psprt1 = localStorage.getItem("PSPRT1");
const o_vic1 = localStorage.getItem("VIC1");
const o_dl1 = localStorage.getItem("DL1");
const o_njc1 = localStorage.getItem("NJC1");
const o_npr1 = localStorage.getItem("NPR1");
const o_adhr1 = localStorage.getItem("ADHR1");
const o_e_kyc1 = localStorage.getItem("E-KYC1");
const o_verification1 = localStorage.getItem("VERIFICATION1");
const o_dpa = localStorage.getItem("DPA");

document.getElementById('o-psprt1').innerHTML = o_psprt1;
document.getElementById('o-vic1').innerHTML = o_vic1;
document.getElementById('o-dl1').innerHTML = o_dl1;
document.getElementById('o-njc1').innerHTML = o_njc1;
document.getElementById('o-npr1').innerHTML = o_npr1;
document.getElementById('o-adhr1').innerHTML = o_adhr1;
document.getElementById('o-e-kyc1').innerHTML = o_e_kyc1;
document.getElementById('o-verification1').innerHTML = o_verification1;
document.getElementById('o-dpa').innerHTML = o_dpa;

const o_pn1 = localStorage.getItem("PN1");
if(o_pn1 === 'true'){
document.getElementById('o-pn1').checked = true;
}
const o_vc1 = localStorage.getItem("VC1");
if(o_vc1 === 'true'){
document.getElementById('o-vc1').checked = true;
}
const o_dlc1 = localStorage.getItem("DLC1");
if(o_dlc1 === 'true'){
document.getElementById('o-dlc1').checked = true;
}
const o_njcc1 = localStorage.getItem("NJCC1");
if(o_njcc1 === 'true'){
document.getElementById('o-njcc1').checked = true;
}
const o_nprc1 = localStorage.getItem("NPRC1");
if(o_nprc1 === 'true'){
document.getElementById('o-nprc1').checked = true;
}
const o_ppa1 = localStorage.getItem("PPA1");
if(o_ppa1 === 'true'){
document.getElementById('o-ppa1').checked = true;
}
const o_eka1 = localStorage.getItem("EKA1");
if(o_eka1 === 'true'){
document.getElementById('o-eka1').checked = true;
}
const o_ova1 = localStorage.getItem("OVA1");
if(o_ova1 === 'true'){
document.getElementById('o-ova1').checked = true;
}
const o_dpa1 = localStorage.getItem("DPA1");
if(o_dpa1 === 'true'){
document.getElementById('o-dpa1').checked = true;
}

// getting address
const o_cadd1 = localStorage.getItem("CADD1");
const o_cadd2 = localStorage.getItem("CADD2");
const o_cadd3 = localStorage.getItem("CADD3");
const o_ccity = localStorage.getItem("CCITY");
const o_cdist = localStorage.getItem("CDIST");
const o_cpin = localStorage.getItem("CPIN");
const o_cstate = localStorage.getItem("CSTATE");
const o_ciso = localStorage.getItem("CISO");

document.getElementById('o-cadd1').innerHTML = o_cadd1;
document.getElementById('o-cadd2').innerHTML = o_cadd2;
document.getElementById('o-cadd3').innerHTML = o_cadd3;
document.getElementById('o-ccity1').innerHTML = o_ccity;
document.getElementById('o-cdist1').innerHTML = o_cdist;
document.getElementById('o-cpin1').innerHTML = o_cpin;
document.getElementById('o-cstate1').innerHTML = o_cstate;
document.getElementById('o-ciso1').innerHTML = o_ciso;
}

// getting contact details
const o_off = localStorage.getItem("OFF");
const o_res = localStorage.getItem("RES");
const o_mob = localStorage.getItem("MOB");
const o_email = localStorage.getItem("EMAIL");

document.getElementById('o-off').innerHTML = o_off;
document.getElementById('o-res').innerHTML = o_res;
document.getElementById('o-mob').innerHTML = o_mob;
document.getElementById('o-email').innerHTML = o_email;

// getting remarks
const o_remark = localStorage.getItem("REMARK");
document.getElementById('o-remark').innerHTML = o_remark;

// getting application declaration
const o_place = localStorage.getItem("PLACE");
const o_photo2 = document.getElementById("display2");

document.getElementById('o-place').innerHTML = o_place;
o_photo2.src = localStorage.getItem("PHOTO2");
localStorage.removeItem("PHOTO2");

// getting attestation
const o_cc = localStorage.getItem("CC");
if(o_cc === 'true'){
document.getElementById('o-cc').checked = true;
}
const o_uidai = localStorage.getItem("UIDAI");
if(o_uidai === 'true'){
document.getElementById('o-uidai').checked = true;
}
const o_ov = localStorage.getItem("OV");
if(o_ov === 'true'){
document.getElementById('o-ov').checked = true;
}
const o_dkp = localStorage.getItem("DKP");
if(o_dkp === 'true'){
document.getElementById('o-dkp').checked = true;
}
const o_ed = localStorage.getItem("ED");
if(o_ed === 'true'){
document.getElementById('o-ed').checked = true;
}
const o_vb = localStorage.getItem("VB");
if(o_vb === 'true'){
document.getElementById('o-vb').checked = true;
}
const o_ipv = localStorage.getItem("IPV");
const o_date = localStorage.getItem("DATE");
const o_emp_name = localStorage.getItem("EMP-NAME");
const o_emp_code = localStorage.getItem("EMP-CODE");
const o_emp_desig = localStorage.getItem("EMP-DESIG");
const o_emp_branch = localStorage.getItem("EMP-BRANCH");

document.getElementById('o-ipv').innerHTML = o_ipv;
document.getElementById('o-date').innerHTML = o_date;
document.getElementById('o-emp-name').innerHTML = o_emp_name;
document.getElementById('o-emp-code').innerHTML = o_emp_code;
document.getElementById('o-emp-desig').innerHTML = o_emp_desig;
document.getElementById('o-emp-branch').innerHTML = o_emp_branch;

const o_photo3 = document.getElementById("display3");
o_photo3.src = localStorage.getItem("PHOTO3");
localStorage.removeItem("PHOTO3");

const o_photo4 = document.getElementById("display4");
o_photo4.src = localStorage.getItem("PHOTO4");
localStorage.removeItem("PHOTO4");
})

// making border uniform throughout the form
var x = window.matchMedia("(max-width: 992px)");
myFunction(x);
x.addListener(myFunction);

function myFunction(x) {
var div_list = document.querySelectorAll('.brdr');
var div_array = [...div_list];
if (x.matches) {
div_array.forEach(div => {
div.style.cssText  = "border-right:1px solid black !important;border-bottom:none !important; min-height: 30px; !important";
});
} else{
div_array.forEach(div => {
div.style.cssText  = "";
});
}
}
