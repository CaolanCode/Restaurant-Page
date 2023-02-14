import header from './header'
import './styles/style.css'

const container = document.createElement('div')
container.classList.add('container')

container.appendChild(header())
document.body.appendChild(container)