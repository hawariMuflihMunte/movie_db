import "../components/nav-search";

function main() {
    const apiKey = "30d1ab19";
    const baseUrl = `http://omdbapi.com/?apikey=${apiKey}&`;
    const _search = document.querySelector("nav-search");

    const _movie = [];

    const search = (keyword) => {
        return fetch(`${baseUrl}&s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson);
            }
            else {
                return Promise.reject(`${keyword} tidak ditemukan`);
            }
        });
    };

    const renderResult = (obj) => {
        const movieContainer = document.getElementById("list-item");
        movieContainer.innerHTML = "";

        for (const m of obj) {
            const _list = document.createElement("div");
            _list.innerHTML = `
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="${m.Poster}" alt="${m.Title}'s poster" width="1800" height="1200">
                    </div>
                    <div class="uk-card-body">
                        <h2 class="uk-card-title uk-margin-remove">${m.Title}</h2>
                        <h4 class="uk-text-muted uk-margin-remove">${m.Year}</h4>
                        <h5 class="uk-text-muted uk-margin-remove uk-margin-small-bottom uk-text-right uk-text-uppercase">${m.Type}</h5>
                        <hr>
                        <div class="uk-flex uk-flex-center">
                            <button class="uk-button uk-button-primary">details</button>
                        </div>
                    </div>
                </div>
            `;

            movieContainer.appendChild(_list);
        }
    }

    const searchResult = async () => {
        try {
            const keyword = _search.value;
            const result = await search(keyword);

            renderResult(result.Search);
            console.log(result.Search[0]);
        } catch (error) {
            window.alert(error);
        }
    };

    _search.click = searchResult;
}

export default main;