import header from './header'
import './styles/style.css'
import background from './background.js';

const container = document.createElement('div')
container.classList.add('container')

container.appendChild(header())
container.appendChild(background())
document.body.appendChild(container)