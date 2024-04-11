<script setup lang="ts">
import { ref } from 'vue'
import { usePriorityStore, type Priority } from '@/stores/priorityStore'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'

const priorityStore = usePriorityStore()
const { priorities, totalCount, loading } = storeToRefs(priorityStore)
const showUpdateModal = ref(false)
const form = ref<Priority>({
  id: 0,
  name: ''
})

const formUpdate = ref<Priority>({
  id: 0,
  name: ''
})

const resetForm = () => {
  form.value.name = ''
}

priorityStore.getPriority()

const configureSwal = () => {
  return Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast: { onmouseenter: any; onmouseleave: any }) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    }
  })
}

const submitForm = () => {
  if (form.value.name.length > 0) {
    priorityStore.addPriority(form.value).then(() => {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Priority added successfully'
      })
    })
    resetForm()
  } else {
    const Toast = configureSwal()
    Toast.fire({
      icon: 'error',
      title: 'Adding priority failed'
    })
  }
}

const openUpdateModal = (priority: Priority) => {
  formUpdate.value = { ...priority }
  showUpdateModal.value = true
}

const updateForm = () => {
  try {
    priorityStore.updatePriority(formUpdate.value.id, formUpdate.value).then(() => {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Priority updated successfully'
      })
    })
    showUpdateModal.value = false
  } catch (error) {
    console.error('Error updating priority', error)
    const Toast = configureSwal()
    Toast.fire({
      icon: 'error',
      title: 'Error updating priority'
    })
  }
}

const deletePriority = (id: number) => {
  try {
    priorityStore.deletePriority(id).then(() => {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Priority deleted successfully'
      })
    })
  } catch (error) {
    console.error('Error deleting priority', error)
    const Toast = configureSwal()
    Toast.fire({
      icon: 'error',
      title: 'Error deleting priority'
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
            <div class="w-full px-3 inline-block">
              <div class="mb-5">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="name">
                  Create Ticket
                </label>
              </div>
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="name">
                Name
              </label>
              <input
                v-model="form.name"
                class="text-black border border-gray-400 rounded py-3 px-4"
                id="name"
                type="text"
              />
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="name">
                Subject
              </label>
              <input
                v-model="form.name"
                class="text-black border border-gray-400 rounded py-3 px-4"
                id="name"
                type="text"
              />
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="name">
                Subject
              </label>
              <textarea
                v-model="form.name"
                class="text-black border border-gray-400 rounded py-3 px-4 resize-none w-[600px]"
                id="name"
                type="text"
              ></textarea>
            </div>
          </div>
          <button
            class="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- Main -->
</template>
