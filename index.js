function collectData() {
  var pin = prompt("Masukkan Pin Log In Anda: ", "Masukkan Pin Anda");
  var email = prompt("Masukkan Email Anda: ", "email@example.com");

  // Validasi apakah pin hanya terdiri dari angka
  var pinIsValid = /^\d+$/.test(pin);
  var emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (pinIsValid && pin !== null && pin !== "" && emailIsValid && email !== null && email !== "") {
    var dataDisplay = document.getElementById("dataDisplay");
    if (dataDisplay) {
      dataDisplay.innerHTML = "<p>Pin Anda: " + pin + "</p>" +
                              "<p>Email Anda: " + email + "</p>";
    }
    window.location.href = "index.html";
  } else {
    alert("Data tidak lengkap atau pin tidak valid. Harap masukkan pin yang terdiri dari angka dan email yang valid.");
  }
}


function validasi()
{

// FULL NAME
var cek = document.getElementById("fullname").value;
var ekspresi=/^[A-Za-z\s]*$/;
if(cek=="" || ekspresi.test(cek)==false)
{
    alert("Harap Masukkan Nama yang Valid");
    document.getElementById("fullname").focus();
    return false
}


var email = document.getElementById("email").value;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === "" || !emailRegex.test(email)){
  alert("Harap Masukkan Email yang Valid");
  document.getElementById("email").focus();
  return false;
}

var phone = document.getElementById("phone").value;
if (phone === "" || phone.length <= 9 || !/^\d+$/.test(phone)) {
  alert("Harap Masukkan Nomor Telepon yang Valid (lebih dari 9 digit).");
  document.getElementById("phone").focus();
  return false;
}

var cek = document.getElementById("guardian").value;
var ekspresi=/^[A-Za-z\s]*$/;
if(cek=="" || ekspresi.test(cek)==false)
{
    alert("Harap Masukkan Nama yang Valid");
    document.getElementById("guardian").focus();
    return false
}

 var phoneWali = document.getElementById("phoneWali").value;
 if (phoneWali === "" || phoneWali.length <= 9 || !/^\d+$/.test(phoneWali)) {
   alert("Harap Masukkan Nomor Telepon yang Valid (lebih dari 9 digit).");
   document.getElementById("phoneWali").focus();
   return false;
 }

alert("Formulir berhasil dikirim!")

  }


