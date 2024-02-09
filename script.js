window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.title-container').style.opacity = 1;
      document.querySelector('.title-container').style.visibility = 'visible';
    }, 100);
});

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.fade-in').classList.add('active');
    }, 100);
});

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.title-container').style.opacity = 1;
      document.querySelector('.title-container').style.visibility = 'visible';
      scrollToContent();
    }, 100);
  });
  
  function scrollToContent() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;
    let autoScrollEnabled = true;
  
    function scrollNextSection() {
      if (currentSectionIndex < sections.length - 1 && autoScrollEnabled) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        if (currentSectionIndex === 1) {
          autoScrollEnabled = false;
          document.querySelector('.title-container').style.opacity = 0;
          document.querySelector('.title-container').style.visibility = 'hidden';
          document.body.style.overflow = 'auto';
          sections[0].style.display = 'none';
        }
      }
    }
    setInterval(scrollNextSection, 5000);
  }
  document.querySelector('.title-container').addEventListener('transitionend', function() {
    const section2 = document.querySelector('#section2');
    section2.classList.add('show-image');
    const image = document.querySelector('#section2 .box');
  });


  let audio = new Audio('music/Romeo.mp3');
  let volumeControl = document.getElementById('volume');
  let musicToggle = document.getElementById('music-toggle');
  let volumeLevel = document.getElementById('volumeLevel');

  volumeControl.disabled = true;
  
  musicToggle.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      volumeControl.disabled = false;
    } else {
      audio.pause();
      volumeControl.disabled = true;
    }
  });
  
  volumeControl.addEventListener('input', function() {
    audio.volume = volumeControl.value;
    volumeLevel.textContent = Math.round(volumeControl.value * 100);
  });


  window.onload = function() {
    let volumeControl = document.getElementById('volume');
  
    volumeControl.addEventListener('input', function() {
      audio.volume = volumeControl.value;
    });
  };