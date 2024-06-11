const card = document.querySelector(".card");
const addPostBtn = document.querySelector(".addBtn");

function createCard(postId, postTitle, postBody) {

  function loadPost () {
    const addCard = document.createElement("div");
    addCard.innerText = "";
    card.appendChild(addCard);
    addCard.classList.add(`card${postId}`,"flex", "justify-center","flex-col", "bg-emerald-700", "p-4", "rounded-xl", "shadow-md", "w-96", "m-5");
    
    const addTitle = document.createElement("h2");
    addTitle.innerText = `${postTitle}`;
    addCard.appendChild(addTitle);
    addTitle.classList.add("font-semibold", "text-center",  "text-zinc-200", "tracking-wider", "rounded-sm", "mb-2");
    
    const addBody = document.createElement("p");
    addBody.innerText = `${postBody}`;
    addCard.appendChild(addBody);
    addBody.classList.add("shadow-lg", "p-2", "rounded-xl", "text-slate-300", "text-lg", "text-justify");
  };

  let countClick = 0;
//Load 10 posts after clicks
  addPostBtn.addEventListener("click", () => {

    countClick++;

    switch (countClick) {
      case 1:
        if (postId <= 10) {
          loadPost();
        }
        break;

      case 2:
        if (postId >= 11 && postId <= 20) {
          loadPost();
        }
        break;

      case 3:
        if (postId >= 21 && postId <= 30) {
          loadPost();
        }
        break;

      case 4:
        if (postId >= 31 && postId <= 40) {
          loadPost();
        }
        break;

      case 5:
        if (postId >= 41 && postId <= 50) {
          loadPost();
        }
        break;

      case 6:
        if (postId >= 51 && postId <= 60) {
          loadPost();
        }
        break;

      case 7:
        if (postId >= 61 && postId <= 70) {
          loadPost();
        }
        break;

      case 8:
        if (postId >= 71 && postId <= 80) {
          loadPost();
        }
        break;

      case 9:
        if (postId >= 81 && postId <= 90) {
          loadPost();
        }
        break;

      case 10:
        if (postId >= 91 && postId <= 100) {
          loadPost();
        }
        break;

      default:
        if (postId === 100) {
          alert("All posts loaded!");
        }
        break; 
    }
  });
}

async function fakeAPI() {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await req.json();  
  const fullPost = json.map( post => createCard(post.id, post.title, post.body));
  return fullPost;
}

fakeAPI();
