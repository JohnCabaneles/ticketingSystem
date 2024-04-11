<script setup lang="ts">
import { ref } from 'vue'
import { useStatusStore, type Status } from '@/stores/statusStore'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'

const statusStore = useStatusStore()
const { statuses, totalCount, loading } = storeToRefs(statusStore)
const showUpdateModal = ref(false)
const form = ref<Status>({
    id: 0,
    name: ''
  })

const formUpdate = ref<Status>({
  id: 0,
  name: ''
})

const resetForm = () => {
  form.value.name = ''
}

  statusStore.getStatus()

  const configureSwal = () => {
    return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast: { onmouseenter: any; onmouseleave: any; }) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
  };

  const submitForm = () => {
    if (form.value.name.length > 0) {
      statusStore.addStatus(form.value).then(() => {
        const Toast = configureSwal()
        Toast.fire({
          icon: 'success',
          title: 'Status added successfully'
        })
      })
      resetForm()
    } else {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'error',
        title: 'Adding status failed'
      })
    }
  }
  
  const openUpdateModal = (status: Status) => {
    formUpdate.value = { ...status }
    showUpdateModal.value = true
  }

  const updateForm = () => {
    try {
      statusStore.updateStatus(formUpdate.value.id, formUpdate.value).then(() => {
        const Toast = configureSwal()
        Toast.fire({
          icon: 'success',
          title: 'Status updated successfully'
        })
      })
      showUpdateModal.value = false
    } catch (error) {
      console.error('Error updating status', error)
      const Toast = configureSwal()
      Toast.fire({
        icon: 'error',
        title: 'Error updating status'
      })
    }
  }

  const deleteStatus = (id: number) => {
    try {
      statusStore.deleteStatus(id).then(() => {
        const Toast = configureSwal()
        Toast.fire({
          icon: 'success',
          title: 'Status deleted successfully'
        })
      })
    } catch (error) {
      console.error('Error deleting status', error)
      const Toast = configureSwal()
      Toast.fire({
        icon: 'error',
        title: 'Error deleting status'
      })
    }
  }
</script>
<template>
  <!-- Main -->
  <div class="w-full h-full">
    <div class="h-[50px] bg-gray-900 text-white">Header</div>
      <div class="h-[calc(100vh-50px)]">
        
        <div class="flex justify-center gap-5 my-24 mx-12 flex-col">

          <form @submit.prevent="submitForm" class="w-3/6 p-5 border shadow-lg rounded-xl">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  for="name"
                >
                  Create Status
                </label>
                <input
                  v-model="form.name"
                  class="text-black border border-gray-400 rounded py-3 px-4"
                  id="name"
                  type="text"
                />
              </div>
            </div>
            <button class="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg" type="submit">Submit</button>
          </form>
  
          <div class="mr-80">
          <div class="pt-2 p-5 border rounded-xl shadow-lg">    
            <div class="table w-full p-2">
                <h1 class="pb-3 text-2xl">All Status.</h1>
                <h2 class="font-semibold text-slate-800">Total Status <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2>
                <table class="w-full border">
                    <thead>
                        <tr class="bg-gray-50 border-b">
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Name
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Action
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <div v-if="loading">
                      <div class="flex items-center justify-center">
                        <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                        </div>
                      </div>
                    </div>
                    <tbody v-else>
                        <tr v-for="status in statuses" :key="status.id" class="bg-gray-100 text-center border-b text-sm text-gray-600">
                            <td class="p-2 border-r">{{ status.name }}</td>
                            <td>
                              <button @click="openUpdateModal(status)" class="bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-lg mr-2 hover:shadow-lg text-xs font-thin">Edit</button>
                              <div v-if="showUpdateModal" class="fixed inset-0 flex items-center justify-center z-50">
                                  <div class="w-4/12">
                                      <div class="modal-content bg-white p-6 rounded-lg shadow-lg relative">
                                    <div class="mb-6">
                                      <h1 class="text-2xl">Fill up the form to edit status.</h1>
                                    </div>
                                    <button @click="showUpdateModal = false" class="close-button absolute top-0 right-0 p-2 text-black rounded-sm px-3 py-1 focus:outline-none text-2xl">×</button>
                                    <form @submit.prevent="updateForm">
                                      <div class="-mx-3 md:flex mb-2">
                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
                                            Name
                                          </label>
                                          <input v-model="formUpdate.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Jane">
                                        </div>
                                      </div>
                                      <button class="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-600" type="submit">update</button>
                                    </form>  
                                  </div>
                                  </div>
                              </div>
                              <button @click="deleteStatus(status.id)" class="bg-red-500 hover:bg-red-600 p-2 text-white rounded-lg hover:shadow-lg text-xs font-thin">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main -->
</template>
