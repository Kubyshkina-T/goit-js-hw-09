const storageKey = "feedback-form-state";

let formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
form.addEventListener("submit", handleSubmit)
form.addEventListener("input", onFormInput)
populateForm(); 

function onFormInput(event) {
    const { name, value } = event.target;
    if (name !== "email" && name !== "message") return;
    formData[name] = value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
}

function populateForm() {
    const saved = localStorage.getItem(storageKey)
    if (!saved) return;
    const parsed = JSON.parse(saved);
    formData.email = parsed.email ?? "";
    formData.message = parsed.message ?? "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}
function handleSubmit(event) {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields");
        return;
    }
     console.log(formData);
    localStorage.removeItem(storageKey);
    formData.email = "";
    formData.message = "";
    event.currentTarget.reset();
}
