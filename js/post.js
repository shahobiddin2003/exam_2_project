let url = "http://localhost:3000/posts";

let postsCardBox = document.querySelector(".post_detail");
async function displayCards() {
  try {
    const res = await axios.get(url);
    let data = await res.data;
    let takenId = localStorage.getItem("ID");
    let result = data.filter((el) => el.id == takenId);
    let str = "";
    result.map((el) => {
      str += `
      <img class="w-100 img" src="${el.img}" alt="" />
          <div
            class="detail w-75 d-flex flex-column align-items-start justify-content-start"
          >
            <h4 class="author mt-5">${el.author}</h4>
            <p class="date">Posted on ${el.date}</p>
            <h2 class="title mt-5">
              ${el.title}
            </h2>
            <h6 class="category mt-5"><b>${el.category}</b></h6>

            <p class="description mt-5">
              ${el.description}
               <br />
               ${el.description}
           
            </p>
          </div>
    `;
    });

    postsCardBox.innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}

displayCards();
