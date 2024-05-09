<template>
    <div class="modal">
        <div>
            Modal
            <button @click="closeModal()">Close</button>
            <button @click="getData()">Get data</button>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['name'],
    methods: {
        getData() {
            console.log(this.name);
        },
        closeModal() {
            this.$emit('closed', { name: "Manh" });
        }
    }
}
</script>

<style></style>