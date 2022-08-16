<template>
    <div class="container mx-auto p-6">
        <h1>Hello World</h1>
        <div class="flex">
            <div class="flex-1 text-red-700">
                <router-link to="/login">Login</router-link>
            </div>
            <div class="flex-1 text-red-700">
                <router-link to="/register">Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
