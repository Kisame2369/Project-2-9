const form = document.querySelector(".feedback-form");
const textArea = form.elements.message;
const input = form.elements.email;
const key = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const savedData = localStorage.getItem(key);
if (savedData) {
  formData = JSON.parse(savedData);
  input.value = formData.email || "";
  textArea.value = formData.message || "";
}

form.addEventListener("input", (event) => {
  if (event.target === input) {
    formData.email = input.value.trim();
  } else if (event.target === textArea) {
    formData.message = textArea.value.trim();
  }
  localStorage.setItem(key, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    return alert("Please fill in all fields");
  }
  console.log(formData);

  localStorage.removeItem(key);
  form.reset();

  formData = {
    email: "", 
    message: "",
  };
});
