<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { useAddUserStore } from '@/stores/addUserStore'
import { storeToRefs } from 'pinia'

const addUserStore = useAddUserStore()
const { totalCount } = storeToRefs(addUserStore)

addUserStore.getAddUser()

</script>

<template>
    <div class="flex flex-col col-span-full sm:col-span-4 xl:col-span-4 bg-white shadow-lg rounded-lg border border-slate-200">
        <router-link to="#"> <!-- add the link for all user user -->
            <div class="px-5 py-5">
                
                  <div class="flex justify-end mb-2 -mr-6 -mt-6 ">
                    <ArrowTopRightOnSquareIcon class="w-5 h-5 self-end" />
                  </div>
                  <div class="flex justify-between items-start">
                    <h2 class="text-xl font-bold text-slate-800 mb-2">User</h2>
                    <div class="text-xl font-bold text-slate-800 mr-2">{{ totalCount }}</div>
                  </div>
                  <hr class="h-px bg-gray-500 w-44">
            </div>
        </router-link>
    </div>
</template>