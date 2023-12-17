import { ref } from "vue"
import { auth, createUserWithEmailAndPassword, updateProfile} from '@/firebase/config';

const error = ref(null)

const signUp = async (email, password, displayName) => {
    error.value = null

    const res = await createUserWithEmailAndPassword(auth, email, password)
    .catch((err) => {
        switch (err.code) {
        case 'auth/email-already-in-use':
            error.value = 'Account asociated with that e-mail already exists'
            break
        case 'auth/invalid-email':
            error.value = 'Invalid e-mail addres'
            break
        case 'auth/operation-not-allowed':
            error.value = 'Operation not allowed'
            break
        case 'auth/weak-password':
            error.value = "Password needs to be at least 6 characters long"
            break
        default:
            error.value = 'Could not complete the signup'
            break
        }
    });  

    await updateProfile(auth.currentUser, {
        displayName: displayName
    })

    return res
}

const useSignUp = () => {

    return { error, signUp }
}

export default useSignUp