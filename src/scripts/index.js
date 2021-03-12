import { YoutubeApi } from './YoutubeApi.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { searchButton, elementsList, input } from './constants.js';

//создание экземпляра класса YoutubeApi
export const youtubeApi = new YoutubeApi ({
  baseUrl: 'https://www.googleapis.com/youtube/v3/search',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const renderCard = (item) => {
  const card = new Card(item, '.elements__template')
  const element = card.generateCard()
  elementsList.prepend(element)
}

const handleSearchVideos = (keyword) => {
  youtubeApi.getVideos(keyword)
  .then((res) => {
    res.items.forEach(item => {
      renderCard(item)
    })
  })
}
searchButton.addEventListener('submit', (e) => {
    e.preventDefault()
    const keyword = input.value
    handleSearchVideos(keyword)
  })


// const handleSearchVideos = (keyword) => {
//   youtubeApi.getVideos(keyword)
//   .then((res) => {
//     console.log(res)
//     //создание карточки
//     const createCardFunction = (data) => {
//       const card = new Card({data,
//         // handleCardClick: () => {
//         //   popupWithImage.open(data)
//         // },
//       }, '.elements__template')
//       const element = card.generateCard()
//       cardsList.addItem(element)
//     }

//     //создание экземпляра класса для отрисовки карточек на странице
//     const cardsList = new Section ({
//       items: res.items,
//       renderer: (data => {
//       createCardFunction(data)
//       })
//     }, elementsList)
//       return cardList
//     })
//   .then((res) => {
//     const { cardsList } = res
//     cardsList.renderItems()
//   })
//   .catch((err) => console.log(err))
// }

// searchButton.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const keyword = input.value
//   handleSearchVideos(keyword)
// })
