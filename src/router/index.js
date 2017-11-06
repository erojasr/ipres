import Vue from 'vue'
import Router from 'vue-router'


// Balance Module
import Balance from '@/components/Balance/Balance'


// Automatic Module
import Automatic from '@/components/Automatic/Automatic'

// Cards Module
import Cards from '@/components/Cards/Cards'

// Configuration Module
import Configuration from '@/components/Configuration/Configuration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Balance',
      component: Balance
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/automatic',
      name: 'Automatic',
      component: Automatic
    },
    {
      path: '/configuration',
      name: 'Configuration',
      component: Configuration
    }
  ],
  mode: 'history'
})
