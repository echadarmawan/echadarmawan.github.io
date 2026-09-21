// Data PDF
const pdfData = [
  {
    category: 'gunadarma',
    docs: [
      {
        title: "Certificate of Completion for the training of Fundamental Desktop Programming (2023)",
        url: "https://drive.google.com/file/d/1YcFFdBSrXFpt6H_fALAHIXpGhOjcOH0U/preview"
      },
      {
        title: "Certificate of Completion for the training of Fundamental Web Programming (2023)",
        url: "https://drive.google.com/file/d/15a63qPzWvPqooJbme00jpj5pNq1W22Vd/preview"
      },
      {
        title: "Certificate of Completion for the training of Go Programming for Beginner (2024)",
        url: "https://drive.google.com/file/d/1s4ipw6qGdCM7u-2bAuU1OEjFOYYcLsYw/preview"
      },
      {
        title: "Certificate of Completion for the training of JavaScript Programming Language Fundamental (2024)",
        url: "https://drive.google.com/file/d/17h3xKJS3tUU6rl9-iYeJdWGUe-BGzq1Q/preview"
      },
      {
        title: "Certificate of Completion for FIKTI Learning 2024 Web Development Bootcamp (2024)",
        url: "https://drive.google.com/file/d/1qbNcjEHrM4DThDnqzWLgVNtreD5eINnp/preview"
      },
      {
        title: "Certificate of Completion for the training of Java Programming for Beginner (2024)",
        url: "https://drive.google.com/file/d/1QxVVn3mJMUpAzq3XPlhhvOB-jzqizvx_/preview"
      },
      {
        title: "Certificate of Completion for the training of Go Programming for Intermediate (2025)",
        url: "https://drive.google.com/file/d/1fTvKYp28hT88CM66-xrh0agfEBcb_Oil/preview"
      },
      {
        title: "Certificate of Completion for the training of Application Development Design (2025)",
        url: "https://drive.google.com/file/d/1EBxdM_Vncob5LuIQIbj-faL0dUylhKcp/preview"
      },
      {
        title: "Certificate of Completion for the training of Java Programming for Intermediate (2025)",
        url: "https://drive.google.com/file/d/1U1Kxh6D335SIHdDlHX2Lq2NjnxdFXsBF/preview"
      }
    ]
  },
  {
    category: 'dicoding',
    docs: [
      {
        title: "Kelas Belajar Dasar AI (November 2024)",
        url: "https://drive.google.com/file/d/10ckwsN39VKUlWW64cZmrmwAH_sRUH75C/preview"
      },
      {
        title: "Kelas Belajar Dasar Pemrograman JavaScript (December 2024)",
        url: "https://drive.google.com/file/d/10hr_NQBuiOEhjdsEoYv652obId9iErI2/preview"
      },
      {
        title: "Kelas Belajar Dasar AWS Cloud (December 2024)",
        url: "https://drive.google.com/file/d/10mGrBRQYMMri4jwfNaz9K3C_jGgrbZ7x/preview"
      },
      {
        title: "Kelas Belajar Back-End Pemula dengan JavaScript (December 2024)",
        url: "https://drive.google.com/file/d/12C8_eRolIPO5ICz7JUHoSrF1Lp8mpspc/preview"
      },
      {
        title: "Kelas Belajar Dasar Data Science (March 2025)",
        url: "https://drive.google.com/file/d/1cdC1zTT0RrfBp4A3o4LHHYEmwqau32IV/preview"
      },
      {
        title: "Kelas Belajar Fundamental Back-End dengan JavaScript (March 2025)",
        url: "https://drive.google.com/file/d/1cfXvqVl8iSScsxlwb6UqJg9QixAWMUZo/preview"
      },
      {
        title: "Kelas Belajar Dasar Visualisasi Data (March 2025)",
        url: "https://drive.google.com/file/d/1cdHRDS3_svlBLllBQVPLGXYR_DruKoF-/preview"
      },
      {
        title: "Kelas Belajar Dasar Structured Query Language (March 2025)",
        url: "https://drive.google.com/file/d/1fDvbgOF62RHky3zqgmTKpLpxTvd8HBbk/preview"
      },
      {
        title: "Kelas Memulai Pemrograman dengan Python (April 2025)",
        url: "https://drive.google.com/file/d/1aQ_SKPB47FoL7qTde4CAoLZ0isskyf5w/preview"
      },
      {
        title: "Pelatihan Coding pada Alur Belajar Back-End Developer level Intermediate (April 2025)",
        url: "https://drive.google.com/file/d/1UFmk4HFkIfni5bVumnu9OpSzFHH403rx/preview"
      },
      {
        title: "Kelas Introduction to Financial Literacy (April 2026)",
        url: "https://drive.google.com/file/d/18QlfUjZaazcAvgMXccm7Ro3HKeVwydms/preview"
      },
      {
        title: "Kelas Belajar Dasar Pemrograman Web (May 2026)",
        url: "https://drive.google.com/file/d/1X2V2UjmVz-m_8z2jIIqgmtiWQOERlKyZ/preview"
      },
      {
        title: "Kelas Belajar Membuat Front-End Web untuk Pemula (May 2026)",
        url: "https://drive.google.com/file/d/1ff7ft_UqPJqoSRlwkUB57wZOlNovA_l5/preview"
      }
    ]
  },
  {
    category: 'microdential',
    docs: [
      {
        title: "Certificate of Completion for the training of Fundamentals of Cloud Computing and Networking Administration (December 2024)",
        url: "https://drive.google.com/file/d/1vVq87DOA2P_-8dvps55eJk_X1Nk2qZyz/preview"
      }
    ]
  }
];

