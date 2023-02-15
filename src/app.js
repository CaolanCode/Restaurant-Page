import header from './header'
import './styles/style.css'

const container = document.createElement('div')
container.classList.add('container')

const imageContainer = document.createElement('div')
imageContainer.classList.add('image-container')

const tabContainer = document.createElement('div')
tabContainer.classList.add('tab-container')

container.appendChild(header())

imageContainer.appendChild(tabContainer)
container.appendChild(imageContainer)

document.body.appendChild(container)