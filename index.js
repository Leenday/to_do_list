
if (localStorage.length === 0) {
  localStorage.setItem('cards_storage', JSON.stringify([]))
}

const getTemplateItem = (title, description) => {
  return `<p>Название:${title}</p><p>Описание:${description}</p>`;
}

const handleAddButton = (event) => {
  console.log(localStorage)
  // adding elements values to variables and save state
  const title = document.getElementsByName('title')[0].value
  const description = document.getElementsByName('description')[0].value
  const cardData = {
    id: Date.now(),
    title: title,
    description: description,
    done: false
  }
  // need to parse localStorage first
  let parsedCardsStorage = JSON.parse(localStorage.cards_storage)
  parsedCardsStorage.push(cardData)
  // then set new values
  localStorage.setItem('cards_storage', JSON.stringify(parsedCardsStorage))
  renderItem(cardData)
  event.stopPropagation()
}

const renderItems = () => {
  cards = JSON.parse(localStorage.cards_storage)
  cards.forEach(card => {
    renderItem(card)
  })
}

const renderItem = (card) => {
  const div = document.createElement('div')
  div.innerHTML= getTemplateItem(card.title, card.description)
  document.body.append(div)
}

document.addEventListener("DOMContentLoaded", renderItems());
