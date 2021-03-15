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

const handleSearchVideos = (keyword) => {

  youtubeApi.getVideos(keyword)
  .then((res) => {
    //создание карточки
    const createCardFunction = (data) => {
      const card = new Card({data,
        handleTitleClick: () => {
          card._setEventListeners()
        },
      }, '.cards__template')
      const element = card.generateCard()
      cardsList.addItem(element)
    }
    //создание экземпляра класса для отрисовки карточек на странице
    const cardsList = new Section ({
      items: res.items,
      renderer: (data => {
      createCardFunction(data)
      })
    }, elementsList)
     cardsList.renderItems()
    })
  .catch((err) => console.log(err))
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const keyword = input.value
  handleSearchVideos(keyword)
  keywordElem.textContent = keyword
})
