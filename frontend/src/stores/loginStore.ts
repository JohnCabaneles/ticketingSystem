import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

export interface Login {
    email: string;
    password: string;
}

export const useLoginStore = defineStore('loginStore', {
    state: () => ({
        users: <Login[]>[]
    }),
    actions: {
        async getToken() {
            try {
                await axios.get('/sanctum/csrf-cookie')
            } catch (error) {
                console.error('Error getting token', error)
            }
        },

        async handleLogin(options: { email: string; password: string; onSuccess?: () => void}) {
            try {
                await this.getToken()
                const response = await axios.post('/login', {
                    email: options.email,
                    password: options.password
                })

                if (options.onSuccess) {
                    options.onSuccess()
                }

                console.log('success', response.data)
                router.push('/admin/dashboard')
            } catch (error) {
                console.error('Invalid credentials', error)
            }
        }
    }
})