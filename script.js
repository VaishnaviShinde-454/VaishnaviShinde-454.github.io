// ================= TYPING EFFECT =================

new Typed("#typing", {
  strings: ["Web Developer", "ENTC Engineer", "Programmer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  sections.forEach(sec => {

    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }

  });

});


// ================= SKILL ANIMATION + COUNTER =================

const skillSection = document.querySelector("#skills");
const bars = document.querySelectorAll(".progress");
const percents = document.querySelectorAll(".percent");

let skillDone = false;

window.addEventListener("scroll", () => {

  if (
    skillSection.getBoundingClientRect().top < window.innerHeight - 100 &&
    !skillDone
  ) {

    // Animate bars
    bars.forEach(bar => {
      bar.style.width = bar.dataset.width;
    });

    // Animate numbers
    percents.forEach(percent => {

      let start = 0;
      let end = percent.dataset.target;

      let counter = setInterval(() => {

        start++;
        percent.textContent = start + "%";

        if (start >= end) {
          clearInterval(counter);
        }

      }, 20);

    });

    skillDone = true;
  }

});


// ================= MOBILE MENU =================

document.getElementById("menuBtn").onclick = () => {

  document.getElementById("menu").classList.toggle("active");

};


// ================= DARK MODE =================

// ===== DARK MODE TOGGLE =====

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

  document.body.classList.toggle("light");

  // Change icon
  if(document.body.classList.contains("light")){
    themeBtn.textContent = "☀️";
  }else{
    themeBtn.textContent = "🌙";
  }

};



// ================= POPUP SYSTEM =================

const modal = document.getElementById("customModal");
const title = document.getElementById("modalTitle");
const msg = document.getElementById("modalMessage");
const cancel = document.getElementById("modalCancel");
const confirmBtn = document.getElementById("modalConfirm");

let action = null;


// Open Popup
function openModal(t, m, cb) {

  title.textContent = t;
  msg.textContent = m;
  action = cb;

  modal.classList.add("show");
}


// Close Popup
function closeModal() {

  modal.classList.remove("show");
  action = null;

}

cancel.onclick = closeModal;


// Yes Button
confirmBtn.onclick = () => {

  if (action) action();

  closeModal();

};


// ================= RESUME DOWNLOAD =================

document.getElementById("resumeBtn").onclick = () => {

  openModal(
    "Download Resume",
    "Do you want to download my resume?",
    () => {
      window.location.href = "Vaishnavi Shinde Soft.pdf";
    }
  );

};


// ================= GITHUB =================

document.getElementById("githubBtn").onclick = () => {

  openModal(
    "Open GitHub",
    "Do you want to visit my GitHub profile?",
    () => {
      window.open("https://github.com/VaishnaviShinde-454","_blank");

    }
  );

};


// ================= CERTIFICATES =================

document.querySelectorAll(".cert-download").forEach(btn => {

  btn.onclick = () => {

    const file = btn.dataset.file;

    openModal(
      "Download Certificate",
      "Do you want to download this certificate?",
      () => {
        window.location.href = file;
      }
    );

  };

});


// ================= INTERNSHIP CERTIFICATES =================

function downloadCert(file) {

  openModal(
    "Download Certificate",
    "Do you want to download this certificate?",
    () => {
      window.location.href = file;
    }
  );

}
