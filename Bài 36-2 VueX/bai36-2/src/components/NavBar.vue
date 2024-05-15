<template>
  <div class="navbar">
    <h1>Todo list</h1>
    <ul>
        <li>Home</li>
        <li>About</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>
.navbar {
 padding: 5px;
 text-align: center;
 background: rgb(240, 240, 240);
 color: black;
}

.navbar ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
 padding: 0;
}

*** ProgressBar.vue
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>