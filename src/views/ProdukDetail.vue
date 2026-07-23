<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getBySlug, produk } from '../data/produk'
import { waLink } from '../data/config'
import ProductCarousel from '../components/ProductCarousel.vue'
import ProductCard from '../components/ProductCard.vue'
import AppIcon from '../components/AppIcon.vue'

const route = useRoute()
const produkData = computed(() => getBySlug(route.params.slug))

const related = computed(() => {
  if (!produkData.value) return []
  return produk
    .filter((p) => p.jenis === produkData.value.jenis && p.id !== produkData.value.id)
    .slice(0, 3)
})
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6">
    <!-- not found -->
    <div v-if="!produkData" class="rounded-sm border border-graphite-700 bg-graphite-850 px-6 py-16 text-center">
      <p class="font-display text-2xl uppercase tracking-wide text-muted">Produk tidak ditemukan</p>
      <RouterLink
        to="/produk"
        class="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-amber hover:text-amber-bright"
      >
        <AppIcon name="arrow-right" class="h-4 w-4 rotate-180" /> Kembali ke katalog
      </RouterLink>
    </div>

    <template v-else>
      <!-- breadcrumb -->
      <nav class="mb-6 flex flex-wrap items-center gap-1.5 font-mono text-xs text-faint">
        <RouterLink to="/" class="transition-colors hover:text-ink">Beranda</RouterLink>
        <span>/</span>
        <RouterLink to="/produk" class="transition-colors hover:text-ink">Produk</RouterLink>
        <span>/</span>
        <span class="truncate text-muted">{{ produkData.judul }}</span>
      </nav>

      <div class="grid gap-10 lg:grid-cols-2">
        <!-- gallery -->
        <ProductCarousel :gambar="produkData.gambar" :judul="produkData.judul" />

        <!-- info -->
        <div>
          <span
            class="inline-flex items-center gap-1.5 rounded-sm border border-teal/40 bg-graphite-850 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-teal"
          >
            <AppIcon :name="produkData.jenis" class="h-3.5 w-3.5" /> {{ produkData.jenis }}
          </span>

          <h1 class="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {{ produkData.judul }}
          </h1>

          <!-- spec sheet -->
          <div v-if="produkData.specs.length" class="mt-6 rounded-sm border border-graphite-700 bg-graphite-850">
            <div class="border-b border-graphite-700 px-4 py-2.5">
              <span class="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Spesifikasi</span>
            </div>
            <dl class="divide-y divide-graphite-800">
              <div
                v-for="s in produkData.specs"
                :key="s.key"
                class="grid grid-cols-[42%_58%] gap-2 px-4 py-2.5 text-sm"
              >
                <dt class="text-muted">{{ s.key }}</dt>
                <dd class="font-mono text-ink">{{ s.value }}</dd>
              </div>
            </dl>
          </div>

          <!-- features -->
          <div v-if="produkData.features.length" class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="f in produkData.features"
              :key="f"
              class="rounded-sm border border-graphite-700 bg-graphite-800 px-2.5 py-1 font-mono text-xs text-muted"
            >
              {{ f }}
            </span>
          </div>

          <!-- CTA -->
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="waLink(produkData.judul)"
              target="_blank"
              rel="noopener"
              class="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-amber px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-graphite-950 transition-colors hover:bg-amber-bright"
            >
              <AppIcon name="whatsapp" class="h-5 w-5" /> Tanya via WhatsApp
            </a>
            <RouterLink
              to="/produk"
              class="inline-flex items-center justify-center gap-2 rounded-sm border border-graphite-600 bg-graphite-800 px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-amber/50 hover:text-amber btn-physical"
            >
              Semua Produk
            </RouterLink>
          </div>
          <p class="mt-3 font-mono text-xs text-faint">
            Stok &amp; harga dipastikan via chat — kami bantu cocokkan dengan sistem audio mobil kamu.
          </p>
        </div>
      </div>

      <!-- related -->
      <section v-if="related.length" class="mt-16">
        <h2 class="mb-6 font-display text-2xl font-semibold uppercase tracking-wide text-ink">
          Produk {{ produkData.jenis }} Lainnya
        </h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <ProductCard v-for="p in related" :key="p.id" :produk="p" />
        </div>
      </section>
    </template>
  </div>
</template>
