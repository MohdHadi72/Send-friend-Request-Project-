
let isStatus = document.querySelector("h3")
let addFrind = document.getElementById("AddFriend")

let checkFriend = 0;


// let addremove = document.getElementById("Remove");


addFrind.addEventListener("click", function(){
    
    if(checkFriend === 0){
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green"
    addFrind.innerHTML = "Remove Friend";
    checkFriend = 1
    }
    
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red"
        addFrind.innerHTML = "Add Friend";
        checkFriend = 0
    }

});



// addFrind.addEventListener("click", function(){
//     isStatus.innerHTML = "Friends";
 
//     isStatus.style.color = "green"

// });

