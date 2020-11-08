import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Intro from '@/views/Intro'
import Question from '@/views/Question'
import Result from '@/views/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})