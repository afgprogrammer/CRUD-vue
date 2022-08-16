<template>
 <div class="w-2/3 m-auto">
    <div class="card">
        <header>
            <h1>Register</h1>
        </header>
        <div class="mt-6">
            <form action="" id="register">
                <div class="grid grid-cols-2 gap-2">
                    <input type="hidden" name="isEditing" id="isEditing" value="false">
                    <div class="flex flex-col mb-3">
                        <label for="">Name</label>
                        <input class="input" type="text" v-model="user.name" placeholder="Name" id="name" name="name">
                    </div>
                    <div class="flex flex-col mb-3">
                        <label for="">Email</label>
                        <input class="input" type="text" v-model="user.email" placeholder="Email" id="email" name="email">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div class="flex flex-col mb-3">
                        <label for="">Age</label>
                        <input class="input" type="number" v-model="user.age" min="10" max="100" placeholder="Age" id="age" name="age">
                    </div>
                    <div class="flex flex-col mb-3">
                        <label for="">Address</label>
                        <input class="input" type="text" v-model="user.address" placeholder="eg. Kabul, Afghanistan" id="address" name="address">
                    </div>
                </div>
                <div class="flex flex-col mb-3">
                    <label for="">Image</label>
                    <input class="input" type="text" v-model="user.image" placeholder="Image URL" id="image" name="image">
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div class="p-4 border border-gray-400 rounded-md cursor-pointer">
                        Male
                    </div>
                    <div class="p-4 border border-gray-400 rounded-md cursor-pointer selected">
                        Female
                    </div>
                </div>

                <div class="h-8"></div>
                <div class="flex">
                    <button class="btn flex-1" @click.prevent="register">Register</button>
                </div>
            </form>
        </div>
        <div class="h-8">

        </div>
        <div>
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.age }}</p>

        </div>
    </div>
</div>
</template>

<script>
import { saveUser, editUser, getUsers, getUserByEmail } from '../utils/storage.js';

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                address: '',
                image: '',
                gender: 0, // 0-male 1-female
                age: 0
            }
        }
    },

    methods: {
        register() {
            console.log(this.user)
            saveUser(this.user)
        }
    }
}
</script>
