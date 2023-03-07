import './style.less'
import './icons.less'

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
