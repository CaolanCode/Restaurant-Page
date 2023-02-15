import header from './header'
import './styles/style.css'
import aboutContent from './about'
import menu from './menu'
import contact from './contact'

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

function addContent(element, foo) {
  if(element.classList.contains('active-tab')) {
    removeActiveClass()
    return
  }
  removeActiveClass()
  element.classList.add('active-tab')
  element.appendChild(foo)
}

// listeners
aboutTab.addEventListener('click', function() {
  addContent(aboutTab, aboutContent())
})
menuTab.addEventListener('click', function() {
  addContent(menuTab, menu())
})
contactTab.addEventListener('click', function() {
  addContent(contactTab, contact())
})