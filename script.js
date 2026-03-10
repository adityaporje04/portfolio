/* RESUME POPUP */

function openResume(){
document.getElementById("resumeModal").style.display="flex";
}

function closeResume(){
document.getElementById("resumeModal").style.display="none";
}


/* SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.8;

if(sectionTop < trigger){
section.classList.add("show");
}

});

});


/* CONTACT FORM */

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");
const loader = document.getElementById("loader");
const btnText = document.getElementById("btnText");

form.addEventListener("submit", function(e){

e.preventDefault();

/* spam protection */
if(document.getElementById("website").value !== ""){
return;
}

/* validation */

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const userMessage = document.getElementById("message").value.trim();

if(name.length < 2){
message.innerHTML="Please enter a valid name";
message.className="error";
return;
}

if(!email.includes("@")){
message.innerHTML="Please enter a valid email";
message.className="error";
return;
}

if(userMessage.length < 5){
message.innerHTML="Message must be at least 5 characters";
message.className="error";
return;
}


/* show loader */

loader.style.display="inline-block";
btnText.style.display="none";


/* EMAIL TO YOU */

emailjs.sendForm(
"service_45kudt4",
"template_vm8b1qb",
form
).then(function(){

/* AUTO REPLY EMAIL */

emailjs.sendForm(
"service_45kudt4",
"template_avva14p",
form
);


/* UI SUCCESS */

loader.style.display="none";
btnText.style.display="inline";

message.innerHTML="✔ Message sent successfully!";
message.className="success";

form.reset();

}, function(){

loader.style.display="none";
btnText.style.display="inline";

message.innerHTML="❌ Failed to send message";
message.className="error";

});

});