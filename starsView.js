const STAR_ICON_EMPTY = "bi-star";
const STAR_ICON_FILL = "bi-star-fill";

class StarsView {
    #container = document.querySelector("#starCn")
    #stars = Array.from(this.#container.querySelectorAll(".bi"))
    #containerSubmit = document.querySelector("#submitContainer")
    #containerResult = this.#containerSubmit.querySelector("h2")
    #btnSubmit = this.#containerSubmit.querySelector(".btn-info")
    #btnReset = this.#containerSubmit.querySelector(".btn-secondary")
    // when a user choices a rating stars eventHandlers will be deleted
    #interactive = true;
    #selectedRating = 2;

    #emptyStars(index) {
        if (!this.#interactive) return
        for (let i = 0; i <= index; i++) {
            this.#stars[i].classList.remove(STAR_ICON_FILL)
            this.#stars[i].classList.add(STAR_ICON_EMPTY)
        }
    }

    #fillStars(index) {
        if (!this.#interactive) return
        for (let i = 0; i <= index; i++) {
            this.#stars[i].classList.remove(STAR_ICON_EMPTY)
            this.#stars[i].classList.add(STAR_ICON_FILL)
        }
        console.log("fill ")
    }

    #closeSubmitCn(){
        this.#containerSubmit.style.opacity = 0
    }
    #openSubmitCn(){
        this.#containerSubmit.style.opacity = 1
    }

    #renderResult(r) {
        this.#openSubmitCn()
        this.#containerResult.innerHTML = ""
        this.#containerResult.innerText = +r + 1
    }

    submitButtonHandler(handler){
        this.#btnSubmit.addEventListener("click", () => handler(+this.#selectedRating + 1))
    }

    init() {
        this.#closeSubmitCn()
        this.#btnReset.addEventListener("click", this.init.bind(this));
        this.#interactive = true;

        this.#stars.forEach(star => {
            const { index } = star.dataset;
            const [fillHandler, emptyHandler] = [this.#fillStars.bind(this, index), this.#emptyStars.bind(this, index)]

            star.addEventListener("mouseenter", fillHandler)
            star.addEventListener("mouseleave", emptyHandler)

            star.addEventListener("click", () => {
                fillHandler();
                this.#interactive = false;
                this.#renderResult(index)
                this.#selectedRating = index
            })
        })
    }
}

export default new StarsView()