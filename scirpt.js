const questions = [
  {
    text: "Kalau lagi santai di rumah, lo paling suka ngapain?",
    options: [
      { text: "Main game atau utak-atik sesuatu", type: "coder" },
      {
        text: "Baca artikel atau nonton video yang informatif",
        type: "analyzer",
      },
      {
        text: "Nonton film atau scroll sosmed yang kontennya estetik",
        type: "designer",
      },
      {
        text: "Ngoprek device atau cari tahu trik-trik unik",
        type: "heker",
      },
    ],
  },
  {
    text: "Pas ada masalah, lo biasanya gimana?",
    options: [
      {
        text: "Langsung eksekusi, gas aja dulu perkara selah mah belakangan!",
        type: "coder",
      },
      {
        text: "Nyari solusi yang paling kreatif dan keliatan keren",
        type: "designer",
      },
      {
        text: "Eksperimen sampai nemu celah atau cara baru",
        type: "heker",
      },
      {
        text: "Baca data yang valid dulu dari berbagai sisi",
        type: "analyzer",
      },
    ],
  },
  {
    text: "Kalau diajak kerja kelompok, lo lebih milih peran apa?",
    options: [
      {
        text: "Nyari tools atau shortcut biar kerjaan lebih efisien",
        type: "heker",
      },
      { text: "Bikin presentasi atau desainnya", type: "designer" },
      { text: "Nyusun data dan bikin strategi", type: "analyzer" },
      { text: "Ngerjain bagian inti, yang teknis banget", type: "coder" },
    ],
  },
  {
    text: "Cara belajar yang paling lo suka gimana?",
    options: [
      { text: "Baca dan riset mendalam", type: "analyzer" },
      { text: "Liat gambar atau video yang menarik", type: "designer" },
      {
        text: "Coba-coba sendiri sampai ngerti sistemnya",
        type: "heker",
      },
      { text: "Langsung praktekin dan nyoba langsung", type: "coder" },
    ],
  },
  {
    text: "Kalau lo lagi di tempat baru, apa yang pertama lo perhatiin?",
    options: [
      { text: "Desain tempatnya, vibe-nya gimana", type: "designer" },
      {
        text: "Gimana cara kerja hal-hal yang ada di sana",
        type: "coder",
      },
      { text: "Orang-orang dan pola perilakunya", type: "analyzer" },
      {
        text: "Celah perangkat atau sistem yang ada disekitar",
        type: "heker",
      },
    ],
  },
  {
    text: "Kalau dikasih tugas dadakan, reaksi pertama lo apa?",
    options: [
      { text: "Langsung ambil laptop, kerjain!", type: "coder" },
      { text: "Cari cara biar hasilnya tetap estetik", type: "designer" },
      {
        text: "Cari trik atau tool yang bisa bantu selesain cepat",
        type: "heker",
      },
      {
        text: "Tanya detailnya dulu biar gak salah arah",
        type: "analyzer",
      },
    ],
  },
  {
    text: "Lo lebih nyaman kerja di kondisi yang kayak gimana?",
    options: [
      { text: "Tempat yang bagus rapi dan estetik", type: "designer" },
      { text: "Sambil denger musik dan fokus sendiri", type: "coder" },
      { text: "Yang ada struktur dan urutan jelas", type: "analyzer" },
      {
        text: "Lingkungan fleksibel dan banyak eksperimen",
        type: "heker",
      },
    ],
  },
];

