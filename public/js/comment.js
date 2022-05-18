console.log("home home");

document.querySelectorAll(".form-floating").forEach((commentBtn)=>{
    commentBtn.addEventListener("submit",e=>{
        e.preventDefault()
        const blogComment = {
            commentBody:commentBtn.querySelector("textarea").value,
        }
        let id = e.target.getAttribute("id");
        fetch(`/api/comments/${id}`,{
            method:"POST",
            body:JSON.stringify(blogComment),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
               location.reload()
            } else {
                alert("Comment could not be commented")
            }
    
        })
    })
})