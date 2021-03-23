import { checkName, checkMail, checkAge } from "./form-validator";

document.getElementById("myForm")?.addEventListener("submit", validateForm);

const formObject = {
  name: document.querySelector<HTMLInputElement>("#input-name"),
  email: document.querySelector<HTMLInputElement>("#input-mail"),
  age: document.querySelector<HTMLInputElement>("#input-age"),
};

export function validateForm(e: Event) {
  let isValid: boolean = true;
  e.preventDefault();
  const name = checkName(formObject.name?.value);
  const mail = checkMail(formObject.email?.value);
  const age = checkAge(formObject.age?.value);
  isValid = name && mail && age;
}
