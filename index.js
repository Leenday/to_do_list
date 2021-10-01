
localStorage.setItem('cards_counter', 0)
localStorage.setItem('cards_storage', JSON.stringify([]))

const getTemplateItem = (title, description) => {
  return `<p>${title}</p><p>${description}</p>`;
}

const handleAddButton = (event) => {
  // adding elements values to variables and save state
  const title = document.getElementsByName('title')[0].value
  const description = document.getElementsByName('description')[0].value
  const cardData = {
    id: localStorage.cards_counter,
    title: title,
    description: description,
    done: false
  }
  // need to parse localStorage first
  let parsedCardsStorage = JSON.parse(localStorage.cards_storage)
  let parsedCardsCounter = JSON.parse(localStorage.cards_counter)
  parsedCardsStorage.push(cardData)
  // then set new values
  localStorage.setItem('cards_storage', JSON.stringify(parsedCardsStorage))
  parsedCardsCounter += 1
  localStorage.setItem('cards_counter', JSON.stringify(parsedCardsCounter))
  renderItems()
  event.stopPropagation()
}

const renderItems = () => {
  // find element and render item
  cards = JSON.parse(localStorage.cards_storage)
  cards.forEach(card => {
    renderItem(card)
  })
}

const renderItem = (card) => {
  const div = document.createElement('div')
  div.textContent = getTemplateItem(card.title, card.description)
  document.body.append(div)
}
