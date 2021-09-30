
const getTemplateItem = (title, description) => {
  return `<p>${title}</p><p>${description}</p>`;
}

const handleAddButton = (title, description) => {
  // adding elements values to variables and save state
  const cardData = {
    title: title,
    description: description,
    done: false
  }
  CARDS_STORAGE.push(cardData)
}

const renderItem = () => {
  // find element and render item
  CARDS_STORAGE.map(card => {
    const div = document.createElement('div')
    div.textContent = getTemplateItem(card['title'], card['description'])
    document.body.append(div)
  })
}

const CARDS_STORAGE = []
