import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth, onAuthStateChanged } from '@/firebase/config';

import './assets/main.css'

let app

//Await for user data from firebase
onAuthStateChanged(auth, ()=>{
    if(!app){
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
})

