<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <img src="/src/assets/icon-sword.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  name: string
  description: string
}

defineProps<CardProps>()
</script>

<style scoped lang="scss">
.card {
  background-color: #cac2a4;

  min-height: 134px;
  max-width: 300px;
  widows: 100%;

  border-radius: 16px;

  padding: 24px;

  @media (max-width: 738px) {
    width: 100%;
    max-width: 100%;
  }

  &-content {
    display: flex;
    flex-direction: column;

    position: relative;

    h3 {
      color: #4b441a;

      font-size: 16px;
      font-weight: bold;
    }

    p {
      color: #4b441a;

      font-size: 12px;
    }

    img {
      height: 33px;
      widows: 33px;

      position: absolute;
      right: 0;
      top: 60px;
    }
  }
}
</style>
