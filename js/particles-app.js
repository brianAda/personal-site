const speed = document.querySelector("#speed");
const density = document.querySelector("#density");
const size = document.querySelector("#size");
const lineWidth = document.querySelector("#line-width");

const particleObj = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#a4a4a4"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#000000"
      },
      polygon: {
        nb_sides: 50
      }
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: "#a4a4a4",
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.6
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

// Initialize the particles
particlesJS("particles-js", particleObj);

speed.addEventListener('change', () => {
  particleObj.particles.move.speed = speed.value;
  particlesJS("particles-js", particleObj);
});

density.addEventListener('change', () => {
  particleObj.particles.number.value = density.value;
  particlesJS("particles-js", particleObj);
});

size.addEventListener('change', () => {
  particleObj.particles.size.value = size.value;
  particlesJS("particles-js", particleObj);
});

lineWidth.addEventListener('change', () => {
  particleObj.particles.line_linked.width = lineWidth.value;
  particlesJS("particles-js", particleObj);
});

/* line_linked.width */
