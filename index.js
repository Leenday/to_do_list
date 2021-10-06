
if (localStorage.getItem('cards_storage') === null) {
  localStorage.setItem('cards_storage', JSON.stringify([]))
}

const getTemplateItem = ({title, description, location, id, done}) => {
  return `<p>Название: ${title}</p>
  <p>Описание: ${description}</p>
  <p>Место: ${location}</p>
  <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleCardStatus(${id})">
  <button type="button" onclick="deleteFromStorage(${id})">Удалить</button>`;
}

const handleAddButton = (event) => {
  // adding elements values to variables and save state
  const card = fetchCardValues()
  pushCardToLocalStorage(card)
  renderItem(card)
  event.stopPropagation()
}

const toggleCardStatus = (cardId) => {
  let parsedCardsStorage = JSON.parse(localStorage.cards_storage)
  parsedCardsStorage.forEach(card => card.id === cardId ? card.done = !card.done : card)
  localStorage.setItem('cards_storage', JSON.stringify(parsedCardsStorage))
  location.reload()
}

const fetchCardValues = () => {
  const title = document.getElementsByName('title')[0].value
  const description = document.getElementsByName('description')[0].value
  const location = document.getElementsByName('location')[0]
  const selectedLocationText = location.options[location.selectedIndex].text
  const cardData = {
    id: Date.now(),
    title: title,
    description: description,
    location: selectedLocationText,
    done: false
  }
  return cardData
}

const deleteFromStorage = (cardId) => {
  let parsedCardsStorage = JSON.parse(localStorage.cards_storage)
  const refreshedCardsStorage = parsedCardsStorage.filter(card => card.id !== cardId)
  localStorage.setItem('cards_storage', JSON.stringify(refreshedCardsStorage))
  location.reload()
}

const pushCardToLocalStorage = (card) => {
  // need to parse localStorage first
  let parsedCardsStorage = JSON.parse(localStorage.cards_storage)
  parsedCardsStorage.push(card)
  // then set new values
  localStorage.setItem('cards_storage', JSON.stringify(parsedCardsStorage))
}

const renderItems = () => {
  cards = JSON.parse(localStorage.cards_storage)
  cards.forEach(card => renderItem(card))
}

const renderItem = (card) => {
  const div = document.createElement('div')
  div.innerHTML= getTemplateItem(card)
  document.body.append(div)
}

document.addEventListener("DOMContentLoaded", renderItems());
