let url = "http://localhost:3000/posts";

let postsCardBox = document.querySelector(".all_posts_cardbox");
async function displayCards(text = 1) {
  try {
    const res = await axios.get(`${url}?_page=${text}&_limit=5`);
    let data = await res.data;
    console.log(data);
    let str = "";
    data.map((el) => {
      str += `
      <div onclick="goDetails(${el.id})" class="posts d-flex gap-5 mt-5">
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

    postsCardBox.innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}

displayCards(1);

function prev() {
  displayCards(1);
}

function next() {
  displayCards(2);
}

function goDetails(id) {
  window.location = "./post.html";
  localStorage.setItem("ID", id);
}
