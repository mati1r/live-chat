import { db, collection, addDoc } from '@/firebase/config';
import { ref } from 'vue';

function useCollection(collectionName){
    const error = ref(null)

    async function addToDoc(doc){
        error.value = null

        try
        {
            addDoc(collection (db, collectionName), doc)
        }
        catch(err)
        {
            console.log(err.message)
            error.value = "Could not send the message"
        }
    }

    return { error, addToDoc }
}

export default useCollection