<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import AdminDepartment from '../components/AdminDepartments.vue'
</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <SideBar />
        <div class="flex-1">
            <AdminDepartment />
        </div>
    </div>
</template>