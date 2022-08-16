<template>
    <button class="py-2 px-4 bg-blue-500 text-white rounded-lg" @click="helloWorld">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Login'
        }
    },

    methods: {
        helloWorld() {
            console.log("helllllllllllllllo")
            // this.$emit()
        }
    }
}
</script>
