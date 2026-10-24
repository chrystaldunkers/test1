const clickBox = document.getElementById('clickBox');
const hoverBox = document.getElementById('hoverBox');
const resetBtn = document.getElementById('resetBtn');
const simulateBtn = document.getElementById('simulateBtn');
const eventLog = document.getElementById('eventLog');

function logEvent(message) {
    const entry = document.createElement('div');
    entry.textContent = message;
    eventLog.appendChild(entry);
}

let clickCount = 0;

clickBox.addEventListener('click', () => {
    clickCount++;
    clickBox.classList.add('clicked');
    clickBox.textContent = `Clicked ${clickCount} time(s)`;
    logEvent(`Click #${clickCount}`);
}); 

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.classList.add('hovered');
    hoverBox.textContent = 'Mouse is hovering';
    logEvent('Mouse entered');
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.classList.remove('hovered');
    hoverBox.textContent = 'Hover over me';
    logEvent('Mouse left');
}); 

resetBtn.addEventListener('click', () => {
    clickCount = 0;
    clickBox.classList.remove('clicked');
    hoverBox.classList.remove('hovered');
    clickBox.textContent = 'Click me';
    hoverBox.textContent = 'Hover over me';
    eventLog.innerHTML = '';
});

simulateBtn.addEventListener('click', () => {
    logEvent('Simulating user actions');
    clickBox.click();
    hoverBox.dispatchEvent(new Event('mouseenter'));
});

const dblBox = document.getElementById('dblBox');

dblBox.addEventListener('dblclick', () => {
    dblBox.textContent = 'Double clicked!';
    logEvent('Double click');
});