import "../components/nav-search";

function main() {
    const apiKey = "30d1ab19";
    const baseUrl = `http://omdbapi.com/?apikey=${apiKey}&`;
    // const keyword = document.querySelector("nav-search").value;
    const keyword = "cars";

    const _movie = [];
    const movieContainer = document.getElementById("list-item");


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
        })
        .then(json => {
            _movie.push(json);

            // console.log(_movie[0]);

            for (const m of _movie[0].Search) {
                const _list = document.createElement("div");
                _list.innerHTML = `
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="${m.Poster}" alt="${m.Title}'s poster" width="1800" height="1200">
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title"></h3>
                            <ul class="uk-list uk-list-striped">
                                <li class="uk-flex uk-flex-between"><span>Title:</span>${m.Title}</li>
                                <li class="uk-flex uk-flex-between"><span>Year:</span>${m.Year}</li>
                                <li class="uk-flex uk-flex-between"><span>Type:</span>${m.Type}</li>
                            </ul>
                            <div class="uk-flex uk-flex-center">
                                <button class="uk-button uk-button-primary">details</button>
                            </div>
                        </div>
                    </div>
                `;
                movieContainer.appendChild(_list);
            }
        })
        .catch(error => {
            console.log(error);
        });
    
    // fetch("http://omdbapi.com/?apikey=30d1ab19&s=jujutsu")
    // .then(response => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     else {
    //         return Promise.reject({
    //             status: response.status
    //         });
    //     }
    // })
    // .then(json => {
    //     _movie.push(json);
    
    //     console.log(_movie[0].Search);
    
    //     for (const m of _movie[0].Search) {
    //         const _list = document.createElement("div");
    //         _list.innerHTML = `
    //             <div class="uk-card uk-card-default">
    //                 <div class="uk-card-media-top">
    //                     <img src="${m.Poster}" alt="${m.Title}'s poster" width="1800" height="1200">
    //                 </div>
    //                 <div class="uk-card-body">
    //                     <h3 class="uk-card-title">${m.Title}</h3>
    //                     <p>
                            
    //                     </p>
    //                 </div>
    //             </div>
    //         `;
    //         movieContainer.appendChild(_list);
    //     }
    // })
    // .catch(error => {
    //     console.log(error.status);
    // });
}

export default main;