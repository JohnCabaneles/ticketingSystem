<script setup lang="ts">
</script>
<template>
    <!-- Main -->
    <div class="w-full h-full">
      <div class="h-[50px] bg-gray-900 text-white">Header</div>
      <div class="h-[calc(100vh-50px)]">
        <div class="flex justify-center my-[100px]">
          <form class="w-full max-w-lg">
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
