let title = document.querySelector("#editTitle");
let content = document.querySelector("#editContent");
const deleteButton = document.querySelector(".delete");
const submitEdit = document.querySelector(".submitEdit");
const url = document.location.pathname;
const blogId = url.substring(url.lastIndexOf("/") + 1);

function hideAndShow(event) {
  event.preventDefault();
  deleteButton.setAttribute("id", "is-hidden");
  submitEdit.removeAttribute("id", "is-hidden");
}

async function editPost() {
  let title = document.querySelector("#editTitle").innerHTML;
  let content = document.querySelector("#editContent").innerHTML;

  if (title && content) {
    const response = await fetch(`/api/edit/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log(response);
      alert("Your Blog Post Has Been Updated!");
      document.location.replace("/dashboard");
    }
  }
}

async function deletePost() {
  if (confirm("Are you sure you want to delete this post?")) {
    const response = await fetch(`/api/edit/${blogId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("YEEE");
      alert("Your Blog Post Has Been Deleted!");
      document.location.replace("/dashboard");
    }
  }
}

deleteButton.addEventListener("click", deletePost);
submitEdit.addEventListener("click", editPost);

title.addEventListener("input", hideAndShow);
content.addEventListener("input", hideAndShow);
