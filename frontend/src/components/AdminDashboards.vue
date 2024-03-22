<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './SideBar.vue'
</script>

<template>
  <div class="flex h-[100dvh] overflow-hidden">
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
  </div>
</template>
