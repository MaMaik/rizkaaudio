<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)

// close mobile menu whenever the route changes
watch(
  () => route.fullPath,
  () => (open.value = false),
)

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/produk', label: 'Produk' },
  { to: '/kontak', label: 'Kontak' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-graphite-700 bg-graphite-900/85 backdrop-blur supports-[backdrop-filter]:bg-graphite-900/70"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <!-- brand -->
      <RouterLink to="/" class="group flex items-center gap-2.5" aria-label="Beranda Rizka Audio">
        <!-- meter-glyph logo -->
        <span
          class="grid h-9 w-9 place-items-center rounded-sm border border-graphite-600 bg-graphite-800 btn-physical"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true">
            <rect x="3" y="10" width="3" height="8" rx="1" fill="#3d8b8b" />
            <rect x="8" y="6" width="3" height="12" rx="1" fill="#e8a33d" />
            <rect x="13" y="3" width="3" height="15" rx="1" fill="#e8a33d" />
            <rect x="18" y="8" width="3" height="10" rx="1" fill="#3d8b8b" />
          </svg>
        </span>
        <span class="leading-none">
          <span class="block font-display text-lg font-semibold tracking-wide text-ink">RIZKA AUDIO</span>
          <span class="block font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Padang · Car Audio</span>
        </span>
      </RouterLink>

      <!-- desktop links -->
      <div class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="relative px-4 py-2 font-display text-sm font-medium uppercase tracking-wide text-muted transition-colors hover:text-ink"
          active-class="!text-amber"
        >
          {{ l.label }}
          <span
            class="absolute inset-x-3 -bottom-px h-px bg-amber opacity-0 transition-opacity"
            :class="route.path === l.to ? 'opacity-100' : ''"
          />
        </RouterLink>
        <RouterLink
          to="/produk"
          class="ml-3 inline-flex items-center gap-1.5 rounded-sm border border-amber/40 bg-amber/10 px-3.5 py-2 font-display text-sm font-semibold uppercase tracking-wide text-amber transition-colors hover:bg-amber/20"
        >
          Lihat Katalog
        </RouterLink>
      </div>

      <!-- mobile toggle -->
      <button
        class="grid h-10 w-10 place-items-center rounded-sm border border-graphite-600 bg-graphite-800 text-ink btn-physical md:hidden"
        :aria-expanded="open"
        aria-label="Buka menu"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" class="h-5 w-5" />
      </button>
    </nav>

    <!-- mobile drawer -->
    <Transition name="drawer">
      <div v-if="open" class="border-t border-graphite-700 bg-graphite-850 md:hidden">
        <div class="flex flex-col px-4 py-2">
          <RouterLink
            v-for="l in links"
            :key="l.to"
            :to="l.to"
            class="border-b border-graphite-800 py-3 font-display text-base font-medium uppercase tracking-wide text-muted last:border-0"
            active-class="!text-amber"
          >
            {{ l.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
