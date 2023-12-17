<template>
    <div class="container">
        <Navbar/>
        <ChatWindow/>
        <NewChatFrom/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NewChatFrom from '@/components/NewChatFrom.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default{
    components: {Navbar, NewChatFrom, ChatWindow},
    setup(){
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if(!user.value){
                router.push({ name: 'Welcome' })
            }
        })
    }
}
</script>

<style>

</style>