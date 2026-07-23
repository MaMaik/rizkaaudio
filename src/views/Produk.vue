<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { produk, kategori } from '../data/produk'
import ProductCard from '../components/ProductCard.vue'
import AppIcon from '../components/AppIcon.vue'

const route = useRoute()
const search = ref('')
const aktif = ref(route.query.kategori || 'Semua')

// keep filter in sync when arriving via a category link
watch(
  () => route.query.kategori,
  (v) => (aktif.value = v || 'Semua'),
)

const chips = computed(() => ['Semua', ...kategori])

const hasil = computed(() => {
  const q = search.value.trim().toLowerCase()
  return produk.filter((p) => {
    const matchKat = aktif.value === 'Semua' || p.jenis === aktif.value
    const matchQ = !q || p.judul.toLowerCase().includes(q)
    return matchKat && matchQ
  })
})
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
    <!-- header -->
    <header class="mb-8">
      <h1 class="font-display text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">Katalog Produk</h1>
      <p class="mt-2 text-sm text-muted">
        Cek spek &amp; stok, lalu tanya langsung via WhatsApp. Transaksi tetap manual — kami bantu pilih yang pas buat mobil kamu.
      </p>
    </header>

    <!-- controls -->
    <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <!-- search -->
      <div class="relative w-full lg:max-w-sm">
        <AppIcon name="search" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
        <input
          v-model="search"
          type="search"
          placeholder="Cari nama produk…"
          aria-label="Cari produk"
          class="w-full rounded-sm border border-graphite-600 bg-graphite-850 py-2.5 pl-10 pr-3 font-body text-sm text-ink placeholder:text-faint focus:border-amber/60 focus:outline-none"
        />
      </div>

      <!-- result count -->
      <span class="font-mono text-xs uppercase tracking-wider text-faint">
        {{ hasil.length }} / {{ produk.length }} produk
      </span>
    </div>

    <!-- category chips -->
    <div class="mb-8 flex flex-wrap gap-2">
      <button
        v-for="c in chips"
        :key="c"
        type="button"
        :aria-pressed="aktif === c"
        class="inline-flex items-center gap-1.5 rounded-sm border px-3 py-2 font-display text-xs font-medium uppercase tracking-wide transition-colors"
        :class="
          aktif === c
            ? 'border-amber/50 bg-amber/15 text-amber'
            : 'border-graphite-700 bg-graphite-850 text-muted hover:border-graphite-500 hover:text-ink'
        "
        @click="aktif = c"
      >
        <AppIcon :name="c === 'Semua' ? 'grid' : c" class="h-3.5 w-3.5" />
        {{ c }}
      </button>
    </div>

    <!-- grid -->
    <div v-if="hasil.length" class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <ProductCard v-for="p in hasil" :key="p.id" :produk="p" />
    </div>

    <!-- empty state -->
    <div
      v-else
      class="rounded-sm border border-dashed border-graphite-600 bg-graphite-850 px-6 py-16 text-center"
    >
      <AppIcon name="search" class="mx-auto h-8 w-8 text-faint" />
      <p class="mt-3 font-display text-lg uppercase tracking-wide text-muted">Tidak ada produk cocok</p>
      <p class="mt-1 text-sm text-faint">Coba kata kunci lain atau pilih kategori lain.</p>
    </div>
  </div>
</template>
