import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-myamazomclone.cloudfunctions.net/api'
    //'http://localhost:5001/myamazomclone/us-central1/api'
});


export default instance;