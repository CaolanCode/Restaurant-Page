import header from './header'
import './styles/style.css'

const container = document.createElement('div')
container.classList.add('container')
const imageContainer = document.createElement('div')
imageContainer.classList.add('image-container')

container.appendChild(header())
container.appendChild(imageContainer)
document.body.appendChild(container)