<script setup lang="ts"></script>
<template>
  <div>
    <header>Nuxt Learning</header>
    <slot />
    <footer>&copy; Inaoka</footer>
  </div>
</template>
<style>
html {
  font-family: "Noto Sans JP", sans-serif;
}
header {
  padding: 10px;
  background-color: #000;
  font-weight: bold;
  color: #fff;
}
footer {
  padding: 10px;
  background-color: orange;
  text-align: center;
}
</style>