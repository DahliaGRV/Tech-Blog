console.log("home home");

document.querySelector(".floatingTextarea").forEach((commentBtn)=>{
    commentBtn.addEventListener("submit",e=>{
        e.preventDefault()
        const id=e.target.getAttribute("id");
        const blogComment = {
            commentBody:document.querySelector("#floatingTextarea").value,
        }
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
                alert("trumpet sound")
            }
    
        })
    })
})