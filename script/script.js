const skills = document.getElementById("skills");

const progressBars = [
  { bar: "bar1", front: "front1", max: 80 },
  { bar: "bar2", front: "front2", max: 50 },
  { bar: "bar3", front: "front3", max: 20 },
  { bar: "bar4", front: "front4", max: 10 },
];

function updateProgressBar(barSelector, frontSelector, maxNumber) {
  const bar = document.getElementById(barSelector);
  const front = document.getElementById(frontSelector);
  let number = 0;

  function updateNumber() {
    bar.textContent = number + "%";
    front.style.width = number + "%";
    number++;

    if (number <= maxNumber) {
      setTimeout(updateNumber, 40);
    }
  }

  function scrollControl() {
    const loader = skills.getBoundingClientRect();

    if (loader.top < window.innerHeight && !bar.getAttribute("control")) {
      bar.setAttribute("control", "true");
      updateNumber();
    }
  }
  window.addEventListener("scroll", scrollControl);
}

progressBars.forEach(({ bar, front, max }) => {
  updateProgressBar(bar, front, max);
});

// button
const scrollTopButton = document.getElementById("scrollTopButton");

function scrollTopFunction() {
  document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  scrollTopButton.classList.toggle(
    "scroll",
    document.documentElement.scrollTop > 100
  );
}

// form

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const errorMessage = document.getElementById("errorMessage");

const handleSubmit = (event) => {
  event.preventDefault();

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === ""
  ) {
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  } else {
    startConfetti();
    setTimeout(() => {
      stopConfetti();
    }, 5000);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Form submitted successfully!");
      })
      .catch((error) => alert(error));
  }
};

//my-projects

const PButtons = document.querySelectorAll(".project-button, .project-button2");
const PContents = document.querySelectorAll(".project-p, .project-p2");

PButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (PContents[index].style.display === "none" || PContents[index].style.display === "") {
      PContents[index].style.display = "block";
    } else {
      PContents[index].style.display = "none";
    }
  });
});
