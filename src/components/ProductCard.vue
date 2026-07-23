<script setup>
import { RouterLink } from 'vue-router'
import AppIcon from './AppIcon.vue'

defineProps({
  produk: { type: Object, required: true },
})
</script>

<template>
  <RouterLink
    :to="{ name: 'produk-detail', params: { slug: produk.slug } }"
    class="group relative flex flex-col overflow-hidden rounded-sm border border-graphite-700 bg-graphite-850 transition-all duration-200 hover:-translate-y-0.5 hover:card-glow"
  >
    <!-- thumbnail -->
    <div class="relative aspect-square overflow-hidden bg-graphite-800">
      <img
        :src="produk.gambar[0]"
        :alt="produk.judul"
        loading="lazy"
        class="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.04]"
      />
      <!-- jenis badge -->
      <span
        class="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-sm border border-teal/40 bg-graphite-950/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-teal"
      >
        <AppIcon :name="produk.jenis" class="h-3.5 w-3.5" />
        {{ produk.jenis }}
      </span>
    </div>

    <!-- body -->
    <div class="flex flex-1 flex-col gap-3 p-4">
      <h3 class="font-display text-base font-medium leading-snug text-ink transition-colors group-hover:text-amber">
        {{ produk.judul }}
      </h3>

      <!-- quick spec line (first numeric-ish spec) -->
      <p
        v-if="produk.specs[0]"
        class="mt-auto font-mono text-xs text-muted"
      >
        {{ produk.specs[0].key }}: <span class="text-ink">{{ produk.specs[0].value }}</span>
      </p>

      <span class="inline-flex items-center gap-1 font-display text-xs font-semibold uppercase tracking-wide text-amber/90">
        Lihat detail
        <AppIcon name="arrow-right" class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </RouterLink>
</template>
