// Bagian Javascript
// DISINI SAYA MENGGUNAKAN METODE POP UP
function openPopup(shape, type) {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const calculatorForm = document.getElementById("calculatorForm");
    const result = document.getElementById("result");
  
    popupTitle.textContent = `${type} ${shape}`;
    calculatorForm.innerHTML = "";
    result.textContent = "";
  
    let formHTML = "";
  
    switch (shape) {   
      case "Segitiga":
        if (type === "Luas") {
            //ini bagian Form Luas
          formHTML = `
            <label for="base">Alas:</label>
            <input type="number" id="base" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Alas" required>
            <label for="height">Tinggi:</label>
            <input type="number" id="height" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Tinggi" required>
          `;
        } else {
            //ini bagian Form Keliling
          formHTML = `
            <label for="side1">Sisi 1:</label>
            <input type="number" id="side1" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Sisi 1" required>
            <label for="side2">Sisi 2:</label>
            <input type="number" id="side2" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Sisi 2" required>
            <label for="side3">Sisi 3:</label>
            <input type="number" id="side3" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Sisi 3" required>
          `;
        } 
        break; 
        
      case "Jajar Genjang":
        if (type === "Luas") {
            //untuk Form Luas Jajar Genjang
          formHTML = `
            <label for="baseJG">Alas:</label>
            <input type="number" id="baseJG" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Alas" required>
            <label for="heightJG">Tinggi:</label>
            <input type="number" id="heightJG" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Tinggi" required>
          `;
        } else {
             //untuk Form Luas Jajar Genjang
          formHTML = `
            <label for="baseJG">Alas:</label>
            <input type="number" id="baseJG" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Alas" required>
            <label for="sideJG">Sisi Miring:</label>
            <input type="number" id="sideJG" onkeypress="return hanyaAngka(event)" placeholder="Masukkan Nilai Sisi Miring" required>
          `;
        }
        break; 
      
    }
    //ini untuk Tombol Hasil
    formHTML += `<button onclick="calculate('${shape}', '${type}')">Hitung ${type}</button>`;
    calculatorForm.innerHTML = formHTML;
    //INI UNTUK Tombol Reset TAPI MASIH PR
  
    popup.style.display = "flex";
  }
  
  function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  function calculate(shape, type) {
    let resultText = "";
    const result = document.getElementById("result");
  
    switch (shape) {      
  
      case "Segitiga":
        if (type === "Luas") {
          const base = parseFloat(document.getElementById("base").value);
          const height = parseFloat(document.getElementById("height").value);
          resultText = `Luas Segitiga: ${(base * height) / 2}`;
        } else {
          const side1 = parseFloat(document.getElementById("side1").value);
          const side2 = parseFloat(document.getElementById("side2").value);
          const side3 = parseFloat(document.getElementById("side3").value);
          resultText = `Keliling Segitiga: ${side1 + side2 + side3}`;
        }
        break; 
      
      case "Jajar Genjang":
        if (type === "Luas") {
          const baseJG = parseFloat(document.getElementById("baseJG").value);
          const heightJG = parseFloat(document.getElementById("heightJG").value);
          resultText = `Luas Jajar Genjang: ${baseJG * heightJG}`;
        } else {
          const baseJG = parseFloat(document.getElementById("baseJG").value);
          const sideJG = parseFloat(document.getElementById("sideJG").value);
          resultText = `Keliling Jajar Genjang: ${2 * (baseJG + sideJG)}`;
        }
        break;  
    }
    result.textContent = resultText; // Tampilkan hasil
  }
  
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const shape = e.target.closest(".box").querySelector("h3").textContent;
      const type = e.target.textContent;
      openPopup(shape, type);
    });
  });
  //Menyatakan wajib Angka untuk setiap pengisian Form
  function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode > 31 && (charCode < 48 || charCode > 57))

      return false;
    return true;
  }
  function reset() {
    document.getElementById("calculatorForm").reset();//buat reset form
  }
  function validateForm() {
    let x = document.forms["calculatorForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }