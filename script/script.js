const accessKey = wqxq8lg5Su7JRKkSyHC6k9U2PJ9KvS_59thbhIejjBo;

//store HTML in variables
const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImages(){
    inputData = inputEl.value
    //handles empty search input
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    //Image template element
    results.map((result) => {
        //image template
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        //image source and small thumbnail
        image.src = result.urls.small
        image.alt = result.alt_description
        //image link
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html 
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        //append the results
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);
        
    })
    page++
    if(page > 1){
        //Show more button visibility
        showMore.style.display = "block"
    }
}

formEl.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()

})

showMore.addEventListener("click", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()

})













