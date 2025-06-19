document.getElementById('googleSearch').addEventListener('click', searchGoogle);
document.getElementById('youtubeSearch').addEventListener('click', searchYouTube);
document.getElementById('wikiSearch').addEventListener('click', searchWiki);

document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchGoogle();
    }
});

function searchGoogle() {
    const query = document.getElementById('search').value.trim();
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query + ' one piece')}`, '_blank');
    }
}

function searchYouTube() {
    const query = document.getElementById('search').value.trim();
    if (query) {
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query + ' one piece')}`, '_blank');
    }
}

function searchWiki() {
    const query = document.getElementById('search').value.trim();
    if (query) {
        window.open(`https://onepiece.fandom.com/wiki/Special:Search?query=${encodeURIComponent(query)}`, '_blank');
    }
}