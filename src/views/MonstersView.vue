<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
import LoaderComponent from '@/components/loaderComponent.vue'
import NoDataComponent from '@/components/nodataComponent.vue'
import { fetchData } from '@/utils/api'
import type { apiResponse, dataModel } from '@/utils/types'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const monsters = ref<dataModel[]>([])
const isLoading = ref<boolean>(false)
const page = ref<number>(0)
const searchInput = ref<string>('')

const goToPage = (action: string) => {
  if (action === 'increment') {
    page.value++
  } else if (action === 'decrement') {
    page.value > 0 ? (page.value -= 1) : 0
  }
}

const loadMonsters = async () => {
  try {
    isLoading.value = true
    const res = await fetchData<apiResponse>(
      `${route.path.substring(1)}?limit=6&page=${page.value}`
    )
    monsters.value = res.data
  } catch (error: any) {
    console.log('Failed to load', error)
  } finally {
    isLoading.value = false
  }
}

const searchMonsters = async () => {
  try {
    isLoading.value = true
    const res = await fetchData<apiResponse>(`${route.path.substring(1)}?name=${searchInput.value}`)
    monsters.value = res.data
  } catch (error: any) {
    console.log('Failed to load', error)
  } finally {
    isLoading.value = false
  }
}

watch(page, () => {
  loadMonsters()
  router.push({ path: route.path, query: { ...route.query, page: page.value.toString() } })
})

onMounted(() => {
  if (route.query.page) {
    page.value = parseInt(route.query.page as string, 10)
  }
  loadMonsters()
})
</script>

<template>
  <div>
    <form @submit.prevent="searchMonsters">
      <div class="search">
        <img src="/src/assets/icon-search.svg" alt="" />
        <input type="text" name="search" placeholder="SEARCH" v-model="searchInput" id="search" />
      </div>
    </form>
  </div>

  <div class="page__view-result__bar">
    <div>Results</div>
    <div class="bar"></div>
  </div>

  <div class="game cards__grid">
    <LoaderComponent v-if="isLoading" />
    <CardComponent
      v-else
      v-for="monster in monsters"
      :key="monster.id"
      :description="monster.name"
      :name="monster.name"
    />
    <NoDataComponent v-if="!isLoading && !monsters.length" />
    <div class="navigation">
      <button class="prev" @click="goToPage('decrement')" :disabled="page === 0">Prev</button>
      <button class="next" @click="goToPage('increment')" :disabled="monsters.length < 6">
        Next
      </button>
    </div>
  </div>
</template>

<style></style>
