export class Card {
  constructor({ data }, elementsTemplate) {
    this._title = data.snippet.title
    this._author = data.snippet.channelTitle
    this._date = data.snippet.publishedAt
    this._videoId = data.id.videoId
    this._elementsTemplate = elementsTemplate
  }

  _getTemplate () {
    const cardElement = document.querySelector(this._elementsTemplate).content.querySelector('.card').cloneNode(true)
    return cardElement
  }

  generateCard () {
    const newsDate = new Date(this._date);
    const options = { day: "numeric", month: "long", year: "numeric" };

    this._element = this._getTemplate()
    this._setEventListeners()

    this._element.querySelector('.card__title').textContent = this._title
    this._element.querySelector('.card__subtitle').textContent = this._author
    this._element.querySelector('.card__date').textContent = newsDate.toLocaleDateString('ru', options)
    this._element.querySelector('.card__video').src = `https://www.youtube.com/embed/${this._videoId}`

    return this._element
  }

  _open () {
    this._element.querySelector('.card__iframe').classList.add('card__iframe_active')
  }

  _close () {
    this._element.querySelector('.card__iframe').classList.remove('card__iframe_active')
  }
  _setEventListeners () {
    this._element.querySelector('.card__title').addEventListener('click', () => this._open())
    this._element.querySelector('.card__close-icon').addEventListener('click', () => this._close())
  }
}
