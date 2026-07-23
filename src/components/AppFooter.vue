<script setup>
import { RouterLink } from 'vue-router'
import { toko, merek, waLink } from '../data/config'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <footer class="mt-24 border-t border-graphite-700 bg-graphite-950">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
      <!-- brand + contact -->
      <div>
        <div class="flex items-center gap-2.5">
          <span class="grid h-9 w-9 place-items-center rounded-sm border border-graphite-600 bg-graphite-800 btn-physical">
            <svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true">
              <rect x="3" y="10" width="3" height="8" rx="1" fill="#3d8b8b" />
              <rect x="8" y="6" width="3" height="12" rx="1" fill="#e8a33d" />
              <rect x="13" y="3" width="3" height="15" rx="1" fill="#e8a33d" />
              <rect x="18" y="8" width="3" height="10" rx="1" fill="#3d8b8b" />
            </svg>
          </span>
          <span class="font-display text-lg font-semibold tracking-wide text-ink">RIZKA AUDIO</span>
        </div>
        <p class="mt-3 max-w-xs text-sm leading-relaxed text-muted">{{ toko.tagline }}</p>
        <a
          :href="waLink('katalog produk')"
          target="_blank"
          rel="noopener"
          class="mt-5 inline-flex items-center gap-2 rounded-sm border border-amber/40 bg-amber/10 px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-amber transition-colors hover:bg-amber/20"
        >
          <AppIcon name="whatsapp" class="h-4 w-4" /> Chat WhatsApp
        </a>
      </div>

      <!-- address -->
      <div>
        <h3 class="font-display text-sm font-semibold uppercase tracking-[0.15em] text-teal">Toko & Jam</h3>
        <ul class="mt-4 space-y-3 text-sm text-muted">
          <li class="flex gap-2.5">
            <AppIcon name="map-pin" class="mt-0.5 h-4 w-4 shrink-0 text-amber" />
            <span>{{ toko.alamat }}</span>
          </li>
          <li class="flex gap-2.5">
            <AppIcon name="phone" class="mt-0.5 h-4 w-4 shrink-0 text-amber" />
            <span>{{ toko.jam }}</span>
          </li>
          <li>
            <a
              :href="toko.maps"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 text-ink underline decoration-graphite-500 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
            >
              <AppIcon name="map-pin" class="h-4 w-4" /> Buka di Google Maps
            </a>
          </li>
        </ul>
        <div class="mt-4 flex gap-3">
          <a
            :href="toko.instagram"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 text-ink underline decoration-graphite-500 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
          >
            <AppIcon name="instagram" class="h-4 w-4" /> Instagram
          </a>
          <a
            :href="toko.facebook"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 text-ink underline decoration-graphite-500 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
          >
            <AppIcon name="facebook" class="h-4 w-4" /> Facebook
          </a>
        </div>
      </div>

      <!-- brands -->
      <div>
        <h3 class="font-display text-sm font-semibold uppercase tracking-[0.15em] text-teal">Merek Tersedia</h3>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="m in merek"
            :key="m"
            class="rounded-sm border border-graphite-700 bg-graphite-800 px-2.5 py-1 font-mono text-xs text-muted"
          >
            {{ m }}
          </span>
        </div>
        <nav class="mt-6 flex gap-4 text-sm">
          <RouterLink to="/" class="text-muted transition-colors hover:text-ink">Beranda</RouterLink>
          <RouterLink to="/produk" class="text-muted transition-colors hover:text-ink">Produk</RouterLink>
          <RouterLink to="/kontak" class="text-muted transition-colors hover:text-ink">Kontak</RouterLink>
        </nav>
      </div>
    </div>

    <div class="border-t border-graphite-800 py-5 text-center font-mono text-xs text-faint">
      © {{ new Date().getFullYear() }} {{ toko.nama }} — Katalog produk audio mobil Padang
    </div>
  </footer>
</template>
