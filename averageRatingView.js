export default class {
    #containerResult = document.querySelector("h3")
    constructor(ratingArr) {
        const result = (ratingArr.reduce((acc, cur) => acc + cur) / ratingArr.length).toFixed(2)
        this.#containerResult.innerHTML = ""
        this.#containerResult.innerText = result
    }
}