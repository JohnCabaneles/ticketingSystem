<script setup lang="ts">
import { useLoginStore } from '@/stores/loginStore'
import {
  ArrowLeftStartOnRectangleIcon,
  ChevronRightIcon,
  Squares2X2Icon
} from '@heroicons/vue/24/outline'
import axios from 'axios'

const loginStore = useLoginStore()

const signOut = async () => {
  try {
    await loginStore.logout()
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <!-- Side Bar -->
  <div class="w-[400px] h-full bg-gray-200 text-white">
    <div class="h-[50px] bg-gray-900 flex justify-start items-center">
      <div class="px-[20px]">
        <h3 class="fontbold text-xl">User Dashboard</h3>
      </div>
    </div>
    <div class="h-[calc(100vh)] bg-gray-800">
      <div class="px-[20px] flex flex-col space-y-[10px]">
        <div class="h-auto">
          <a
            href="http://localhost:8000/chatify"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
          >
            <ChevronRightIcon class="w-5 h-5 mr-2" />Chat
          </a>
          <router-link
            to="/user/create/ticket"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            ><ChevronRightIcon class="w-5 h-5 mr-2" />Create Ticket
          </router-link>
          <router-link
            class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
            to="/"
            @click="signOut"
            >Sign Out</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
