document.getElementById('fooldalgomb').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.getElementById('rolunkgomb').addEventListener('click', function() {
    window.location.href = 'rólunk.html';
});
const toggleText0 = document.getElementById('toggleText0');
const textBox0 = document.getElementById('textBox0');

toggleText0.addEventListener('click', () => {
    textBox0.classList.toggle('hidden');
});
const toggleText1 = document.getElementById('toggleText1');
const textBox1 = document.getElementById('textBox1');

toggleText1.addEventListener('click', () => {
    textBox1.classList.toggle('hidden');
});
const toggleText2 = document.getElementById('toggleText2');
const textBox2 = document.getElementById('textBox2');

toggleText2.addEventListener('click', () => {
    textBox2.classList.toggle('hidden');
});
const toggleText3 = document.getElementById('toggleText3');
const textBox3 = document.getElementById('textBox3');

toggleText3.addEventListener('click', () => {
    textBox3.classList.toggle('hidden');
});
const toggleText4 = document.getElementById('toggleText4');
const textBox4 = document.getElementById('textBox4');

toggleText4.addEventListener('click', () => {
    textBox4.classList.toggle('hidden');
});