class NavSearch extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set click(event) {
        this._click = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search-input").value;
    }

    render() {
        this.innerHTML = `
            <nav id="search-nav" class="uk-padding-small uk-background-primary uk-margin-small-bottom">
                <div class="uk-container uk-flex">
                    <input
                        type="search"
                        id="search-input"
                        class="uk-input"
                        placeholder="Cari judul film ...">
                    <button
                        type="button"
                        id="search-input-button"
                        class="uk-button uk-button-secondary">
                            <i class="bi bi-search"></i>
                    </button>
                </div>
            </nav>
        `;

        this.querySelector("#search-input-button").addEventListener("click", this._click);
    }
}

customElements.define("nav-search", NavSearch);