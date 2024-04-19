<script setup lang="ts"></script>

<template>
  <main class="bg-white">
    <div class="relative flex items-center justify-center">
      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="min-h-[100dvh] h-full flex flex-col after:flex-1">
          <div class="flex-1"></div>

          <div class="w-full max-w-sm px-4 py-8 mx-auto border rounded-lg shadow-lg">
            <h1 class="mb-6 text-center text-3xl font-bold text-slate-800">Log In As</h1>
            <div class="flex flex-wrap justify-between">
              <a
                href="/admin/signin"
                type="submit"
                class="py-2 px-3 rounded-lg text-white bg-green-500 btn hover:bg-green-600"
              >
                Admin
              </a>
              <a
                href="/user/signin"
                type="submit"
                class="py-2 px-3 rounded-lg text-white bg-indigo-500 btn hover:bg-indigo-600"
              >
                User
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
