class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="uk-navbar-container uk-padding-remove" uk-navbar>
                <div class="uk-navbar-left uk-padding uk-padding-remove-top uk-padding-remove-bottom">
                    <ul class="uk-navbar-nav">
                        <li>
                            <a href=""><i class="bi bi-house-door"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="uk-navbar-right uk-padding uk-padding-remove-top uk-padding-remove-bottom">
                    <ul class="uk-navbar-nav">
                        <li>
                            <i class="bi bi-film"></i> Movie DB <i class="bi bi-film"></i>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);