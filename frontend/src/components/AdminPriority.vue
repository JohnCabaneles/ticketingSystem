<script setup lang="ts">
</script>
<template>
    <!-- Main -->
    <div class="w-full h-full">
      <div class="h-[50px] bg-gray-900 text-white">Header</div>
      <div class="h-[calc(100vh-50px)] mt-10">
        <div class="w-[90%] ml-20">
          <WelcomeBanner />
        </div>
        <!-- Form -->

        <div class="flex flex-row my-[100px]">
          <div class="w-[30%] ml-20">
            <h2 class="text-4xl">Priorities</h2>
            <h3 class="text-xl mt-2">All Priorities</h3>
            <form action="">
              <div></div>
            </form>
          </div>
          <form class="p-5 bg-slate-100 rounded">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Create Priority
                </label>
                <input
                  class="appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Input priority..."
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
