import { contactForm, formObject } from "./dom-utils";
import { checkName, checkMail, checkAge } from "./form-validator";

contactForm.addEventListener("submit", validateForm);

export function validateForm(e: Event) {
  let isValid: boolean = true;
  e.preventDefault();
  const name = checkName(formObject.name?.value);
  const mail = checkMail(formObject.email?.value);
  const age = checkAge(formObject.age?.value);
  isValid = name && mail && age;
}
