const submit = document.querySelector("#submitComment");
const commentInputArea = document.querySelector(".leaveComment");

async function blogPost() {
  const url = document.location.pathname;
  const blogId = url.substring(url.lastIndexOf("/") + 1);

  const content = commentInputArea.value.trim();
  if (content) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content, blogId }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.redirected) {
      alert("You must Login to leave a comment");
      document.location.replace("/login");
    } else if (response.ok) {
      document.querySelector(".leaveComment").value = "";
      alert("Your Comment has been published");
      document.location.reload();
    }
  }
}

submit.addEventListener("click", blogPost);
