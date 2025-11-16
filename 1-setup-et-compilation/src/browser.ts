// Browser-specific TypeScript code example

// DOM Manipulation
const button = document.querySelector<HTMLButtonElement>('#myButton');
const input = document.querySelector<HTMLInputElement>('#myInput');

button?.addEventListener('click', () => {
    console.log('Button clicked!');
    console.log('Input value:', input?.value);
});

// Fetch API
async function fetchData(url: string): Promise<void> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Local Storage
function saveToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
}

// Window events
window.addEventListener('load', () => {
    console.log('Page loaded');
});

window.addEventListener('resize', () => {
    console.log('Window resized:', window.innerWidth, window.innerHeight);
});