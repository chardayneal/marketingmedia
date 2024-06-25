let subscribeSection = document.getElementById("subscribe-section");
let contactSection = document.getElementById('contact-section');

const menu = document.getElementById("menu-option");

function hideMenu() {
    menu.style.right = "-80%";
}

function showMenu() {
    menu.style.right = "0";
    console.log("Show menu!");
}

handleSubscribe = (e) => {

    e.preventDefault();
    //add email string in email input to newsletter database

    //remove the form in the subscribe section
    //update the p element in subscribe section
    let updatedString = "Thank you for subscribing to our newsletter where you will recieve the latest trends, techniques and information about marketing success.";

    let newElement = document.createElement('p');
    newElement.textContent = updatedString;
    newElement.setAttribute('class', 'subscribed');
    
    subscribeSection.innerHTML = "";
    subscribeSection.appendChild(newElement);
};

handleSubmit = (e) => {
    e.preventDefault();

    //handle each form input so that marketing team can reach out to contact

    //remove form and thank client for reaching out
    let updatedString = "Thank you for reaching out to Marketing Media, Inc. We have received your information and look forward to connecting within two business days.";

    let newElement = document.createElement('p');
    newElement.textContent = updatedString;
    newElement.setAttribute('class', 'subscribed');

    contactSection.innerHTML = "";
    contactSection.appendChild(newElement);
}