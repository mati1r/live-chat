<template>
    <form>
        <textarea
            placeholder="Type a message and hit enter to send..."
            v-model="message"
            @keypress.enter.prevent="handleSubmit">
        </textarea>
    </form>
    <div class="error"> {{ error }} </div>
</template>

<script>
import getUser from '@/composables/getUser';
import { ref } from 'vue';
import { serverTimestamp } from '../firebase/config';
import useCollection from '@/composables/useCollection';

export default{
    setup(){
        const message = ref("")
        const { user } = getUser()
        const { error, addToDoc } = useCollection("messages")

        async function handleSubmit(){
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: serverTimestamp()
            }

            await addToDoc(chat)

            if(!error.value)
            {
                message.value = ""
            }
        }

        return { message, error, handleSubmit }
    }

}
</script>

<style scoped>

form {
    margin: 10px;
}

textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 16px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;    
}

</style>