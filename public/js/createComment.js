const submit = document.querySelector("#submitComment");

async function blogPost() {
  const url = document.location.pathname;
  const blogId = url.substring(url.lastIndexOf("/") + 1);

  const content = document.querySelector(".leaveComment").value.trim();
  if (content) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content, blogId }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.querySelector(".leaveComment").value = "";
      alert("Your Comment has been published");
      document.location.reload();
    }
  }
}
submit.addEventListener("click", blogPost);
