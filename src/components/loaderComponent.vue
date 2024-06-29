<template>
  <div class="loader__box">
    <div class="loader-animation"></div>
  </div>
</template>

<style scoped lang="scss">
.loader__box {
  min-height: 380px;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .loader-animation {
    border: 4px solid #cac2a4;
    border-radius: 50%;
    border-top: 4px solid transparent;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
