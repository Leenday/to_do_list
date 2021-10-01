
const CARDS_STORAGE = []

const getTemplateItem = (title, description) => {
  return `<p>${title}</p><p>${description}</p>`;
}

const handleAddButton = (event) => {
  // adding elements values to variables and save state
  const title = document.getElementsByName('title')[0].value
  const description = document.getElementsByName('description')[0].value
  const cardData = {
    id: CARDS_STORAGE.length,
    title: title,
    description: description,
    done: false
  }
  CARDS_STORAGE.push(cardData)
  event.stopPropagation();
}

const renderItem = () => {
  // find element and render item
  CARDS_STORAGE.forEach(card => {
    const div = document.createElement('div')
    div.textContent = getTemplateItem(card.title, card.description)
    document.body.append(div)
  })
}
