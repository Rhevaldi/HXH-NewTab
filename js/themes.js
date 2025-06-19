document.getElementById('themeToggle').addEventListener('click', toggleThemeOptions);

const themes = [
    { id: "default", name: "Default Theme" },
    { id: "strawhat", name: "Straw Hat" },
    { id: "marine", name: "Marine" },
    { id: "wano", name: "Wano Country" }
];

function loadThemeOptions() {
    const themeOptions = document.getElementById('themeOptions');
    themes.forEach(theme => {
        const option = document.createElement('div');
        option.className = 'theme-option';
        option.textContent = theme.name;
        option.onclick = () => changeTheme(theme.id);
        themeOptions.appendChild(option);
    });
}

function toggleThemeOptions() {
    const options = document.getElementById('themeOptions');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('onePieceTheme', theme);
    toggleThemeOptions();
}

// Load saved theme
const savedTheme = localStorage.getItem('onePieceTheme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

// Close theme options when clicking outside
document.addEventListener('click', function(event) {
    const themeSelector = document.querySelector('.theme-selector');
    if (!themeSelector.contains(event.target)) {
        document.getElementById('themeOptions').style.display = 'none';
    }
});

// Initialize theme options
loadThemeOptions();