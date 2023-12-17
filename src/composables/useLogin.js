import { ref } from "vue"
import { auth, signInWithEmailAndPassword} from '@/firebase/config';

const error = ref(null)

const logIn = async (email, password) => {
    error.value = null

    const res = await signInWithEmailAndPassword(auth, email, password)
    .catch(() => {
        error.value = "Incorrect login credentials"
    });

    return res
}

const useLogIn = () => {

    return { error, logIn }
}

export default useLogIn