function sendwhatsapp (){
    const phonenumber = "+55012992361047";

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Nome :* " + name +"%0a"
    +"*Email :* " + email +"%0a"
    +"*Menssagem :* " + message +"%0a%0a";

    window.open(url, '_blank').focus();
}