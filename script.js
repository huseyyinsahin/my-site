const skills = document.getElementById("skills");
const scrollTopButton = document.getElementById("scrollTopButton");

const progressBars = [
  { bar: "bar1", front: "front1", max: 100 },
  { bar: "bar2", front: "front2", max: 70 },
  { bar: "bar3", front: "front3", max: 50 },
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


const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // Burada form başarıyla gönderildikten sonra yapılacak işlemleri ekleyebilirsiniz.
      alert("Form submitted successfully!");
    })
    .catch((error) => alert(error));
};