import { atom } from 'jotai';

interface SignupState {
    name: string;
    age: string;
    foodPreference: string;
    travelPreference: string;
    username: string;
    password: string;
}

export const signupAtom = atom<SignupState>({
    name: '',
    age: '',
    foodPreference: '',
    travelPreference: '',
    username: '',
    password: '',
});
