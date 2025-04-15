// (function($){
//   $(function(){

//     $('.sidenav').sidenav();
//     $('.parallax').parallax();
//     $('.innercontainer');

//   }); // end of document ready
// })(jQuery); // end of jQuery name space
async function __(a) {
  return document.querySelectorAll(a);
};
async function _(a) {
  return await document.querySelector(a);
};

const body = document.body;
const burg = _(".hamburg");
const triggerMenu = _(".sidenav-trigger");

const nav = _("nav");
const menu = _(".menu");
const navlinks = __(".navlinks");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
// let li=document.querySelectorAll("li");
// li.forEach((l)=>{
//   if(!l =="a"){return}
// let b=l.childNodes[0];
//  b.addEventListener("click",navClick(b.id,false),false);
// })

const run = () => {
  
  navlinks.forEach((link)=>{
 console.log(link.parentElement);
  link.addEventListener("click", (e) => {

    // const trigger = _("#trigger").checked = false;
    
  });
});};
// function navClick(e){

// switch (e) {
//   case "nav-mobile":

//     break;
//   case "main_page":
//     mainPage(e);
//     break;
//   case "Credentials":
//     credenTials(e);
//     break;
//   case "Gallery":
//     Gallery(e);
//     break;
//   case "stair_parts":
//     stairParts(e);
//     break;
//   case "contact":
//     Contact(e);
//     break;
//   case "Apply_Today":
//     applyToday(e);
//     break;
//     case "Cdar":
//       Cdar(e);
//       break;
//   default:
//     mainPage(e);
//     break;
// }
//  }

function mainPage(e) {
  if (body.classList.contains("menu-open")) {
    console.log("menu-open", e);
    body.classList.toggle("menu-open");
  }

}

// function credenTials(e) {
//   console.log("credentials", e);
// }

// function Gallery(e) {
//   try {
//     loadImages('./js/imgGallery.json');
//   } catch (error) {
//     console.log("image error");
//   }

// console.log(catagory);
// let bathimgs=catagory[0].bath.img,
//  kitchimgs=catagory[0].kitchen.img,
//  millworkimgs=catagory[0].millwork.img,
//  stairimgs=catagory[0].stairs.img;

let kitchen = _("#kitchen"),
  bathrooms = _("#bathrooms"),
  remodel = _("#remodel"),
  newconstruction = _("#newconstruction"),
  interierfinish = _("#interierfinish"),
  millwork = _("#millwork")
// bathimgs.forEach((bt) =>{console.log("working")});



// fillImage(Object.keys( ));

// }

function fillImage(a) {
  console.log(a);
}

function stairParts(e) {
  console.log("stair", e);
  let stairbtn = document.querySelector(".stairs");

  stairbtn.classList.toggle("hidden");


  //  if(e.innerText==stairbtn.id){
  //   if(stairbtn===hiddenstair){

  //   }
  //   if(!stairbtn.classList.contains("hidden")){stairbtn.classList.add("hidden");}
  //  }

}

function Contact(e) {

  let contactbtn = document.querySelector("#Contact");
  console.log("contact", e);
  contactbtn.classList.toggle("hidden");
}

function applyToday(e) {
  let applybtn = document.querySelector("#Apply_today");
  console.log(applybtn, "start", e);
  if (applybtn) {
    applybtn.classList.toggle("hidden");
  }
}

function Cdar(e) {
  console.log("Calendar", e);
  let contactbtn = document.querySelector(".calwrap"),
    calendar = document.getElementById("Calendar");
  calendar.onclick = (event) => {
    contactbtn.classList.toggle("hidden");
  };

  if (contactbtn) {
    contactbtn.classList.toggle("hidden");
  }
}


// sidnav overlay needs to be populated with ul for sidnav



// triggerMenu.addEventListener("click", (e) => {
//   body.classList.toggle("menu-open");
//  });

// window.addEventListener("scroll", () => {
//   const currentScroll = window.scrollY;
//   if (currentScroll <= 0) {

