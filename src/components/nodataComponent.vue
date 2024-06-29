<template>
  <div class="no-data">
    <div class="no-data__box">No data found matching your request.</div>
  </div>
</template>

<style scoped lang="scss">
.no-data {
  min-height: 380px;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  &__box {
    color: #cac2a4;
  }
}
</style>
