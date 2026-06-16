// Mengambil elemen tombol dan konten dari HTML
const startBtn = document.getElementById('startBtn');
const mainContent = document.getElementById('mainContent');

// Menambahkan aksi ketika tombol diklik
startBtn.addEventListener('click', () => {
    // 1. Sembunyikan tombol utama
    startBtn.style.display = 'none';

    // 2. Munculkan konten semangat (mengubah display dari 'none' ke 'block')
    mainContent.style.display = 'block';

    // 3. Putar musik (pilih salah satu cara di bawah)

    // Cara A: Pakai file lokal (taruh file mp3 di folder yang sama dengan index.html)
    // let audio = new Audio('lagu.mp3');

    // Cara B: Pakai URL link mp3
    let audio = new Audio('Bruno Mars - Risk It All.mp3');

    audio.volume = 0.5;
    audio.play().catch(() => {
        // Jika browser blok autoplay, user tetap klik tombol ini dulu jadi biasanya aman.
    });
});