//     body.classList.remove(scrollUp);

//     return;
//   }

//   if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//     // down
//     body.classList.remove(scrollUp);
//     body.classList.add(scrollDown);
//     console.log("scrollDown");
//   } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
//     // up
//     body.classList.remove(scrollDown);
//     body.classList.add(scrollUp);
//     console.log("scrollUp");
//   }
//   lastScroll = currentScroll;
// });





// document.body.onload = console.log(__(".fold").length);
let imgarray = [
  "img/Bathrooms/bathroomHiddenDoor.jpg",
  "img/decks/Deck-Stairs.jpg",
  "img/kitchen/kitchenCountryOak.jpg",
  "img/millwork/inlaycornerjoint.jpg",
  "img/Stairs/055.jpg",
  "img/Stairs/071.jpg"
];
// const  fld= __(".fold");
// fld.forEach((fol,index) => {
//   const cont= document.createElement("label");
//   cont.setAttribute("for",`btn${index}`)
//   const im= document.createElement("img");
//   im.setAttribute("src",imgarray[index]);
//   im.setAttribute("draggable",true);
//   cont.id=`cont${index}`;
//   cont.classList.add("cont");
//   fol.append(im);
//   cont.append(fol);
//   cont.addEventListener("click", unfold);
//   document.querySelector(".wrap").append(cont)
//   // let bkimg =Gims[index].getAttribute("src");


// // })
// });

// function unfold(e) {
//   const result=__(".result")[0];
//   const img=__(".img")[0];
// if(result){result.addEventListener("click",()=>{
//   result.style=`display:none`;
//   // window.remove(__(".result")[0])
//     console.log(__(".result")[0]);
//   })}

// let pic= e.target;
//   let fol=pic.src;
//   if(img){
//     img.setAttribute("src",fol);
//     img.classList.add("DraggableItem")
//     img.setAttribute("style",`height:100vh`);
//   }

//   result.style=`
//   background-repeat:no-repeat;
//   display:grid;
//   position:fixed;
//  inset:1rem`
//   console.log(result);
// }


// end of gallery
var draggableItems = Array.from(__('.DraggableItem'));
console.log(`There are ${draggableItems.length} draggable items.`);

//Loop over each draggable item and add the listeners
for (var i = 0; i < draggableItems.length; i++) {
  var element = draggableItems[i];
  dragElement(element);
}

function dragElement(ele) {
  //Listen for whenever the element is clicked
  ele.addEventListener('mousedown', dragMouseDown);

  //vars to hold the listeners after the mouse
  var mouseMoveListener;
  var mouseUpListener;

  //Save the mouse offset on the element, so it will not snap to top left corner when starting to drag
  var offsetX = 0,
    offsetY = 0;

  function dragMouseDown(e) {
    //Set the offsets
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    //Add the listeners
    mouseMoveListener = window.addEventListener('mousemove', elementDrag);
    mouseUpListener = window.addEventListener('mouseup', dragMouseUp);
  }

  function dragMouseUp(e) {
    //remove the listeners, which stops teh element from following the mouse
    mouseMoveListener = window.removeEventListener('mousemove', elementDrag);
    mouseUpListener = window.removeEventListener('mouseup', dragMouseUp);
  }

  function elementDrag(e) {
    //move the element
    ele.style.left = (e.clientX - offsetX) + "px";
    ele.style.top = (e.clientY - offsetY) + "px";
  }
}

function closefinish() {

}
const catagory = [];

function loadImages(file) {

  return fetch(file)
    .then(response => response.json())
    .then(data => {
      return catagory.push({
        ktchen: data.kitchen,
        bath: data.bath,
        stairs: data.stairs,
        millwork: data.millwork
      })
    })
}

body.addEventListener("click", Gallery, false)
// if(!null){wrp.addEventListener("click",Gallery());}
let G = __(".gimg");
let cat = G;
console.log(cat);
