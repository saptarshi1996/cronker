import Vue from 'vue'
import VueNotification from '@mathieustan/vue-notification'

Vue.use(VueNotification, {
  theme: {
    colors: {
      success: '#54d861',
      darkenSuccess: '#2d8e36',
      info: '#5d6a89',
      darkenInfo: '#535f7b',
      warning: '#f8a623',
      darkenWarning: '#f69a07',
      error: '#ff4577',
      darkenError: '#ff245f',
      offline: '#ff4577',
      darkenOffline: '#ff245f'
    },
    boxShadow: '10px 5px 5px red'
  },
  breakpoints: {
    0: {
      bottom: true
    },
    480: {
      top: true,
      right: true
    }
  }
})
