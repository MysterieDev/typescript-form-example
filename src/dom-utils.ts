export const formObject = {
  name: document.querySelector<HTMLInputElement>("#input-name"),
  email: document.querySelector<HTMLInputElement>("#input-mail"),
  age: document.querySelector<HTMLInputElement>("#input-age"),
};

export const contactForm = document.getElementById("myForm") as HTMLElement;

export function setInputError(
  inputEl: HTMLInputElement | null,
  hintEl: HTMLElement | null,
  message: string
) {
  if (inputEl && hintEl) {
    inputEl.classList.remove("is-success");
    inputEl.classList.add("is-error");
    hintEl.textContent = message;
  }
}

export function setInputSuccess(
  inputEl: HTMLInputElement | null,
  hintEl: HTMLElement | null
) {
  if (inputEl && hintEl) {
    inputEl.classList.add("is-success");
    inputEl.classList.remove("is-error");
    hintEl.textContent = "";
  }
}
