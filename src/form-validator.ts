export function checkName(name: string | undefined): boolean {
  const hint = document.getElementById("name-hint");
  if (name && name.length > 3 && name.length < 30) {
    setInputSuccess(formObject.name, hint);
    return true;
  } else {
    setInputError(formObject.name, hint, "Name too long or too short");
    return false;
  }
}

export function checkMail(mail: string | undefined) {
  const hint = document.getElementById("email-hint");
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(mail).toLowerCase())) {
    setInputSuccess(formObject.email, hint);
    return true;
  }
  setInputError(formObject.email, hint, "Please enter a valid E-Mail");
  return false;
}

export function checkAge(age: string | undefined) {
  const hint = document.getElementById("age-hint");
  if (age) {
    const parsedNumber = parseInt(age);
    if (parsedNumber > 16 && parsedNumber < 99) {
      setInputSuccess(formObject.age, hint);
      return true;
    }
    setInputError(
      formObject.age,
      hint,
      "Please enter an age above 16 and below 99"
    );
    return false;
  }
  setInputError(
    formObject.age,
    document.getElementById("age-hint"),
    "This field is required"
  );
  return false;
}

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
