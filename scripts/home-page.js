//navbar import

import {navbar} from "../components/navbar/navbar.js";
document.querySelector(".navbar").innerHTML = navbar();

// Image Slider

var img = document.querySelector('.img');

var slides = ["https://images.ctfassets.net/wtodlh47qxpt/4wzmNLWjqVZZl95Fcf48r2/90bd1294b970f903545d8f0f5278b28a/Allu_Arjun_Combo_Meal__1440x396px.jpg?w=1366&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1366&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/500GRYvL6xfLzNRY68rr4u/c66030e22aa477594939c55281fc00fd/variety_bucket_banner_1440x396px.jpg?w=1366&fit=fill&fm=webp", "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp", "https://images.ctfassets.net/wtodlh47qxpt/4qo6xWTWQmjg8ycSRETMU5/649a454a732e77c4cc534524e48bd800/Box_Meals_App_Banner__1440x396px.jpg?w=1366&fit=fill&fm=webp"];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);


// Categories Section

var catgData=[{
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT208.jpg?ver=25.08",
    title:"EXCLUSIVE DEAL",
    link:""
},
{
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=25.08",
    title:"CHICKEN BUCKETS",
    link:""
},
{
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT200.jpg?ver=25.08",
    title:"NEW LAUNCH",
    link:""
},
{
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=25.08",
    title:"BIRIYANI BUCKETS",
    link:""
},{
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=25.08",
    title:"BOX MEAL",
    link:""
},
{
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=25.08",
    title:"BURGERS",
    link:""
},
{
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=25.08",
    title:"SNACKS",
    link:""
},
{
    img:"https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
    title:"View All Menu →",
    link:""
}]
displayCatg()
function displayCatg(){
    var catg=document.querySelector(".disp-catg")
    catgData.map((ele)=>{
        let div=document.createElement("div")
        div.onclick=function(){
            location.href =ele.link
        }
        let img=document.createElement("img")
        img.src=ele.img
        let h3=document.createElement("h3")
        h3.textContent=ele.title
        div.append(img,h3)
        catg.append(div)
    })
}