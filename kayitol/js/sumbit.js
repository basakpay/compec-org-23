function onSubmit(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    // Formdan verileri al
    const name = document.getElementById("nameAndSurname").value;
    const bolum = document.getElementById("bolum").value;
    const sinif = document.getElementById("sinif").value;
    const bounEmail = document.getElementById("bounEmail").value;
    const personalEmail = document.getElementById("personalEmail").value;
    const telephone = document.getElementById("telephone").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    // Bilgileri JSON nesnesine dönüştür
    const formData = {
        nameAndSurname: name,
        bolum: bolum,
        sinif: sinif,
        bounEmail: bounEmail,
        personalEmail: personalEmail,
        telephone: telephone,
        password: password,
        password2: password2
    };

    // JSON nesnesini konsola yazdır (test amaçlı)
    console.log(formData);

    const dataAsJson = JSON.stringify(formData);
    // JSON nesnesini URL parametresine dönüştür
    const formDataString = encodeURIComponent(dataAsJson);

    fetch('http://awsec2.compec.org/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({json : dataAsJson })
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    console.log("asdasd")


    setTimeout(function() {
        window.location.href = `/qrsayfasi/?parametre=${formDataString}`;
    }, 1000);

    //window.location.href = `/qrsayfasi/?parametre=${formDataString}`;

    })
    .catch(error => {
    console.error('Hata: ' + error);
    });

    // Diğer HTML sayfasına yönlendirin ve URL parametresini ekleyin

    // Daha fazla işlem yapmak için formData JSON nesnesini kullanabilirsiniz
}

// Kayıt formunu buluyoruz
const registrationFormButton  = document.getElementById("registrationFormButton");

// Forma tıklama olayı ekliyoruz
registrationFormButton .addEventListener("click", onSubmit);