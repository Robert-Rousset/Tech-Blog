const allPosts = document.querySelectorAll(".blog");
allPosts.forEach((post) => {
  const postId = post.dataset.set;
  post.addEventListener("click", async () => {
    const response = await fetch(`/${postId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response) {
    }
  });
});

// // .addEventListener("click", viewPost);

// async function viewPost(event) {
//   const stuff = event;
//   console.log(stuff);
// }
