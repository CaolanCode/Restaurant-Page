import header from './header'
import './styles/style.css'
import aboutContent from './about'

const container = document.createElement('div')
container.classList.add('container')

const imageContainer = document.createElement('div')
imageContainer.classList.add('image-container')

const tabContainer = document.createElement('div')
tabContainer.classList.add('tab-container')
// tabContainer.appendChild(aboutContent())
const aboutTab = document.createElement('div')
aboutTab.classList.add('single-tab')
aboutTab.innerText = 'About'
const menuTab = document.createElement('div')
menuTab.classList.add('single-tab')
menuTab.classList.add('middle-tab')
menuTab.innerText = 'Menu'
const contactTab = document.createElement('div')
contactTab.classList.add('single-tab')
contactTab.innerText = 'Contact'


container.appendChild(header())

tabContainer.appendChild(aboutTab)
tabContainer.appendChild(menuTab)
tabContainer.appendChild(contactTab)
imageContainer.appendChild(tabContainer)
container.appendChild(imageContainer)

document.body.appendChild(container)
