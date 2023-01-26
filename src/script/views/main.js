import "../components/nav-search";

function main() {
    const apiKey = "30d1ab19";
    const baseUrl = `http://omdbapi.com/?apikey=${apiKey}&`;
    const _search = document.querySelector("nav-search");

    const search = (keyword) => {
        return fetch(`${baseUrl}s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                }

                return Promise.reject(`${keyword} tidak ditemukan`);
            });
    };

    const getDetails = (id) => {
        return fetch(`${baseUrl}i=${id}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                }

                return Promise.reject(`${keyword} tidak ditemukan`);
            })
            .then(json => {
                return json;
            });
    };

    const renderResult = async (obj) => {
        const movieContainer = document.getElementById("list-item");
        movieContainer.innerHTML = "";

        for (const m of obj) {
            const _list = document.createElement("div");
            const _details = document.createElement("div");

            _details.id = m.imdbID;
            _details.setAttribute("uk-modal", "");

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
                            <button class="uk-button uk-button-primary" uk-toggle="target: #${m.imdbID}">details</button>
                        </div>
                    </div>
                </div>
            `;

            try {

                const _detail = await getDetails(m.imdbID);

                // Debugging purposes only
                // console.log(_detail);

                _details.innerHTML = `
                    <div class="uk-modal-dialog">
                        <div class="uk-modal-header">
                            <h4 class="uk-modal-title">Details</h3>
                        </div>
                        <div class="uk-modal-body">
                            <ul class="uk-list uk-list-striped">
                                <li class="uk-flex uk-flex-between"><span>Title</span>${_detail.Title}</li>
                                <li class="uk-flex uk-flex-between"><span>Year</span>${_detail.Year}</li>
                                <li class="uk-flex uk-flex-between"><span>Rated</span>${_detail.Rated}</li>
                                <li class="uk-flex uk-flex-between"><span>Released</span>${_detail.Released}</li>
                                <li class="uk-flex uk-flex-between"><span>Runtime</span>${_detail.Runtime}</li>
                                <li class="uk-flex uk-flex-between"><span>Genre</span>${_detail.Genre}</li>
                                <li class="uk-flex uk-flex-between"><span>Director</span>${_detail.Director}</li>
                                <li class="uk-flex uk-flex-between"><span>Writer</span>${_detail.Writer}</li>
                                <li class="uk-flex uk-flex-between"><span>Actors</span>${_detail.Actors}</li>
                                <li class="uk-flex uk-flex-between"><span>Language</span>${_detail.Language}</li>
                                <li class="uk-flex uk-flex-between"><span>Country</span>${_detail.Country}</li>
                                <li class="uk-flex uk-flex-between"><span>Awards</span>${_detail.Awards}</li>
                                <li class="uk-flex uk-flex-between"><span>Metascore</span>${_detail.Metascore}</li>
                                <li class="uk-flex uk-flex-between"><span>imdbRating</span>${_detail.imdbRating}</li>
                                <li class="uk-flex uk-flex-between"><span>Type</span>${_detail.Type.toUpperCase()}</li>
                                <li class="uk-flex uk-flex-between"><span>totalSeasons</span>${_detail.totalSeasons === undefined ? "N/A" : _detail.totalSeasons}</li>
                            </ul>
                            <textarea class="uk-textarea" disabled>${_detail.Plot}</textarea>
                        </div>
                        <div class="uk-modal-footer">
                            <button class="uk-button uk-button-primary uk-modal-close" type="button">OK</button>
                        </div>
                    </div>
                `;
            } catch (error) {
                window.alert(error);
            }

            movieContainer.appendChild(_list);
            movieContainer.appendChild(_details);
        }
    }

    const searchResult = async () => {
        try {
            const keyword = _search.value;
            const result = await search(keyword);

            renderResult(result.Search);

            // Debugging purposes only
            // console.log(result.Search);
        } catch (error) {
            window.alert(error);
        }
    };

    _search.click = searchResult;
}

export default main;