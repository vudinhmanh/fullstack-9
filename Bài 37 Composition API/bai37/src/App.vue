<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="hello">Click</button>
    <button @click="setName">Sua ten</button>

    <h2>{{ Count.current }}</h2>
    <button @click="increment">Tang</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {s
    let name = ref("Manh")
    const hello = () => {
      alert("Hello");
    }
    const setName = () => {
        name.value = "Nam"
    }
    const Count = reactive({
      current:0
    })
    const increment = () => {
      Count.current++
    }
    return {
      name,
      hello,
      setName,
      Count,
      increment
    }
  }
}
</script>

<style>

</style>