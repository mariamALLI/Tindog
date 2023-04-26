// Remember to import the data and Dog class!
import dogsData from "./data.js";
import DogProfiles from "./Dog.js";


let dogsProfile = ['husky', 'rex','jojo', 'bella','cutey','teddy','jayjay','abby','bluey']
const dogDisplay = document.getElementById('dog_display')
const cross = document.getElementById('cross')
const heart = document.getElementById('heart')

let hasBeenLiked = false
let hasBeenSwiped = false

function getNewDogProfile(){
    const nextDogProfile = dogsData[dogsProfile.shift()]
    return nextDogProfile ? new DogProfiles(nextDogProfile) : {}
}


function likeBtn(){
    if(!hasBeenLiked && !hasBeenSwiped){
        document.getElementById('like').style.display = 'block'
        document.getElementById('nope').style.display = 'none'
        if(dogsProfile.length > 0){
            setTimeout(()=>{
                dogsPage = getNewDogProfile()
                renderProfile()
                !hasBeenSwiped
                document.getElementById('like').style.display = 'none'
            },1500)
        }
        
    }
}

heart.addEventListener('click', likeBtn)

function dislikeBtn(){
    if(hasBeenLiked && hasBeenSwiped){
        document.getElementById('nope').style.display = 'none'
    }else if (!hasBeenLiked && !hasBeenSwiped){
        document.getElementById('nope').style.display = 'block'
        document.getElementById('like').style.display = 'none'
        if(dogsProfile.length > 0){
            setTimeout(()=> {
                dogsPage = getNewDogProfile()
                renderProfile()
                hasBeenSwiped
                document.getElementById('nope').style.display = 'none'
            },2000)
        }
    }
}

cross.addEventListener('click', dislikeBtn)

function renderProfile() {
    dogDisplay.innerHTML = dogsPage.getDogsHtml()
}

let dogsPage = getNewDogProfile()
renderProfile()