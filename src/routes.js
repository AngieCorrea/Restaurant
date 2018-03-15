import Home from './components/Home'
import Promociones from './components/Promociones'
import Soporte from './components/Soporte'
import Sesion from './components/Sesion'

export const routes = [
  {
    path: '/',
    component: Home,
  },

  {
    path: '/promociones',
    component: Promociones,
  },
  {
    path: '/soporte',
    component: Soporte,
  },
  {
    path: '/sesion',
    component: Sesion,
  }

]