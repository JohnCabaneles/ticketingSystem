<script setup lang="ts">
import axios from 'axios'
   
   const signOut = async () => {
     try {
       await axios.post('/logout', null, {
         withCredentials: true,
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
            >Dashboard
          </router-link>
          <router-link
            to="/admin/status"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            >Status
          </router-link>
          <router-link
            to="/admin/priority"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            >Priority
          </router-link>
          <router-link
            to="/admin/department"
            class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600"
            >Departments
          </router-link>
          <router-link
            to="/" custom v-slot="{href, navigate}" @click="signOut"> 
            <li>
              <a :href="href" @click="navigate" class="inline-flex relative items-center py-[10px] px-[10px] my-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-600">Logout
              </a>
            </li>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
