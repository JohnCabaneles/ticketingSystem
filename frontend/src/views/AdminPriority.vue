<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import AdminPriority from '../components/AdminPriority.vue';
</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <SideBar />
        <div class="flex-1">
            <AdminPriority />
        </div>
    </div>
</template>