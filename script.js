function playVideo() {
    const video = document.getElementById('myVideo');
    const thumbnail = document.querySelector('.video-thumbnail');
    const overlay = document.querySelector('.video-overlay');

    video.classList.remove('hidden');
    thumbnail.style.display = 'none';
    overlay.style.display = 'none';
    video.play();
}

function revealLetter() {
    const letter = document.querySelector('.apology-letter');
    letter.classList.toggle('visible');
    
    if (!letter.classList.contains('visible')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        letter.scrollIntoView({ behavior: 'smooth' });
    }
}



function createHeart() {
    // Membuat elemen HTML <div> baru untuk hati
    const heart = document.createElement('div');
    
    // Menambahkan emoji hati sebagai isi dari elemen
    heart.innerHTML = '❤️';
    
    // Menambahkan kelas CSS untuk memberikan gaya dan animasi
    heart.classList.add('heart-icon');
    
    // Menempatkan hati di lokasi acak pada layar (horizontal dan vertikal)
    heart.style.left = `${Math.random() * 100}%`; // Posisi horizontal acak
    heart.style.top = `${Math.random() * 100}%`; // Posisi vertikal acak
    
    // Menambahkan elemen hati ke dalam <body>
    document.body.appendChild(heart);

    // Menghapus elemen hati dari DOM setelah 5 detik
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000); // Membuat hati setiap 1 detik


// Prevent zooming on mobile
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });

document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
});
