<script setup lang="ts">
import { ref } from 'vue'
import { useLoginStore } from '@/stores/loginStore'
import Swal from 'sweetalert2'

const loginStore = useLoginStore()
const form = ref({
    email: '',
    password: '',
})

const configureSwal = () => {
    return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
};

const handleLogin = async () => {
    try {
        await loginStore.handleLogin({
            email: form.value.email,
            password: form.value.password,
            onSuccess: () => {
                const Toast = configureSwal()
                Toast.fire({
                    icon: 'success',
                    title: 'Log-in Successfully'
                })
            }
        })
    } catch (error) {
        console.error('Invalid credentials:', error)        
    }
}
</script>

<template>
    <main class="bg-white">
        <div class="relative flex items-center justify-center">
            <!-- Content -->
            <div class="w-full md:w-1/2">
                <div class="min-h-[100dvh] h-full flex flex-col after:flex-1">
                    <div class="flex-1">
                        <div
                            class="flex items-start justify-start h-16 px-4 sm:px-6 lg:px-8"
                        >
                        <!-- Logo goes here -->
                        </div>
                    </div>
    
                    <div class="w-full max-w-sm px-4 py-8 mx-auto border rounded-lg shadow-lg">
                        <h1
                            class="mb-6 text-3xl font-bold text-slate-800"
                        >
                            Welcome back!
                        </h1>
                        <!-- Form -->
                        <form @submit.prevent="handleLogin">
                            <div class="space-y-4">
                                <div>
                                    <label
                                        class="block mb-1 text-sm font-medium"
                                        for="email"
                                        >Email Address</label
                                    >
                                    <input
                                        v-model="form.email"
                                        id="email"
                                        class="w-full form-input border ring-0 rounded-lg shadow-lg py-2 px-3"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block mb-1 text-sm font-medium"
                                        for="password"
                                        >Password</label
                                    >
                                    <input
                                        v-model="form.password"
                                        id="password"
                                        class="w-full form-input border ring-0 rounded-lg shadow-lg py-2 px-3"
                                        type="password"
                                        autoComplete="on"
                                    />
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-6">
                                <div class="mr-1">
                                    <router-link
                                        class="text-sm underline hover:no-underline"
                                        to="/reset-password"
                                        >Forgot Password?</router-link
                                    >
                                </div>
                                <button
                                    type="submit"
                                    class="py-2 px-3 rounded-lg text-white bg-indigo-500 btn hover:bg-indigo-600"
                                    >Sign In</button
                                >
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>