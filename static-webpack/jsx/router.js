import Home from './home';
import About from './about';
import Repos from './repos';
import Detail from './detail';

var router = [
  {
    path : '/repos',
    link : 'repos',
    active : true,
    component : Repos
  },
  {
    path : '/about',
    link : 'about',
    active : true,
    component : About
  },
  {
    path : '/detail/:id',
    link : 'detail',
    noshow : true,
    component : Detail
  }
];

export default router;