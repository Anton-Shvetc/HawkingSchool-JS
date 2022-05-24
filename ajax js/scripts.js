const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

let ets = "https://api.github.com/users/Anton-Shvetc";
loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();

  axiosData(`https://api.github.com/users/${searchValue}`);
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`;
    });
});

function axiosData(url) {
  return axios.get(url).then((response) => {
    console.log(response.data);
    response.data.map((e) => {
      newDiv = document.createElement("div");
      newDiv.classList.add("response-container");
      resultsContainer.appendChild(newDiv);
      newDiv.innerHTML = `
                     <p> id: <span>${e.id}</span><p>
                    <p> title: <span>${e.title}</span><p>
                    <p> body: <span>${e.body}</span><p>
                `;
    });
  });
}
axiosData(`https://jsonplaceholder.typicode.com/posts`);
