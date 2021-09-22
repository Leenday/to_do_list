
const getTemplate = () => {
  const formElements = document.forms[0].elements
  const title = formElements["title"].value
  const description = formElements["description"].value
  return `<h1>${title}</h1>`
}

