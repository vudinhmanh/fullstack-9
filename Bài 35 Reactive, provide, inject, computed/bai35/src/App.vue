<template>
  <div>
    <modal @closed="modalClosed" v-show="showModal"></modal>
    <button @click="Show">Show</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  components: { Modal },
  provide: {
    name: "manh"
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    Show() {
      this.showModal = true;
    },
    modalClosed() {
      this.showModal = false;
    }
  }
}
</script>

<style></style>