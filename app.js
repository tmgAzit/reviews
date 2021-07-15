// local reviews data
const reviews = [
  {
    id: 1,
    name: "Bikash Marahatta",
    job: "web developer",
    img: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/100541524_1365615413638514_7013442016797261824_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8AqfDDHlUKoAX_moidF&tn=SsaGlF9pvIGOUPVp&_nc_ht=scontent-syd2-1.xx&oh=fd4be4a67082f8ad4cf1e0c870602ff5&oe=60F3D2DC",
      
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Nabin Pandey",
    job: "web designer",
    img: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/28958349_2122626921291894_1685827590561988608_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=4Q_8Cp7NbJoAX_0F1LQ&_nc_ht=scontent-syd2-1.xx&oh=8ad3ea1798771e7770338672222c5fc4&oe=60F2F475",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Prabin Bhusal",
    job: "intern",
    img:"https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/168821432_3744506892338355_4421524054596963334_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=QzHQvgGGFFYAX93rpGo&_nc_ht=scontent-syd2-1.xx&oh=49c8c31b75c8133545487c0f01e25a68&oe=60F35637",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Saroz Gole Tamang",
    job: "the boss",
    img: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/151954638_105458371587253_3334552678289798339_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ELuE1qaWFLcAX_qD2JW&tn=SsaGlF9pvIGOUPVp&_nc_ht=scontent-syd2-1.xx&oh=393166bb1181d3a3d04f922d659fa20a&oe=60F311A1",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "Preety Pakhrin",
    job: "Photo & Video editor",
    img: "/photo.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items 
const img = document.getElementById("person-img");
const author= document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item 
let currentItem = 0;

// load initial item 
window.addEventListener("DOMContentLoaded", function() {
 showPerson(curretItem);
});

// show person based on item 

function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person 
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show previous person 
prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person 
randomBtn.addEventListener('click',function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});