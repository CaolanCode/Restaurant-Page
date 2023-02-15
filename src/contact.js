const details = "Per Henrik Lings Allé 4,\n8 DK-2100,\nCopenhagen,\nDenmark\n+45 69 96 00 20"

const contact = () => {
  const content = document.createElement('div')
  content.classList.add('content')
  content.innerText = details
  return content
}

export default contact