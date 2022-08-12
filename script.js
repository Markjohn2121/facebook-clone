var postImg = document.getElementsByClassName("get-post-actual");
var addPost = document.getElementsByClassName("user-post");
var mainPost = document.getElementById("main-post");

var yourProfile = document.getElementById("profile");
var postProfile = document.getElementsByClassName("user-prof");
var postName = document.getElementsByClassName("name");
var postDate = document.getElementsByClassName("date");
var postCaption = document.getElementsByClassName("caption-text");


/** 
 * add image file in assets folder and copy image name
 * rename "./assets/your image name" 
 note: include image extension file
**/



yourProfile.src = "./assets/img11.jpg";// rename this for profile image

//configuration
var postInfo = {
  
  // number of post you can add more post
 postNumber: 7,
 
 //rename or add more image
 setImg:[
 "./assets/img21.jpg",  // postNumber 1
 "./assets/img11.jpg", // postNumber 2
 "./assets/img11.jpg", // postNumber 3
 "./assets/img21.jpg", // postNumber 4
 "", //leave blank if caption only   
  "./assets/img21.jpg",
 "none" //put none if no image
 
 ],
 
 // rename or add more image
 setProfile: [
 "./assets/img21.jpg",
 "./assets/img11.jpg",
 "./assets/img11.jpg",
 "./assets/img21.jpg",
 
   ],
   
   
   //rename  or add more name
   setName: [
     
 "Facebook user",
 "Unknown user",
 "Mark john Valdez",
 "QSU",
 "moonstar"
 
 
 
   ],
   
   
   setDate: [
     
     "yesterday at 10:53 am",
     "Feb 15, 2022",
     "Nov 29, 2023",
     "20 minutes ago",
     "5 minutes ago",
     
    ],
    
   setCaption: [
     
   `\tQurino University 
   #QSU`,
   
   `\tGood job`,
   
   `\tBe a better person❤️`,
   
   `QSU`,
    `Hello....`,
   
     
     ]
 
 
  
};





if(postInfo.postNumber > 0){
  setPost();
}else{
  addPost[0].style.display = "none";

}












function setPost(){

  var currentNumber = 1;
  
  while(postInfo.postNumber != currentNumber ){
    
    var elem = mainPost.childNodes[1];

const newelem = elem.cloneNode(true);

mainPost.appendChild(newelem);
    
    currentNumber++;
  }
  
for(var img = 0; img <postInfo.postNumber;img++){
    
    
if(postInfo.setImg[img] == undefined || postInfo.setImg[img] == ""){
      
  
  postImg[img].style.display = "none";
  
 
   
   





}else{ 
  if(postInfo.setImg[img] == "none"){
      postImg[img].style.display = "";
  
    }else{
  
  postImg[img].style.height = "fit-content";
  
  postImg[img].style.border = "none";
  postImg[img].children[1].style.display = "none";
  postImg[img].children[2].style.display = "none";

  postImg[img].children[0].style.width = "99%";
  postImg[img].children[0].src = postInfo.setImg[img];
    }
}

// set Name 

if(postInfo.setName[img]== undefined || postInfo.setName[img] == "" ){
 
  
  
  
postName[img].innerHTML = "No name";
    
}else{
  

postName[img].innerHTML = postInfo.setName[img];
    
}

// set profile

if(postInfo.setProfile[img]== undefined || postInfo.setProfile[img] == ""){
  
    postProfile[img].src = "./assets/photo black.svg";
  }else{
      
postProfile[img].src = postInfo.setProfile[img];
  }



//set post Date

if(postInfo.setDate[img] == undefined ||postInfo.setDate[img] == ""){
  
  postDate[img].innerHTML = "just now";
  
}else{
 postDate[img].innerHTML = postInfo.setDate[img];
}

// set post Captions

if(postInfo.setCaption[img] == undefined || postInfo.setCaption[img] == ""){
  
  postCaption[img].innerHTML = "";
  
  
}else{
  
  postCaption[img].innerHTML = postInfo.setCaption[img];
  
}

    
   
  }
 
}

