<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Modal nhập biệt danh -->
        <div v-if="!nickname" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
                <h2 class="text-2xl font-bold mb-4">Nhập biệt danh của bạn</h2>
                <input v-model="tempNickname" type="text"
                    class="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập biệt danh" @keyup.enter="setNickname" />
                <button @click="setNickname"
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Bắt đầu chat
                </button>
            </div>
        </div>

        <!-- Giao diện chat -->
        <div v-else class="max-w-4xl mx-auto p-4">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <!-- Header -->
                <div class="bg-blue-500 px-6 py-4">
                    <div class="flex items-center justify-between">
                        <h2 class="text-xl font-semibold text-white">Phòng chat</h2>
                        <div class="flex items-center space-x-4">
                            <span class="text-white text-sm">Biệt danh: {{ nickname }}</span>
                            <button @click="leaveChat" class="text-white hover:text-red-200 transition-colors">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Chat messages -->
                <div class="h-[500px] overflow-y-auto p-4 bg-gray-50" ref="chatContainer">
                    <div v-for="(message, index) in messages" :key="index" class="mb-4">
                        <div :class="[
                            'max-w-[70%] rounded-lg p-3',
                            message.nickname === nickname ? 'bg-blue-500 text-white ml-auto' : 'bg-white border'
                        ]">
                            <p class="font-semibold text-sm">{{ message.nickname }}</p>
                            <p class="mt-1">{{ message.text }}</p>
                            <p class="text-xs mt-1 opacity-75">{{ formatTime(message.timestamp) }}</p>
                        </div>
                    </div>
                </div>

                <!-- Input message -->
                <div class="border-t p-4 bg-white">
                    <div class="flex space-x-4">
                        <input v-model="newMessage" type="text"
                            class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Nhập tin nhắn..." @keyup.enter="sendMessage" />
                        <button @click="sendMessage"
                            class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                            <span>Gửi</span>
                            <svg class="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { io } from 'socket.io-client'

const router = useRouter()
const socket = io('http://localhost:3000')
const nickname = ref('')
const tempNickname = ref('')
const messages = ref<{ nickname: string; text: string; timestamp: number }[]>([])
const newMessage = ref('')
const chatContainer = ref<HTMLElement | null>(null)

const setNickname = () => {
    if (tempNickname.value.trim()) {
        nickname.value = tempNickname.value.trim()
        socket.emit('join', { nickname: nickname.value })
    }
}

const sendMessage = () => {
    if (newMessage.value.trim()) {
        const message = {
            nickname: nickname.value,
            text: newMessage.value.trim(),
            timestamp: Date.now()
        }
        socket.emit('message', message)
        newMessage.value = ''
    }
}

const leaveChat = () => {
    socket.disconnect()
    router.push('/')
}

const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
    })
}

const scrollToBottom = async () => {
    await nextTick()
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
}

onMounted(() => {
    socket.on('message', (message: { nickname: string; text: string; timestamp: number }) => {
        messages.value.push(message)
        scrollToBottom()
    })
})
</script>