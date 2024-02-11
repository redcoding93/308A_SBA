const accessKey = "wqxq8lg5Su7JRKkSyHC6k9U2PJ9KvS_59thbhIejjBo";

//store HTML in variables
const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

//used async for fetch and await
async function searchImages(){
    inputData = inputEl.value
    //handles empty search input
    //initialized page, adds a query for input data then use client id from access key
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    //fetch the images
    const response = await fetch(url)
    //convert to json format
    const data = await response.json()
    //stores results
    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    //Image template element; push results into container
    results.map((result) => {
        //image template; contains template div
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        //creates the image part of the template
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
        searchResults.appendChild(imageWrapper);
        
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













