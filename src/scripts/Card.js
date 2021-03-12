export class Card {
  constructor({ data }, elementsTemplate) {
    this._link = data.snippet.thumbnails.default.url
    this._title = data.snippet.title
    this._author = data.snippet.channelTitle
    this._date = data.snippet.publishedAt
    this._videoId = data.id.videoId
    this._elementsTemplate = elementsTemplate
    // this._handleCardClick = handleCardClick
  }

  _getTemplate () {
    const cardElement = document.querySelector(this._elementsTemplate).content.querySelector('.card').cloneNode(true)
    return cardElement
  }

  generateCard () {
    this._element = this._getTemplate()
    // this._setEventListeners()

    this._element.querySelector('.card__title').textContent = this._title
    this._element.querySelector('.card__image').src = this._link
    this._element.querySelector('.card__subtitle').textContent = this._author
    this._element.querySelector('.card__date').textContent = this._date

    return this._element
  }

  // _setEventListeners () {
  //   this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick(this._name, this._link))
  // }
}
