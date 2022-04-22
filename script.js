///////////////////////////////////////////////////////////
// Open Navigation 

const btnEl = document.querySelector(".header__menu--button");
const headerEl = document.querySelector(".header");
const mainEl = document.querySelector("main");
btnEl.addEventListener("click",function(){
  headerEl.classList.toggle("open__menu");
  document.body.classList.toggle("open__menu");
  mainEl.classList.toggle("open__menu");
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
//Smooth Scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other section
    if (href !== "#" && href.startsWith("#")) {
      // its going to give the section that has the Id of this href
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobie navigation

    // if the links that we click from navigation has main-nav-link class
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});



// const pricingPlan = document.querySelector(".pricing-plan");
// const pricingSection =document.querySelector(".pricing-section")
// pricingPlan.addEventListener("mouseover", func, false);
// pricingPlan.addEventListener("mouseout", func1, false);


// function func()
// {  // not needed since item is already global, 
//    // I am assuming this is here just because it's sample code?
//    // var item = document.getElementById("button"); 
//    pricingSection.classList.add("mouse-in")
// }

// function func1()
// {  
//   pricingSection.classList.remove("mouse-in")
   
// }
