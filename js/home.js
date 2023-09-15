url = "http://localhost:3000/posts";
const heroSection = document.querySelector(".Hero_section");
async function displayHero(text) {
  try {
    const res = await axios.get(url);
    let str = "";
    let data = await res.data;
    let result = data.filter((el, id) => id == 0);
    result.map((el) => {
      str += `
      <div
      class="hero d-flex align-items-center justify-content-between"
      style="
        background-image: url(${el.img});
        background-size: cover;
        background-repeat: no-repeat;
      "
    >
      <div class="container ">
        <h4 class="sub_title ">Posted on <b>startup</b></h4>
        <h1 class="title pb-4 pt-4 w-50">
          ${el.title}
        </h1>
        <p class="author  d-inline">
          By <b class="text-warning d-inline">James West</b> | ${el.date}
        </p>
        <p class="paragraph pt-4 w-50">
          ${el.description}
        </p>
        <button class="btn btn-warning">Read More ></button>
      </div>
    </div>
      `;
    });

    heroSection.innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}

displayHero();
const cardBox = document.querySelector(".card_box");

async function displayCards(text) {
  try {
    const res = await axios.get(url);
    let str = "";
    let data = await res.data;
    let result = data.slice(data.length - 3, data.length);

    result.map((el) => {
      str += `
        <div class="cards">
        <img src="${el.img}" alt="" />
        <p class="author d-inline">
          By <b class="text-warning d-inline">${el.author}</b> | ${el.date}
        </p>
        <h2 class="title">
          ${el.title}
        </h2>
        <p class="paragraph">
          ${el.description}
        </p>
        </div> 
        `;
    });

    cardBox.innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}

displayCards();

let categories = ["Business", "Economy", "Startup", "Technology"];

const categoryBox = document.querySelector(".categories");

let categoriesStr = "";

for (i in categories) {
  console.log(categories[i]);
  categoriesStr += `
    <div  onclick="openCategory(${i})" class="category_card border">
        <img src="../images/site_images/Busines_cat.png" alt="" />
        <h2 class="card_title">${categories[i]}</h2>
        <p class="card_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
        id?
        </p>
        
    </div>
  

`;
}

categoryBox.innerHTML = categoriesStr;

function openCategory(categ) {
  localStorage.setItem("category", categ);
  window.location = "./category.html";
}
