<script setup lang="ts">
</script>
<template>
    <!-- Main -->
    <div class="w-full h-full">
      <div class="h-[50px] bg-gray-900 text-white">Header</div>
      <div class="h-[calc(100vh-50px)]">
        
        <div class="flex justify-center my-[100px]">

          <div class="pt-2">    
            <div class="table w-full p-2">
                <h1 class="pb-3 text-2xl">All Official.</h1>
                <h2 class="font-semibold text-slate-800">Total Official <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2>
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
                                  Contact Number
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                  </svg>
                              </div>
                          </th>
  
                          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Start of Term
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
  
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                          <div class="flex items-center justify-center">
                              End of Term
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
                        <tr v-for="official in officials" :key="official.id" class="bg-gray-100 text-center border-b text-sm text-gray-600">
                            <td class="p-2 border-r">{{ official.name }}</td>
                            <td class="p-2 border-r">{{ official.contact_number }}</td>
                            <td class="p-2 border-r">{{ official.startOfTerm }}</td>
                            <td class="p-2 border-r">{{ official.endOfTerm }}</td>
                            <td>
                              <button @click="openUpdateModal(official)" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
                              <div v-if="showUpdateModal" class="fixed inset-0 flex items-center justify-center z-50">
                                  <div class="w-4/12">
                                      <div class="modal-content bg-white p-6 rounded-lg shadow-lg relative">
                                    <div class="mb-6">
                                      <h1 class="text-2xl">Fill up the form to enroll new students.</h1>
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
                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
                                            Email
                                          </label>
                                          <input v-model="formUpdate.email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="email" type="text" placeholder="Jane">
                                        </div>
                                      </div> 
  
                                      <div class="-mx-3 md:flex mb-2">
                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="address">
                                            Address
                                          </label>
                                          <input v-model="formUpdate.address" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="address" type="text" placeholder="Jane">
                                        </div>
  
                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="contact_number">
                                            Contact Number
                                          </label>
                                          <input v-model="formUpdate.contact_number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="contact_number" type="text" placeholder="Jane">
                                        </div>
                                      </div>
  
                                      <div class="-mx-3 md:flex mb-2">
                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="startOfTerm">
                                            Start of Term
                                          </label>
                                          <input v-model="formUpdate.startOfTerm" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="startOfTerm" type="text" placeholder="Jane">
                                        </div>
  
                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="endOfTerm">
                                            End of Term
                                          </label>
                                          <input v-model="formUpdate.endOfTerm" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="endOfTerm" type="text" placeholder="Jane">
                                        </div>
                                      </div>
                                      <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">update</button>
                                    </form>  
                                  </div>
                                  </div>
                              </div>
                              <button @click="deleteOfficial(official.id)" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

          <form class="w-full border max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Create Status
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Main -->
</template>