const resultDescriptions = {
  coder: [
    "💻 Lo itu <strong>*Programmer Dengan Jiwa Wibu*!</strong> Logika lo jalan terus tanpa hambatan, dan saat kode ngambek, lo malah makin semangat buat debug sampai tengah malam! Dunia lo penuh sama sintaks dan kreativitas tanpa batas.",
    "🚀 Lo itu <strong>Programmer Visioner Tanpa Batas!</strong> Pikiran lo selalu satu langkah di depan, bikin solusi out of the box kayak lagi ngehack masa depan. Kode lo bukan cuma jalan, tapi punya jiwa inovasi!",
    "⚙️ Lo itu <strong>Machine learning engginering Berjiwa Kreatif!</strong> Saat orang lain pusing lihat error, lo malah anggap itu teka-teki seru. Lo bisa ubah baris kode jadi karya seni fungsional yang bikin kagum siapa pun yang lihat!",
  ],
  designer: [
    "🖌️ Lo itu <strong>* Desainer yang Bisa Debat Sama Font! *</strong> Lo bisa ngabisin sejam cuma buat milih antara Helvetica atau Inter. Tapi hasilnya? Klien senyum, mata puas, hati lega. (Meski deadline udah lewat dikit…)",
    "🎨 Lo itu <strong>* Desainer Visual sipaling perpeksionis*!</strong> Setiap detail harus terlihat sempurna. Bagi lo, desain bukan cuma soal penampilan, tapi juga bagaimana pengalaman pengguna terasa nyaman dan indah.",
    "🎯 Lo itu <strong>* Spesialis Geser 1px Biar Rapi! *</strong> Orang lain gak notice, tapi lo tau persis kalau tombol itu belum center. Lo bukan perfeksionis—lo cuma sahabatan sama detail yang orang lain abaikan!",
  ],
  analyzer: [
    "🧠 Lo itu <strong>Ahli Ramal Masa Depan (Pakai Excel, Bukan Tarot)!</strong> Lo bisa prediksi tren cuma dari tumpukan data mentah. Buat lo, spreadsheet itu tempat meditasi, dan pivot table udah kayak mantra sakti!",
    "📊 Lo itu <strong>*Data Analis*!</strong> Setiap angka, grafik, dan tabel punya cerita yang harus diungkap. Lo bisa melihat pola tersembunyi dalam data, dan bahkan bisa merasakan jika ada yang nggak beres dengan analisis yang lo temuin.",
    "📉 Lo itu <strong>* Analis keren! * </strong> Satu-satunya orang yang bisa bilang ini menarik, kok datanya aneh ya? sambil senyum. Lo gak cuma baca data—lo ngobrol sama dia, dan datanya jawab balik!",
  ],
  heker: [
    '💻 Lo itu <strong>Hacker yang Selalu Nyari Celah!</strong> Lo nggak takut sama firewall, karena buat lo, itu cuma tantangan baru. Kalau ada yang bilang "gak bisa," lo malah tambah semangat: "Yaudah, kita coba lagi!',
    "🧩 Lo itu <strong>Engineer Rasa Detektif! </strong> Lo nggak cuma cari solusi, tapi juga nyari siapa pelaku utamanya: si bug licik yang sembunyi di balik 10.000 baris kode. Lo bongkar sistem pelan-pelan, sambil nyeruput kopi dingin dari tadi pagi.",
    "🧠 Lo itu <strong>*Si Jenius Hacking*!</strong> Lo bisa belajar hal baru dengan cepat, dan buat lo, menemukan celah atau bug dalam sistem itu kayak main puzzle. Lo nggak takut eksperimen, karena setiap trial and error itu langkah untuk menemukan solusi cerdas.",
  ],
};

let currentQuestion = 0;
const scores = { coder: 0, designer: 0, analyzer: 0, heker: 0 };
let userInfo = {};

function startQuiz() {
  userInfo = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    hobby: document.getElementById("hobby").value,
    zodiac: document.getElementById("zodiac").value,
  };

  if (!userInfo.name || !userInfo.age || !userInfo.hobby || !userInfo.zodiac) {
    showPopup();
  } else {
    document.getElementById("user-form").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    showQuestion();
  }
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.text;
  const answersEl = document.getElementById("answers");
  answersEl.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.className =
      "w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium py-2 px-4 rounded-xl";
    btn.onclick = () => {
      scores[opt.type]++;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answersEl.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("groupBtn").classList.remove("hidden");

  const topType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  const percentage = Math.floor(Math.random() * 30) + 70;

  document.getElementById("r-name").textContent = userInfo.name;
  document.getElementById("r-age").textContent = userInfo.age;
  document.getElementById("r-hobby").textContent = userInfo.hobby;
  document.getElementById("r-zodiac").textContent = userInfo.zodiac;

  document.getElementById("result-text").innerHTML = `
          ${
            resultDescriptions[topType][
              percentage < 80 ? 0 : percentage < 90 ? 1 : 2
            ]
          }<br><br>
          🔍 <strong>Tingkat kecocokan lo sama dunia Informatika: ${percentage}%</strong>
        `;
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

document.getElementById("reloadBtn").addEventListener("click", function () {
  location.reload(); // reload the page
});
document.getElementById("captureBtn").addEventListener("click", function () {
  html2canvas(document.getElementById("elementToCapture")).then((canvas) => {
    const imageData = canvas.toDataURL("image/png");
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.href = imageData;
    downloadBtn.download =
      "hasil-kuis-informatika-" + new Date().getTime() + ".png";
    downloadBtn.click();
  });
});

// Fungsi untuk menampilkan popup
function showPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

// Fungsi untuk menutup popup
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
