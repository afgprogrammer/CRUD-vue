<template>
    <div class="container mx-auto p-6">
        <register-form></register-form>
        <h1>Hello, {{ user.name }}</h1>
        <div class="h-8"></div>
        <input class="input" v-model="user.name" type="text" name="name" id="name" placeholder="Please enter your name">
        <div class="h-4"></div>
        <button-component text="Click me" @click="changeName"></button-component>
        <!-- <div class="flex">
            <div class="flex-1 text-red-700">
                <router-link to="/login">Login</router-link>
            </div>
            <div class="flex-1 text-red-700">
                <router-link to="/register">Register</router-link>
            </div>
        </div> -->
    </div>
</template>

<script>
import ButtonComponent from '../../components/Button.vue'
import RegisterForm from '../../components/RegisterForm.vue'

export default {
    components: {
        ButtonComponent,
        RegisterForm
    },

    data() {
        return {
            user: {
                name: 'John Doe'
            },
            page: 0,
            filters: {}
        }
    },

    mounted() {
        console.log(this.$router)
    },

    methods: {
        changeName() {
            this.user.name = "Mohammad"
        },

        printName() {

        }
    }
}
</script>
