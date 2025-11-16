// Browser-specific TypeScript code example
// DOM Manipulation
const button = document.querySelector('#myButton');
const input = document.querySelector('#myInput');
button?.addEventListener('click', () => {
    console.log('Button clicked!');
    console.log('Input value:', input?.value);
});
// Fetch API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched data:', data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
// Local Storage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}
// Window events
window.addEventListener('load', () => {
    console.log('Page loaded');
});
window.addEventListener('resize', () => {
    console.log('Window resized:', window.innerWidth, window.innerHeight);
});
