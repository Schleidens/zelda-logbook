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

const items = ref<dataModel[]>([])
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

const loadItems = async () => {
  try {
    isLoading.value = true
    const res = await fetchData<apiResponse>(
      `${route.path.substring(1)}?limit=6&page=${page.value}`
    )
    items.value = res.data
  } catch (error: any) {
    console.log('Failed to load', error)
  } finally {
    isLoading.value = false
  }
}

const searchItems = async () => {
  try {
    isLoading.value = true
    const res = await fetchData<apiResponse>(`${route.path.substring(1)}?name=${searchInput.value}`)
    items.value = res.data
  } catch (error: any) {
    console.log('Failed to load', error)
  } finally {
    isLoading.value = false
  }
}

watch(page, () => {
  loadItems()
  router.push({ path: route.path, query: { ...route.query, page: page.value.toString() } })
})

onMounted(() => {
  if (route.query.page) {
    page.value = parseInt(route.query.page as string, 10)
  }
  loadItems()
})
</script>

<template>
  <div>
    <form @submit.prevent="searchItems">
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

  <div class="cards__grid">
    <LoaderComponent v-if="isLoading" />
    <CardComponent
      v-else
      v-for="item in items"
      :key="item.id"
      :description="item.name"
      :name="item.name"
    />
    <NoDataComponent v-if="!isLoading && !items.length" />
    <div class="navigation">
      <button class="prev" @click="goToPage('decrement')" :disabled="page === 0">Prev</button>
      <button class="next" @click="goToPage('increment')" :disabled="items.length < 6">Next</button>
    </div>
  </div>
</template>

<style></style>
