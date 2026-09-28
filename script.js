const form = document.getElementById("newsletterForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const topic = document.getElementById("topic").value;
    const agree = document.getElementById("agree").checked;

    if(
        name === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        topic === ""
    ){

        alert("Please complete all fields.");
        return;
    }

    if(!agree){

        alert("Please agree to the Privacy Policy.");
        return;
    }

    if(phone.length < 10){

        alert("Phone number is too short.");
        return;
    }

    alert("Successfully subscribed to FontDale Newsletter!");

    form.reset();

});