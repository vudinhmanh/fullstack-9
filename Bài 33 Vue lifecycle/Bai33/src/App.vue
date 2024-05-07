<template>
  <div>
    <div v-if="loading">Loading</div>
    <div v-else v-for="Player in Players" :key="Player.id">{{ Player.name }}</div>
    <div>Trang {{ page }}</div>
    <button @click="page--">Prev</button>
    <button @click="page++">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Players: [],
      page: 1,
      loading: false
    }
  },
  mounted() {
    this.loadPlayer();
  },
  watch: {
    page: function () {
      this.loadPlayer();
    }
  },
  methods: {
    async loadPlayer() {
      this.loading = true;
      let res = await fetch(`http://localhost:3000/Player?_page=${this.page}&_limit=2`)
      this.Players = await res.json();
      this.loading = false;
    }
  }
}
</script>

<style></style>