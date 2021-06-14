const submit = document.querySelector('.submit')

async function blogPost(event){
    event.preventDefault();
    console.log("YEEE")

    const content = document.querySelector('.content').value.trim()
    const title = document.querySelector('.title').value.trim()

    if(content && title){
        const response = await fetch('/api/users/post', {
            method: 'POST',
            body: JSON.stringify({ content, title }),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            alert("Your Blog Post has been published")
        }
    }   
}
submit.addEventListener("click", blogPost);