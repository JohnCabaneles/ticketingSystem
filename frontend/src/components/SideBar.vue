<script setup lang="ts">
import {
  ArrowLeftStartOnRectangleIcon,
  ChevronRightIcon,
  Squares2X2Icon
} from '@heroicons/vue/24/outline'
import axios from 'axios'

const signOut = async () => {
  try {
    await axios.post('/logout', null, {
      withCredentials: true
    })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <!-- Side Bar -->
  <div class="w-[400px] h-full bg-gray-200 text-white">
    <div class="h-[50px] bg-gray-900 flex justify-start items-center">
      <div class="px-[20px]">
        <h3 class="fontbold text-xl">Admin Dashboard</h3>
      </div>
    </div>
    <div class="h-[calc(100vh)] bg-gray-800">
      <div class="px-[20px] flex flex-col space-y-[10px]">
        <div class="h-auto">
          <router-link
            to="/admin/dashboard"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            ><Squares2X2Icon class="w-5 h-5 mr-2" />Dashboard
          </router-link>
          <router-link
            to="/admin/status"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            ><ChevronRightIcon class="w-5 h-5 mr-2" />Status
          </router-link>
          <router-link
            to="/admin/priority"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            ><ChevronRightIcon class="w-5 h-5 mr-2" />Priority
          </router-link>
          <router-link
            to="/admin/department"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            ><ChevronRightIcon class="w-5 h-5 mr-2" />Departments
          </router-link>
          <router-link
            to="/admin/roles"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            ><ChevronRightIcon class="w-5 h-5 mr-2" />Roles
          </router-link>
          <router-link
            to="/" custom v-slot="{href, navigate}" @click="signOut"> 
              <a :href="href" @click="navigate" class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600">
                <ArrowLeftStartOnRectangleIcon class="w-5 h-5 mr-2" />Logout
              </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
