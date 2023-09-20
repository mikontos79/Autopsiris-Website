/**
 * HOME PAGE ANIMATION
 */

const tl1 = gsap.timeline();
tl1.from(".bg-image", {
  opacity: 0,
});

tl1.from(".loop-wrapper, .mountain , .hill, .tree, .rock, .truck, .wheels", {
  duration: 1.5,
  y: -100,
  opacity: 0,
  stagger: {
    amount: 0.4,
  },
});

tl1.from(".logo , .menu-open", {
  duration: 1,
  y: -100,
  opacity: 0,
  stagger: {
    amount: 0.4,
  },
});

tl1.to(
  ".container h1",
  {
    opacity: 1,
    duration: 1.2,
  },
);
tl1.to(
  ".container h2",
  {
    opacity: 1,
    letterSpacing: "-1px",
    
  },
);



tl1.to(".bg-image", {
  overflow: "visible",
});
const tl = gsap.timeline({
  paused: "true",
});

tl.to(".menu-container", {
  duration: 1,
  x: 0,
});
tl.from(
  ".menu-close",
  {
    opacity: 0,
    rotate: "180deg",
  },
  "-=.2"
);
tl.from(
  ".line",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    width: "0%",
  },
  "-=.2"
);
tl.from(
  ".menu-item-number",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.5"
);
tl.from(
  ".menu-item-name",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.3"
);
tl.from(
  ".menu-item-sub",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.1"
);
tl.from(
  ".menu-item-icon",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1"
);
function menuOpen() {
  tl.play();
}
function menuClose() {
  tl.reverse();
}
/**
 * ANIMATED COUNTER
 */

"use strict";
const container = document.querySelector("#countercontainer");
const experienceCount = document.querySelectorAll("#experience");
const projectsCount = document.querySelectorAll("#projects");
const clientsCount = document.querySelectorAll("#clients");

const counter = function () {
  const experience = setInterval(() => {
    experienceCount.forEach((e) => {
      const target = 3; // Target number
      let input = e;
      let data = input.textContent;
      if (data < target) {
        data = e.textContent++;
        // console.log(data);
      }
    });
  }, 150); // 0.15 | Seconds Adjust ms for speed

  const projects = setInterval(() => {
    projectsCount.forEach((e) => {
      const target = 150; // Target number

      let input = e;
      let data = input.textContent;
      if (data < target) {
        data = e.textContent++;
        // console.log(data);
      }
    });
  }, 15); 

  const clients = setInterval(() => {
    clientsCount.forEach((e) => {
      const target = 100; // Target number
      let input = e;
      let data = input.textContent;
      if (data < target) {
        data = e.textContent++;
      }
    });
  }, 12.5); // 0.0125 Seconds| Adjust ms for speed
};

// Intersection Observer API

// #1 Creating options - contains setting for observer
const obsOptions = {
  root: null, // Since we are watching target
  threshold: 1,
};

// #2 Creating callback function
const obsCallback = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  counter();
};

// #3 Create Observer
const observer = new IntersectionObserver(obsCallback, obsOptions);

// #4 Targeteting element to be observed
observer.observe(container);

/**
 * BACK TO TOP BUTTON
 */
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  const bodyHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollEndPos = bodyHeight - windowHeight;
  let totalScrollPercent = 0;

  if (scrollEndPos > 0) {
    totalScrollPercent = (window.scrollY / scrollEndPos) * 100;
  }

  backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;

  // visible back top btn when scrolled 5% of the page
  if (totalScrollPercent > 5) {
    backTopBtn.classList.add("show");
  } else {
    backTopBtn.classList.remove("show");
  }
});

backTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Add smooth scrolling behavior
  });
});

/**
 * GALLERY FILTER
 */
const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
     // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
     // activate new 'filter-item'
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }
     });
  }
});
