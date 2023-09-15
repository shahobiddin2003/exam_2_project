let categories = ["Business", "Economy", "Startup", "Technology"];
let takenCategory = null;
for (i in categories) {
  if (i == localStorage.getItem("category")) {
    takenCategory = categories[i];

    break;
  }
}
const topPlace = document.querySelector(".top_section");
let topPart = `
<h1 class="title">${takenCategory}</h1>
        <p class="context text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore.
        </p>
        <p class="paging">BLOG > ${takenCategory.toUpperCase()}</p>
        `;

url = "http://localhost:3000/posts";
topPlace.innerHTML = topPart;

async function displayCards(text) {
  try {
    const res = await axios.get(url);
    let data = await res.data;
    let result = data.filter((el) => el.category == takenCategory);
    let str = "";
    result.map((el) => {
      str += `
    <div class="posts d-flex pt-5 gap-5">
          <div class="posts_left">
            <img src="${el.img}" alt="" />
          </div>
          <div class="posts_right">
            <h6 class="pre_title">${el.category}</h6>
            <h2 class="title">${el.title}</h2>
            <p class="context">
              ${el.description}
            </p>
          </div>
        </div>

    `;
    });

    document.querySelector(".category_posts").innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}

displayCards();
