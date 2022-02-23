const STAR_ICON_EMPTY = "bi-star";
const STAR_ICON_FILL = "bi-star-fill";

class StarsView {
    #container = document.querySelector("#starCn")
    #stars = Array.from(this.#container.querySelectorAll(".bi"))
    #containerResult = document.querySelector("h2")
    #interactive = true

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
    }

    #renderResult(r) {
        this.#containerResult.innerHTML = ""
        this.#containerResult.innerText = +r + 1
    }

    init() {
        this.#stars.forEach(star => {
            const { index } = star.dataset;
            const [fillHandler, emptyHandler] = [this.#fillStars.bind(this, index), this.#emptyStars.bind(this, index)]
            star.addEventListener("mouseenter", fillHandler)
            star.addEventListener("mouseleave", emptyHandler)

            star.addEventListener("click", () => {
                fillHandler();
                this.#interactive = false;
                this.#renderResult(index)
            })
        })
    }
}

new StarsView().init()