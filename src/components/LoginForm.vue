<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <div class="error"> {{ error }}</div>
        <button>Log in</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin'

export default {
    setup(props, context){

        const {error, logIn} = useLogin()

        const email = ref("")
        const password = ref("")

        async function handleSubmit(){
            await logIn(email.value, password.value)

            if(!error.value){
                context.emit("login")
            }
        }

        return { email, password, handleSubmit, error }
    }
}

</script>

<style>

</style>