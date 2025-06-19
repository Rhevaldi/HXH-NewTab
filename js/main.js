// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Load quick links
    fetch('assets/characters.json')
        .then(response => response.json())
        .then(data => {
            const strawHatsContainer = document.getElementById('strawHats');
            data.characters.forEach(character => {
                const charElement = document.createElement('div');
                charElement.className = 'character';
                charElement.style.backgroundImage = `url(${character.image})`;
                charElement.title = character.name;
                strawHatsContainer.appendChild(charElement);
            });
        });

    // Load quick links
    const quickLinks = [
        { name: "One Piece Wiki", url: "https://onepiece.fandom.com" },
        { name: "Tonton One Piece", url: "https://www.crunchyroll.com/one-piece" },
        { name: "Baca Manga", url: "https://www.viz.com/one-piece" },
        { name: "Komunitas", url: "https://www.reddit.com/r/OnePiece/" },
        { name: "Merchandise", url: "https://onepiece-merchandise.com" }
    ];

    const quickLinksContainer = document.getElementById('quickLinks');
    quickLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.className = 'link';
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.textContent = link.name;
        quickLinksContainer.appendChild(linkElement);
    });

    // Load random quote
    updateQuote();
    setInterval(updateQuote, 30000);
});

function updateQuote() {
    fetch('assets/quotes.json')
        .then(response => response.json())
        .then(data => {
            const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
            document.getElementById('quote').textContent = randomQuote;
        });
}