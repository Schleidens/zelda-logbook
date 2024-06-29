<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="zelda__app">
    <div class="zelda__app-box">
      <header>
        <img src="/src/assets/zelda-logbook-logo.svg" alt="" class="logo" />
        <div class="wrapper">
          <nav>
            <RouterLink to="/games">Game</RouterLink>
            <RouterLink to="/characters">Characters</RouterLink>
            <RouterLink to="/items">Items</RouterLink>
            <RouterLink to="/monsters">Monsters</RouterLink>
          </nav>
        </div>
      </header>

      <div class="page__view">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.zelda__app {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  height: 100%;
  &-box {
    max-width: 1196px;
    width: 100%;
    min-height: 718px;

    padding: 68px 121px;

    border-radius: 32px;

    background-color: rgba(45, 71, 68, 0.7490196078);

    @media (max-width: 1179px) {
      padding: 68px 40px;
    }

    header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img.logo {
        margin-bottom: 51px;
      }

      .wrapper {
        width: 100%;

        margin-bottom: 20px;
        nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 10px;

          @media (max-width: 1078px) {
            justify-content: center;
          }

          a {
            border: 2px solid #cac2a4;
            border-radius: 12px;

            max-width: 226.5px;
            width: 100%;
            height: 44px;

            color: #cac2a4;

            text-decoration: none;

            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 738px) {
              width: 100%;
              max-width: 100%;
            }

            &.router-link-active {
              background-color: #5ac7ba !important;
              border: 1px solid #5ac7ba !important;

              color: #4b441a;
            }
          }
        }
      }
    }
  }
}
</style>
