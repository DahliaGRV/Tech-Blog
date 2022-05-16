
// const{Blog} = require('../../models');

console.log("hello")
document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault()
    console.log("this is working")
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    fetch("/api/blogs/",{
        method:"POST",
        body:JSON.stringify(blogObj),
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
document.querySelectorAll(".update").forEach((updateBtn)=>{
    updateBtn.addEventListener("submit",u=>{
        u.preventDefault()
        // const id=u.target.getAttribute("id");
        const updBlog = {
            title:document.querySelector("#titleChange").value,
            body:document.querySelector("#bodyChange").value,
        }
        fetch(`/api/blogs/${id}`,{
            method:"PUT",
            body:JSON.stringify(updBlog),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                alert("Blog has been updated!")
                location.reload()
            } else {
                alert("Blog was not updated")
            }
        })
    })
});


document.querySelectorAll(".delete").forEach((deleteBtn)=>{
    deleteBtn.addEventListener("click",e=>{
        e.preventDefault()
        const id=e.target.getAttribute("id");
        fetch(`/api/blogs/${id}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
               location.reload()
            } else {
                alert("Blog was not deleted")
            }
        })
    })
})