function validateForm() {
    // Validasi Nama Lengkap
    var fullname = document.getElementById("fullname").value;
    if (fullname === "" || !/^[A-Za-z\s]+$/.test(fullname)) {
      alert("Harap Masukkan Nama Lengkap yang Valid");
      document.getElementById("fullname").focus();
      else(null){}
      return false;
    }
  
    // Validasi Email
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      alert("Harap Masukkan Email yang Valid");
      document.getElementById("email").focus();
      return false;
    }
  
    // Validasi Nomor Telepon
    var phone = document.getElementById("phone").value;
    if (phone === "" || phone.length <= 9 || !/^\d+$/.test(phone)) {
      alert("Harap Masukkan Nomor Telepon yang Valid (lebih dari 9 digit).");
      document.getElementById("phone").focus();
      return false;
    }
  
    return true;
  }
  