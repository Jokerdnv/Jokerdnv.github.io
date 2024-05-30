document.addEventListener("DOMContentLoaded", function() {
    const songsContainer = document.getElementById('songs');

    function getStars(difficulty) {
        let stars = '';
        for (let i = 0; i < difficulty; i++) {
            stars += '<span>&#9733;</span>';
        }
        return stars;
    }

    
    songsContainer.innerHTML = generateSongsHTML(songs);
});

document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById('login-btn');


    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});



const songs = [
    { id: 'to-build-a-home', name: 'To Build A Home', artist: 'The Cinematic Orchestra', url: 'to-build-a-home.html' },
    { id: 'color-me-blue', name: 'Color Me Blue', artist: 'Akane', url: 'color-me-blue.html' },
    { id: 'quiet-resource', name: 'Quiet Resource', artist: 'Evelyn Stein', url: 'quiet-resource.html' },
    { id: 'fourth-of-july', name: 'Fourth Of July', artist: 'Sufjan Stevens', url: 'fourth-of-july.html' },
    { id: 'wheres-my-love', name: "Where's My Love", artist: 'SYML', url: 'wheres-my-love.html' }
];

document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    console.log('Search query:', query); // Debugging line
    const results = songs.filter(song => song.name.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query));
    displayResults(results);
});

function displayResults(results) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    results.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'song';
        songDiv.style.backgroundImage = `url('Pictures/${song.id}.jpg')`;
        songDiv.innerHTML = `
            <h2>${song.name}</h2>
            <p class="artist-name">by: ${song.artist}</p>
            <div class="difficulty">
                Difficulty: <span>&#9733;</span><span>&#9733;</span>
            </div>
            <button onclick="viewNotes('${song.url}')">View Notes</button>
        `;
        main.appendChild(songDiv);
    });
}

function viewNotes(url) {
    window.location.href = url;
}