// Ambil elemen-elemen DOM yang dibutuhkan
const pdfList = document.getElementsByClassName('pdf-list');
const modal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');
const modalTitle = document.getElementById('modalTitle');
const loader = document.getElementById('loader');
const btnClose = document.getElementById('btnClose');

// Fungsi untuk menampilkan daftar PDF
function displayPdfList() {
  pdfData.forEach((category, index) => {
    pdfList[index].classList.add(category.category);
    category.docs.forEach((doc, docIndex) => {
      const listItem = document.createElement('li');
      listItem.className = 'pdf-item';
      listItem.innerHTML = `
        <a 
          href="#"
          class="pdf-link"
          data-title="${doc.title}"
          data-url="${doc.url}"
        >
          📄 ${doc.title}
        </a>
      `;
      pdfList[index].appendChild(listItem);
    });
  });
}

// Inisialisasi tampilan daftar PDF saat halaman dimuat
displayPdfList();

// Event listener untuk membuka modal saat link PDF diklik
document.addEventListener('click', function(event){
  if(event.target.classList.contains('pdf-link')){
    event.preventDefault();
    const title = event.target.getAttribute('data-title');
    const url = event.target.getAttribute('data-url');
    
    modalTitle.textContent = title;
    pdfFrame.src = url;
    loader.style.visibility = 'visible';
    loader.style.opacity = '1';
    modal.showModal();
  }
});

// Event listener untuk menyembunyikan loader saat PDF selesai dimuat
pdfFrame.addEventListener('load', function(){
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.visibility = 'hidden';
  }, 300);
});

// Event listener untuk menutup modal saat tombol close diklik
btnClose.addEventListener('click', function(){
  modal.close();
  pdfFrame.src = '';
});

// =========================
// DARK MODE
// =========================

const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = darkModeToggle.querySelector('i');
const darkModeText = darkModeToggle.querySelector('span');

// Ambil preferensi yang tersimpan
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  updateDarkModeButton(true);
}

// Toggle dark mode
darkModeToggle.addEventListener('click', function () {
  const isDarkMode = document.body.classList.toggle('dark-mode');

  localStorage.setItem(
    'theme',
    isDarkMode ? 'dark' : 'light'
  );

  updateDarkModeButton(isDarkMode);
});

// Update icon dan teks tombol
function updateDarkModeButton(isDarkMode) {
  if (isDarkMode) {
    darkModeIcon.className = 'fa-solid fa-sun';
    darkModeText.textContent = 'Light Mode';
  } else {
    darkModeIcon.className = 'fa-solid fa-moon';
    darkModeText.textContent = 'Dark Mode';
  }
}

// =========================
// MOBILE NAVBAR
// =========================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
  const isOpen = navMenu.classList.toggle('active');

  menuToggle.setAttribute('aria-expanded', isOpen);

  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Tutup menu setelah link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function () {
    navMenu.classList.remove('active');

    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});
