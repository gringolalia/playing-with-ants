import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DylanThomas from '@/components/dylan-thomas'
import MartinAmis from '@/components/martin-amis'
import CharlesBronson from '@/components/charles-bronsson'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/martin-amis',
      name: 'Martin Amis',
      component: MartinAmis
    },
    {
      path: '/dylan-thomas',
      name: 'Dylan Thomas',
      component: DylanThomas
    },
    {
      path: '/charles-bronson',
      name: 'Charles Bronson',
      component: CharlesBronson
    }

  ]
})
