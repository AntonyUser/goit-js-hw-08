import throttle from 'lodash.throttle';
const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");
const FEEDBACK_FORM = "feedback-form-state";

formEl.addEventListener('input', throttle(createFormData, 500))



function createFormData(event) {
    event.preventDefault();
    const feedbackFormData = {
        email: inputEl.value,
        message: textareaEl.value,
    }
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(feedbackFormData))
}

if (localStorage.getItem(FEEDBACK_FORM)) {
    const localStorageEl = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
    inputEl.value = localStorageEl.email;
    textareaEl.value = localStorageEl.message;
}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedbackObject = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
    console.log(feedbackObject);
    localStorage.removeItem(FEEDBACK_FORM);
    formEl.reset();
})