<script setup>
import { ref, computed } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  gambar: { type: Array, required: true },
  judul: { type: String, default: 'Produk' },
  showThumbnails: { type: Boolean, default: true },
})

const index = ref(0)
const dir = ref(1) // 1 = next (slide from right), -1 = prev (slide from left)
const total = computed(() => props.gambar.length)

function go(n) {
  const next = (n + total.value) % total.value
  dir.value = n > index.value || (index.value === total.value - 1 && n === 0) ? 1 : -1
  // when looping from last->first, treat as forward
  if (index.value === total.value - 1 && n === 0) dir.value = 1
  if (index.value === 0 && n === total.value - 1) dir.value = -1
  index.value = next
}

function onKey(e) {
  if (e.key === 'ArrowRight') {
    e.preventDefault()
    go(index.value + 1)
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    go(index.value - 1)
  }
}
</script>

<template>
  <div class="select-none">
    <!-- display screen -->
    <figure
      tabindex="0"
      role="group"
      aria-roledescription="carousel"
      :aria-label="`Galeri gambar ${judul}`"
      class="relative overflow-hidden rounded-md border border-graphite-600 bg-graphite-950 outline-none ring-amber/0 focus-visible:ring-2 focus-visible:ring-amber"
      @keydown="onKey"
    >
      <div class="aspect-square bg-graphite-900">
        <img
          :key="index"
          :src="gambar[index]"
          :alt="`${judul} — foto ${index + 1}`"
          class="anim-snap h-full w-full object-cover"
          :style="{ '--snap-from': dir === 1 ? '18px' : '-18px' }"
          draggable="false"
        />
      </div>

      <!-- corner readout -->
      <figcaption
        class="pointer-events-none absolute right-3 top-3 rounded-sm border border-graphite-600 bg-graphite-950/85 px-2 py-1 font-mono text-xs tracking-wider text-amber"
      >
        {{ String(index + 1).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}
      </figcaption>
    </figure>

    <!-- control panel -->
    <div class="mt-3 flex items-center gap-3 rounded-sm border border-graphite-700 bg-graphite-850 p-2.5">
      <!-- prev -->
      <button
        type="button"
        class="grid h-11 w-11 shrink-0 place-items-center rounded-sm text-amber btn-physical transition-transform active:translate-y-px"
        aria-label="Gambar sebelumnya"
        @click="go(index - 1)"
      >
        <AppIcon name="chevron-left" class="h-6 w-6" />
      </button>

      <!-- segment gauge -->
      <div class="flex flex-1 items-center gap-1.5" aria-hidden="true">
        <button
          v-for="(g, i) in total"
          :key="i"
          type="button"
          class="h-2.5 flex-1 rounded-[2px] border transition-colors"
          :class="i <= index ? 'border-amber/60 bg-gradient-to-t from-amber-dim to-amber' : 'border-graphite-600 bg-graphite-750'"
          :aria-label="`Ke gambar ${i + 1}`"
          @click="go(i)"
        />
      </div>

      <!-- next -->
      <button
        type="button"
        class="grid h-11 w-11 shrink-0 place-items-center rounded-sm text-amber btn-physical transition-transform active:translate-y-px"
        aria-label="Gambar selanjutnya"
        @click="go(index + 1)"
      >
        <AppIcon name="chevron-right" class="h-6 w-6" />
      </button>
    </div>

    <!-- thumbnails -->
    <div v-if="showThumbnails" class="mt-3 flex gap-2">
      <button
        v-for="(src, i) in gambar"
        :key="i"
        type="button"
        class="h-16 w-16 overflow-hidden rounded-sm border transition-colors"
        :class="i === index ? 'border-amber' : 'border-graphite-700 hover:border-graphite-500'"
        :aria-label="`Thumbnail gambar ${i + 1}`"
        @click="go(i)"
      >
        <img :src="src" :alt="`Thumbnail ${i + 1}`" class="h-full w-full object-cover" loading="lazy" />
      </button>
    </div>
  </div>
</template>
