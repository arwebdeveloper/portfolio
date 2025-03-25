import "./styles.scss";
console.log("Webpack is running!");
// and hover class to quote
const quote = document.querySelector(".quote");
const rating = document.querySelector(".rating");
const intro = document.querySelector(".intro");
const decorator = document.querySelector(".decorator");
const semiCircle = document.querySelector(".semi-circle");
const introPattern = document.querySelector(".introPattern");
const serviceSection = document.querySelector("#myServices");
const abstractLeft = document.querySelector(".abs-left");
const absCenter = document.querySelector(".abs-center");
const absRight = document.querySelector(".abs-right");
const hirePerson = document.querySelector(".hirePerson");
const bgLoops = document.querySelector(".bgLoops");
semiCircle.addEventListener("mouseover", () => {
  quote.classList.add("move-up");
  rating.classList.add("move-up");
  intro.classList.add("move-down");
  decorator.classList.add("move-down");
  introPattern.classList.add("scale-up");
});
semiCircle.addEventListener("mouseout", () => {
  quote.classList.remove("move-up");
  rating.classList.remove("move-up");
  intro.classList.remove("move-down");
  decorator.classList.remove("move-down");
  introPattern.classList.remove("scale-up");
});

serviceSection.addEventListener("mouseover", () => {
  abstractLeft.classList.add("left-float-up");
  absCenter.classList.add("center-float-right");
  absRight.classList.add("right-float-right");
});
serviceSection.addEventListener("mouseout", () => {
  abstractLeft.classList.remove("left-float-up");
  absCenter.classList.remove("center-float-right");
  absRight.classList.remove("right-float-right");
});
hirePerson.addEventListener("mouseover", () => {
  bgLoops.classList.add("loop-up");
});
hirePerson.addEventListener("mouseout", () => {
  bgLoops.classList.remove("loop-up");
});

let elements = $("ul.marquee-item-list li").length;
for (var i = 0; i < elements; i++) {
  $(".marquee-item-list").clone().prependTo(".marquee-block");
}
let liEle = [];
liEle = $(".marquee-item-list li");

// form validation code to handle validation and error messages
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector(".name-input");
  const emailInput = document.querySelector(".email-input");
  const messageInput = document.querySelector(".message-input");
  const submitButton = document.querySelector(".submit-button");
  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const messageError = document.querySelector(".message-error");
  const charCounter = document.createElement("div");
  let remainingChars = 500;
  // Add character counter for textarea
  charCounter.className = "text-gray-500 text-sm absolute bottom-2 right-3";
  messageInput.parentElement.style.position = "relative";
  messageInput.parentElement.appendChild(charCounter);

  charCounter.textContent = `${remainingChars} characters remaining`;
  // Function to validate name
  function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue.length < 3) {
      nameError.textContent = "* Name must be at least 3 characters long.";
      nameError.setAttribute("style", "opacity: 1;");
      return false;
    } else {
      nameError.setAttribute("style", "opacity: 0;");
      return true;
    }
  }

  // Function to validate email
  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      emailError.textContent = "* Please enter a valid email address.";
      emailError.setAttribute("style", "opacity: 1;");
      return false;
    } else {
      emailError.setAttribute("style", "opacity: 0;");
      return true;
    }
  }

  // Function to validate message
  function validateMessage() {
    const messageValue = messageInput.value.trim();
    remainingChars = 500 - messageValue.length;

    // Update character counter
    charCounter.textContent = `${remainingChars} characters remaining`;

    if (messageValue.length < 10) {
      messageError.textContent = "* Message must be at least 10 characters.";
      messageError.setAttribute("style", "opacity: 1;");
      return false;
    } else {
      messageError.setAttribute("style", "opacity: 0;");
      return true;
    }
  }

  // Limit message input to 500 characters
  messageInput.addEventListener("input", function () {
    if (messageInput.value.length > 500) {
      messageInput.value = messageInput.value.substring(0, 500);
    }
    validateMessage();
  });

  // Attach validation events
  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  messageInput.addEventListener("input", validateMessage);

  // Form submit event
  submitButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent actual form submission
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
      alert(
        `${nameInput.value.toUpperCase()}, your message has been sent successfully!`
      );
      nameInput.value = null;
      emailInput.value = null;
      messageInput.value = null;
    }
  });
});

// slider code

$(document).ready(function () {
  $(".service-carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".portfolio-carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function(){
    // toggle navbar
    $("#menu-toggle").click(function () {
        $("#mobile-menu").toggleClass("active"); // Open & Close menu
        console.log({n:this})
        $(this).children(".hamburger").toggleClass("open");
        $(this).children(".cross-icon").toggleClass("open");
        $("body").toggleClass("no-scroll");
      });
  

      $("#close-menu, #mobile-menu a").click(function () {
        $("#mobile-menu").removeClass("active"); // Close menu on link click
        $(".hamburger").removeClass("open");
        $(".cross-icon").removeClass("open");
        $("body").removeClass("no-scroll");
      });
      
    // details buttons handler
    $(".portfolio-carousel .detail-btn").click(function(){
        let projectName = $(this).closest(".group\\/portfolio").find("h2").text().trim();
        console.log({projectName, n:this})
        alert(`No Details Page is Available for ${projectName} yet!`);
      });

     $(".detail-btn").click(function(){
         alert("No Details Page is Available for this project yet!");
     }) 

     $(".service-detail").click(function(){
        alert("No Service Details Page is Available yet due to design unavailability!");
    }) 

     //download resume
     $("#downloadResume").click(async function () {
        try {
          const response = await fetch("/assets/Abhishek_Resume.pdf");
          const blob = await response.blob();
  
          const link = $("<a>")
            .attr("href", URL.createObjectURL(blob))
            .attr("download", "Abhishek_Resume.pdf")
            .appendTo("body");
  
          link[0].click();
          link.remove();
        } catch (error) {
          console.error("Error downloading the file", error);
        }
      });

    // latest info submission  
    $('#submitButton').click(function() {
        // Get email input and error message div
        const emailValue = $('#emailInput').val();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        // Clear previous error or success message
        $('#newsletter-error').addClass('hidden');
        $('#newsletter-success').addClass('hidden');
  
        // Validation check
        if (!emailValue) {
          $('#newsletter-error').text('*Email address is required.').removeClass('hidden');
        } else if (!emailPattern.test(emailValue)) {
          $('#newsletter-error').text('Please enter a valid email address.').removeClass('hidden');
        } else {
          // If valid, show success message
          $('#newsletter-success').removeClass('hidden');
          $('#emailInput').val(''); // Clear input after success
        }
      });
  });

