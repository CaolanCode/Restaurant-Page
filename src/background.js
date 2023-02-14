import foodImage from './images/food.jpg'

const background = () => {
  const img = document.createElement('img')
  img.src = foodImage
  img.classList.add('bg-image')
  return img
}

export default background