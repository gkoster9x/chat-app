<template>
    <div class="min-vh-100 bg-light">
        <div class="container py-5">
            <div class="text-center">
                <h1 class="display-3 fw-bold mb-4">
                    Chào mừng đến với WebChat
                </h1>
                <p class="lead text-muted mb-5 mx-auto" style="max-width: 700px;">
                    Nền tảng chat trực tuyến đơn giản và thân thiện, kết nối mọi người từ mọi nơi.
                </p>
                <div class="d-flex justify-content-center mb-5">
                    <router-link to="/chat" class="btn btn-primary btn-lg px-5">
                        Bắt đầu chat
                    </router-link>
                </div>
            </div>

            <div class="row g-4 mt-4">
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="bg-primary text-white rounded-circle d-inline-flex p-3 mb-4">
                                <svg class="bi" width="24" height="24" fill="currentColor">
                                    <path
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 class="h5 mb-3">Chat trực tuyến</h3>
                            <p class="text-muted mb-0">
                                Kết nối và trò chuyện với mọi người từ khắp nơi trên thế giới.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="bg-primary text-white rounded-circle d-inline-flex p-3 mb-4">
                                <svg class="bi" width="24" height="24" fill="currentColor">
                                    <path
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 class="h5 mb-3">Nhiều người dùng</h3>
                            <p class="text-muted mb-0">
                                Hỗ trợ nhiều người dùng chat trong cùng một phòng.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="bg-primary text-white rounded-circle d-inline-flex p-3 mb-4">
                                <svg class="bi" width="24" height="24" fill="currentColor">
                                    <path
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 class="h5 mb-3">Bảo mật</h3>
                            <p class="text-muted mb-0">
                                Đảm bảo an toàn và bảo mật thông tin người dùng.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>