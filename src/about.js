const description = "All of our menu items are inspired by French cuisine and have been created by our head chef, Pierre, after studying authentic French cuisine in Paris. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from."

const about = () => {
  const content = document.createElement('div')
  content.classList.add('content')
  content.innerText = description
  return content
}

export default about