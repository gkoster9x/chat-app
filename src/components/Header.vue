<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <nav class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <router-link to="/" class="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                    Chat Demo
                </router-link>
                <div class="space-x-6">
                    <router-link to="/" class="text-gray-600 hover:text-primary-600 transition-colors"
                        active-class="text-primary-600 font-medium">
                        Trang chủ
                    </router-link>
                    <router-link to="/chat" class="text-gray-600 hover:text-primary-600 transition-colors"
                        active-class="text-primary-600 font-medium">
                        Chat
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>