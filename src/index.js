import "regenerator-runtime";

// UIkit
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

// Web Components
import "./script/components/nav-bar.js";
import "./script/components/nav-search.js";

// Custom Style
import "./styles/style.css";

// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Simple CSS Columns
import "simple-css-columns/src/simple.css";

// Handler
import "./handler/handler.js";
import renderMovie from "./handler/handler.js";

const _movie = [];

const movieContainer = document.getElementById("list-item");

fetch("http://omdbapi.com/?apikey=30d1ab19&s=jujutsu")
.then(response => {
    if (response.ok) {
        return response.json();
    }
    else {
        return Promise.reject({
            status: response.status
        });
    }
})
.then(json => {
    _movie.push(json);

    // if (_movie.length !== 0) {
    //     renderMovie(_movie);

    //     // movieContainer.appendChild(result);
    // }

    console.log(_movie[0].Search);

    for (const m of _movie[0].Search) {
        const _list = document.createElement("li");
        _list.innerHTML = `<b>id:</b> ${m.Title}<br/> <b>name:</b> ${m.Title}`;
        movieContainer.appendChild(_list);
    }
})
.catch(error => {
    console.log(error.status);
});


    // .then(json => {
    //     const container = document.getElementById('list-item');
    //     container.innerHTML = '';
        
    //     const item = (json) => {
    //         for (const data of json.Search) {
    //             const item = `
    //                 <div class="uk-card uk-card-default uk-grid-collapse uk-margin-small xs=col-12 md=col-4 lg=col-3" uk-grid>
    //                     <div class="uk-card-media-left uk-cover-container">
    //                         <img src="${data.Poster}" alt="${data.Title}" uk-cover>
    //                         <canvas width="600" height="400"></canvas>
    //                     </div>
    //                     <div>
    //                         <div class="uk-card-body">
    //                             <h3 class="uk-card-title">${data.Title}</h3>
    //                             <p>${data.Year}</p>
    //                             <a class="uk-button uk-button-default" href="#${data.imdbID}" uk-toggle>
    //                                 Rincian <i class="bi bi-question-octagon icon-size-default"></i>
    //                             </a>

    //                             <div id="${data.imdbID}" uk-modal>
    //                                 <div class="uk-modal-dialog">
    //                                     <div class="uk-modal-header">
    //                                         <h2 class="uk-modal-title">
    //                                             Rincian
    //                                         </h2>
    //                                     </div>
    //                                     <div class="uk-modal-body">
    //                                         <p></p>
    //                                     </div>
    //                                     <div class="uk-modal-footer uk-text-right">
    //                                         <button class="uk-button uk-button-default uk-modal-close" type="button">OK</button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             `;
    //             return item;
    //         }
    //     };

    //     let item_ = item(json);
    //     container.innerHTML = item_;
    //     console.log(json.Search);
    // }).catch(error => {
    //     console.log(error);
    // });
