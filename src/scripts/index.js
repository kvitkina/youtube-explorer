import { YoutubeApi } from './YoutubeApi.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { searchForm, elementsList, input, keywordElem } from './constants.js';

//создание экземпляра класса YoutubeApi
export const youtubeApi = new YoutubeApi ({
  baseUrl: 'https://www.googleapis.com/youtube/v3/search',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

//создание карточки
const createCardFunction = (data) => {
  const card = new Card({data,
  }, '.cards__template')
  const element = card.generateCard()
  cardsList.addItem(element)
}

//создание экземпляра класса для отрисовки карточек на странице
const cardsList = new Section ({
  renderer: (data => {
  createCardFunction(data)
  })
}, elementsList)

const handleSearchVideos = (keyword) => {
  youtubeApi.getVideos(keyword)
  .then((res) => {
    cardsList.emptyContainer()
    cardsList.renderItems(res.items)
    })
  .catch((err) => console.log(err))
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const keyword = input.value
  handleSearchVideos(keyword)
  keywordElem.textContent = keyword
})
