import '../components/nav-search';

const api_key = '30d1ab19';
const base_url = `http://omdbapi.com/?apikey=${api_key}&`;

function main() {
    const get_movie_by_search = (search_method, keyword) => {
        return fetch(`${base_url}&${search_method}=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(response_json => {
                if (response_json.Search) {
                    return Promise.resolve(response_json.Search);
                }
                else {
                    return Promise.reject(`${keyword} tidak ditemukan`);
                }
            })
    }

    const search_movie = async() => {
        const value = document.querySelector('nav-search');

        try {
            const result = await get_movie(value);

        } catch (error) {

        }
    }
}