import axios from 'axios'

const API_KEY = 'AIzaSyDvr9bORQ1y7jPmPCs3TpCQySFYARmmj4U'

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'

const PART_SNIPPET = 'snippet'
const TYPE_VIDEO = 'video'

const searchVideosByKeyword = async keyword => {
    return getRequestWithParams(SEARCH_URL, { 
        key: API_KEY, 
        q: keyword,
        type: TYPE_VIDEO,
        part: PART_SNIPPET
    })
}

const getVideoById = async id => {
    return getRequestWithParams(VIDEOS_URL, {
        key: API_KEY,
        id: id,
        part: PART_SNIPPET
    })
}

async function getRequestWithParams(url, params) {
    try {
        const response = await axios.get(url, { params: params })
        return response.data
    }
    catch (e) {
        console.error(e)
        throw e
    }
}

export default {
    searchVideosByKeyword,
    getVideoById
}