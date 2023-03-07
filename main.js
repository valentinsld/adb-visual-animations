import './style.less'
import './icons.less'

const container = document.querySelector('#container')
const grid = document.querySelector('#grid')

const modules = import.meta.glob('./svg/*.svg', {
  as: 'raw',
  eager: true,
});

for (const svg in modules) {
  if (Object.hasOwnProperty.call(modules, svg)) {
    const element = modules[svg];
    
    grid.innerHTML += element
  }
}

//
// animations
//
const CLASS_ANIMATION = "launch-animation"
setInterval(() => {
  container.classList.remove(CLASS_ANIMATION)
  setTimeout(() => {
    container.classList.add(CLASS_ANIMATION)
  }, 100)
}, 1000)
