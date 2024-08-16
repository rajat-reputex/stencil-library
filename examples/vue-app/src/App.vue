<script setup lang="ts"></script>

<template>
  <div>
    <reputex-widget
      visibility
      userAddress="0x570999eEa85adF6957f68125eF77967c208A1095"
      apiAccessKey="019c383a-9ad6-4b68-8226-44d01cd0ff20"
      apiSecretKey="b2bb63b277b5485e927b0d5538f6bd52871522f8162fa71bfd18de54d83e620e"
      mode
    ></reputex-widget>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
