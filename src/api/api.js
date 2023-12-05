import axios from 'axios'
let api = 'https://63774d1681a568fc251194af.mockapi.io/changer'
let instance = axios.create({
    baseURL: api
})

export let coinApi = {
    getCoins() {
        return instance.get().then(res => res.data)
    }
}
