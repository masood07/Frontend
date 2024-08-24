fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=21&context=embed")
.then(
    (data)=>data.json()
)
.then(
    (data)=>{
        console.log(data);
        
        data.forEach(element => {
            let div=document.createElement("div");
            let img=document.createElement("img");
            let link=document.createElement("a");
            let title=document.createElement("p");
            let parrent=document.getElementById("container");
            img.src=element.jetpack_featured_media_url;
            link.href=element.link;
            img.alt="not found";
            link.innerText=element.yoast_head_json.title;
            link.target="_blank";
            title.innerText=element.yoast_head_json.description;
            div.appendChild(img);
            div.appendChild(link);
            div.appendChild(title);
            parrent.appendChild(div); 
        });
    }
)
.catch(
    (err)=> console.log(err)
) 
/* 
jetpack_featured_media_url==>image
link==>link
title.render==> title
 */
