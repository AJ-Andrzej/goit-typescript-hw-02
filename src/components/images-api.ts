import axios from 'axios'
import {Images} from './App/App.types'

axios.defaults.baseURL = "https://api.unsplash.com/search/photos"

interface ApiResponse {
    results: [],
    total_pages: number
}
export const getImages = async (topic:string, currentPage:  number): Promise<ApiResponse> => {
    const {data} = await axios.get<ApiResponse>("", {
        params: {
            query: topic,
            page: currentPage,
            client_id: "p16ARUtdG1Ap--N0GIL5cenjOJ9xzbioT_BuvqU4Gog",
        }
    })
    
    return data
    
}


