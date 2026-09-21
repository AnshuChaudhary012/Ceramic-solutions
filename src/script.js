// NAVBAR

const menuBtn = document.getElementById("menuBtn");
const mobileSidebar = document.getElementById("mobileSidebar");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

function closeSidebar() {
  mobileSidebar.classList.add("translate-x-full");
  mobileSidebar.classList.remove("translate-x-0");

  line1.classList.remove("translate-y-[9px]", "rotate-45");
  line2.classList.remove("opacity-0");
  line3.classList.remove("-translate-y-[9px]", "-rotate-45");
}

function openSidebar() {
  mobileSidebar.classList.remove("translate-x-full");
  mobileSidebar.classList.add("translate-x-0");

  line1.classList.add("translate-y-2.25", "rotate-45");
  line2.classList.add("opacity-0");
  line3.classList.add("-translate-y-2.25", "-rotate-45");
}

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  if (mobileSidebar.classList.contains("translate-x-full")) {
    openSidebar();
  } else {
    closeSidebar();
  }
});

document.addEventListener("click", (event) => {
  const clickedInsideSidebar = mobileSidebar.contains(event.target);
  const clickedMenuButton = menuBtn.contains(event.target);

  if (!clickedInsideSidebar && !clickedMenuButton) {
    closeSidebar();
  }
});

// CARDS-[7-cards]

const cards = [
  {
    img: "assets/images/webp/kitchen.webp",
    heading: "Kitchen Backsplash",
    paragraph: "lorem skldkl kajdk j ajdfk jdkjfalkd jdkajldkj jdkjald jdkj",
  },
  {
    img: "assets/images/webp/shower.webp",
    heading: "Custom Showers",
    paragraph: "kdfj ipsum koda kdajfl: sutaveligen. Rodod bänera viliga.",
  },
  {
    img: "assets/images/webp/floor.webp",
    heading: "Custom Flooring",
    paragraph: "Lörem adlj koda adkfj: akljd. Rodod bänera viliga.",
  },
  {
    img: "assets/images/webp/large.webp",
    heading: "Large Format Tiling",
    paragraph: "Lörem flakd koda astrobel: alkjdlf. Rodod bänera viliga.",
  },
  {
    img: "assets/images/webp/wall.webp",
    heading: "Wall Tiling",
    paragraph: "nomore ipsum kdnfo astrobel: sutaveligen. Rodod bänera viliga.",
  },
  {
    img: "assets/images/webp/ada-shower.webp",
    heading: "ADA Compliant Showers",
    paragraph: "hellow ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
  },
  {
    img: "assets/images/webp/fireplace.webp",
    heading: "Fireplace Tiling",
    paragraph: "you are nothing koda astrobel: jlkkjl. Rodod bänera viliga.",
  },
];

const cardsContainer = document.getElementById("card-container");

cardsContainer.innerHTML = cards
  .map(
    (item) => `
 <div
  class="card cursor-pointer group lg:max-w-91 w-full p-6 bg-white shadow-card-shadow rounded-24 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
  id="card"
>
      <img
        width="316"
        height="246"
        class="rounded-12 object-cover w-full h-61.5"
        src="${item.img}"
        alt=""
      />
      <div class="content mt-6">
        <h1 class="heading text-2xl leading-160 text-black font-semibold">
          ${item.heading}
        </h1>
        <p class="para text-black mt-3 text-base font-normal leading-160">
          ${item.paragraph}
        </p>
        <div class="learn w-full mt-6 flex gap-10 items-center">
          <p class="learn-text text-red leading-160 text-base font-semibold">
            Learn more
          </p>

          <svg
            width="26"
            height="12"
            viewBox="0 0 26 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              d="M0.75 4.77344C0.335786 4.77344 0 5.10922 0 5.52344C0 5.93765 0.335786 6.27344 0.75 6.27344V4.77344ZM25.2803 6.05377C25.5732 5.76087 25.5732 5.286 25.2803 4.99311L20.5074 0.220137C20.2145 -0.0727568 19.7396 -0.0727568 19.4467 0.220137C19.1538 0.51303 19.1538 0.987904 19.4467 1.2808L23.6893 5.52344L19.4467 9.76608C19.1538 10.059 19.1538 10.5338 19.4467 10.8267C19.7396 11.1196 20.2145 11.1196 20.5074 10.8267L25.2803 6.05377ZM0.75 6.27344H24.75V4.77344H0.75V6.27344Z"
              fill="#FF0000"
            />
          </svg>
        </div>
      </div>
    </div>
`,
  )
  .join("");


// LOCATION CARDS
const serviceAreas = [
  "Knoxville",
  "Sevierville",
  "Maynardville",
  "Knoxville",
  "Sevierville",
  "Maynardville",
  "Knoxville",
  "Sevierville",
  "Maynardville",
  "Knoxville",
  "Sevierville",
  "Maynardville",
  "Knoxville",
  "Sevierville",
  "Maynardville",
  "Knoxville",
  "Sevierville",
  "Maynardville",
  "Knoxville",
  "Sevierville",
];

const areasContainer = document.getElementById("areasContainer");

areasContainer.innerHTML = serviceAreas
 .map(
  (area) => `
        <div
          class="service-card group transition-all duration-500 ease-out cursor-pointer md:max-w-91 w-full py-6 pl-6 shadow-scroll-card-shadow rounded-24 flex gap-3 items-center hover:-translate-y-2 hover:shadow-xl"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="shrink-0"
          >
            <circle
              cx="24"
              cy="24"
              r="24"
              fill="#FF0000"
              class="transition-all duration-500 ease-in-out"
            />

            <path
              class="transition-all duration-500 ease-in-out"
              d="M34.7754 19.5625C33.4629 13.7875 28.4254 11.1875 24.0004 11.1875C24.0004 11.1875 24.0004 11.1875 23.9879 11.1875C19.5754 11.1875 14.5254 13.775 13.2129 19.55C11.7504 26 15.7004 31.4625 19.2754 34.9C20.6004 36.175 22.3004 36.8125 24.0004 36.8125C25.7004 36.8125 27.4004 36.175 28.7129 34.9C32.2879 31.4625 36.2379 26.0125 34.7754 19.5625ZM24.0004 25.825C21.8254 25.825 20.0629 24.0625 20.0629 21.8875C20.0629 19.7125 21.8254 17.95 24.0004 17.95C26.1754 17.95 27.9379 19.7125 27.9379 21.8875C27.9379 24.0625 26.1754 25.825 24.0004 25.825Z"
              fill="white"
            />
          </svg>

          <p
            class="location text-[clamp(18px,1.6667vw,24px)] text-black font-semibold leading-160 transition-colors duration-500 ease-in-out"
          >
            ${area}
          </p>
        </div>
    `,
)
.join("");

// updating each year

const YEAR = document.getElementById("currentYEAR");
const currentYear = new Date().getFullYear();
YEAR.innerText = currentYear;

// swiper code 
const swiper = new Swiper(".swiper", {
  loop: true,

  slidesPerView: 2,
  spaceBetween: 24,

  freeMode: true,
  freeModeMomentum: true,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  speed: 4000,
  
  breakpoints: {
    // Mobile
    0: {
      slidesPerView: 1,
    },

    // Tablet
    768: {
      slidesPerView: 2,
    },

    // Desktop
    1024: {
      slidesPerView: 3,
    },

    // Large desktop
    1280: {
      slidesPerView: 3.5,
    },
  },
});