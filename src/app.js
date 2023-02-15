import header from './header'
import './styles/style.css'
import aboutContent from './about'

const container = document.createElement('div')
container.classList.add('container')

const imageContainer = document.createElement('div')
imageContainer.classList.add('image-container')

const tabContainer = document.createElement('div')
tabContainer.classList.add('tab-container')
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

// functions
function removeActiveClass() {
  const active = document.querySelectorAll('.active-tab')
  active.forEach(tab => {
    tab.querySelectorAll('.content').forEach(el => el.remove())
    tab.classList.remove('active-tab')
  })
}

function addAboutContent() {
  if(aboutTab.classList.contains('active-tab')) return
  aboutTab.classList.add('active-tab')
  aboutTab.appendChild(aboutContent())
}

// listeners
aboutTab.addEventListener('click', addAboutContent)
menuTab.addEventListener('click', removeActiveClass)