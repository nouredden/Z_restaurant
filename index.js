function sendMail() {
    var params = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        message: document.getElementById("Message").value,
    };

    const serviceID = "service_vp7orl4";
    const templateID = "YOUR_TEMPLETE_ID";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("Name").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}
