function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];

    let all_products=document.getElementById("all_products")

    data.forEach(function(el){
        let div=document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image;
        let p =document.createElement("p");
        p.innerText=el.type;
        let h4 =document.createElement("h4");
        h4.innerText=el.desc; 
        let h5 =document.createElement("h5");
        h5.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        // btn.setAttribute("click",function (){
        //     remove(index)
        // })
        
        div.append(img,p,h4,h5,btn)
        all_products.append(div);

    })
}

append()

function remove(index){
data.splice(index,1);
localStorage.setItem("products",JSON.stringify(data));
window.Location.reload();
}