// Create the Dog class here
class DogProfiles{
    constructor(data){
        Object.assign (this, data)  
    }

    getDogsHtml() {
        const {name, avatar, age, bio} = this

        return `
        <div class="dog_pic">
        <img class="dog_profile" src="${avatar}" alt="dog profile">
             <div class="container">
                    <div class="dog_info">
                        <h1>${name},${age}</h1>
                        <p>${bio}</p>
                    </div>

                    <img id="like" src="images/badge-like.png" alt="badge-like">
                    <img id="nope" src="images/badge-nope.png" alt="badge-nope">
             </div>       
    </div>
        `
    }

}

export default DogProfiles