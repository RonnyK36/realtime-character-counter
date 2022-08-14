const textareaEl = document.getElementById('textarea');
const totalCount = document.getElementById('total-count');
const remainingCount = document.getElementById('remaining-count');

remainingCount.innerText = textareaEl.getAttribute("maxLength")

textareaEl.addEventListener('keyup', (event) => {
    updateCounter();
});

updateCounter();

function updateCounter() {
    totalCount.innerText = textareaEl.value.length;
    remainingCount.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length

}