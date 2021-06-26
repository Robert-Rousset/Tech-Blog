const submit = document.querySelector(".submit");
const addNewPost = document.querySelector(".addPost");
const postBox = document.querySelector(".box");

function hideAndShow(event) {
  event.preventDefault();
  addNewPost.setAttribute("id", "is-hidden");
  postBox.removeAttribute("id", "is-hidden");
}

async function blogPost() {
  const content = document.querySelector(".content").value.trim();
  const title = document.querySelector(".title").value.trim();

  if (content && title) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ content, title }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.querySelector(".content").value = "";
      document.querySelector(".title").value = "";
      alert("Your Blog Post has been published");
      document.location.reload();
    }
  }
}

addNewPost.addEventListener("click", hideAndShow);
submit.addEventListener("click", blogPost);
