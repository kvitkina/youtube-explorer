import { API_KEY } from './constants.js';

export class YoutubeApi {
  constructor ({ baseUrl, headers}) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  _handleOriginalResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`)
  }

  getVideos (keyword) {
    return fetch(`${this.baseUrl}?part=snippet&maxResults=10&order=rating&q=${keyword}&type=video&key=${API_KEY}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse)
  }
}


