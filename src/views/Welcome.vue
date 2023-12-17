<template>
    <div class="welcome container">
        <p>Welcome</p>
        <div v-if="showLogin">
            <h2>Login</h2>
            <LoginFrom @login="enterChat"/>
            <p>No account yet? 
                <span @click="showLogin = false">
                    Signup
                </span>
            </p>
        </div>
        <div v-else>
            <h2>Sign Up</h2>
            <SignupForm @signup="enterChat"/>
            <p>Already registered ?
                <span @click="showLogin = true">
                    Login
                </span>
            </p>
        </div>
    </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import LoginFrom from '@/components/LoginForm.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default{
    components: {SignupForm, LoginFrom},

    setup(){
        const showLogin = ref(true)
        const router = useRouter()

        function enterChat(){
            router.push({ name: "Chatroom" })
        }

        return { showLogin, enterChat }
    }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }

    .welcome form {
        width: 300px;
        margin: 20px auto;
    }

    .welcome label {
        display: block;
        margin: 20px auto;
    }

    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        color: #999;
        margin: 10px auto;
    }

    .welcome span {
        cursor: pointer;
        font-weight: bold;
        text-decoration: underline;
    }

    .welcome button {
        margin: 20px auto;
    }
</style>