<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { produk, kategori } from '../data/produk'
import { toko, waLink } from '../data/config'
import ProductCard from '../components/ProductCard.vue'
import ProductCarousel from '../components/ProductCarousel.vue'
import AppIcon from '../components/AppIcon.vue'

const featured = computed(() => produk.slice(0, 8))

const aboutImages = [
  '/images/about/img-1.jpg',
  '/images/about/img-2.jpg',
  '/images/about/img-3.jpg',
]

// EQ meter bars for the hero control-panel visual
const eqBars = [
  { h: 40, d: 0 }, { h: 72, d: 0.25 }, { h: 55, d: 0.5 }, { h: 90, d: 0.15 },
  { h: 38, d: 0.4 }, { h: 64, d: 0.6 }, { h: 48, d: 0.3 }, { h: 82, d: 0.5 },
  { h: 44, d: 0.2 }, { h: 70, d: 0.45 }, { h: 52, d: 0.35 }, { h: 88, d: 0.1 },
  { h: 36, d: 0.55 }, { h: 60, d: 0.25 }, { h: 46, d: 0.5 }, { h: 76, d: 0.4 },
]
</script>

<template>
  <div>
    <!-- ============================ HERO ============================ -->
    <section class="relative overflow-hidden border-b border-graphite-700">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <!-- copy -->
        <div>
          <span class="inline-flex items-center gap-2 rounded-sm border border-graphite-700 bg-graphite-850 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
            <span class="h-1.5 w-1.5 rounded-full bg-teal" /> Car Audio · Padang
          </span>

          <h1 class="mt-5 text-center font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            RIZKA<br /><span class="text-amber">AUDIO PADANG</span>
          </h1>

          <p class="mt-5 max-w-md text-lg leading-relaxed text-muted">{{ toko.tagline }}</p>

          <div class="mt-5 flex items-center gap-2 font-mono text-xs text-faint">
            <AppIcon name="map-pin" class="h-4 w-4 text-amber" />
            <span>{{ toko.alamat }}</span>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <RouterLink
              to="/produk"
              class="inline-flex items-center gap-2 rounded-sm bg-amber px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-graphite-950 transition-colors hover:bg-amber-bright"
            >
              Lihat Katalog <AppIcon name="arrow-right" class="h-4 w-4" />
            </RouterLink>
            <a
              :href="waLink('katalog produk')"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-sm border border-graphite-600 bg-graphite-800 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-amber/50 hover:text-amber btn-physical"
            >
              <AppIcon name="whatsapp" class="h-4 w-4 text-amber" /> Chat WA
            </a>
          </div>
        </div>

        <!-- control panel visual -->
        <div class="relative">
          <div class="rounded-md border border-graphite-600 bg-graphite-850 p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
            <div class="flex items-center justify-between border-b border-graphite-700 pb-3">
              <span class="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Output Meter</span>
              <span class="flex gap-1.5">
                <span class="h-2.5 w-2.5 rounded-full bg-amber/80" />
                <span class="h-2.5 w-2.5 rounded-full bg-teal/80" />
                <span class="h-2.5 w-2.5 rounded-full bg-graphite-500" />
              </span>
            </div>

            <!-- EQ bars -->
            <div class="flex h-44 items-end justify-between gap-1.5 px-1 py-5">
              <span
                v-for="(b, i) in eqBars"
                :key="i"
                class="eq-bar w-full rounded-sm bg-gradient-to-t from-teal/70 via-amber/80 to-amber"
                :style="{
                  height: b.h + '%',
                  transformOrigin: 'bottom',
                  animation: `eq-pulse ${1.1 + (i % 4) * 0.18}s ease-in-out ${b.d}s infinite`,
                }"
              />
            </div>

            <div class="grid grid-cols-3 gap-3 border-t border-graphite-700 pt-4">
              <div class="rounded-sm border border-graphite-700 bg-graphite-900 p-3 text-center">
                <div class="font-mono text-lg font-semibold text-amber">28</div>
                <div class="font-mono text-[10px] uppercase tracking-wider text-faint">Produk</div>
              </div>
              <div class="rounded-sm border border-graphite-700 bg-graphite-900 p-3 text-center">
                <div class="font-mono text-lg font-semibold text-teal">{{ kategori.length }}</div>
                <div class="font-mono text-[10px] uppercase tracking-wider text-faint">Kategori</div>
              </div>
              <div class="rounded-sm border border-graphite-700 bg-graphite-900 p-3 text-center">
                <div class="font-mono text-lg font-semibold text-ink">19+</div>
                <div class="font-mono text-[10px] uppercase tracking-wider text-faint">Merek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================= ABOUT ME ========================== -->
    <section class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div class="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
        <div>
          <h2 class="font-display text-2xl font-semibold uppercase tracking-wide text-ink sm:text-3xl">Tentang Kami</h2>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            Kami menjual berbagai perlengkapan audio mobil berkualitas, mulai dari speaker,
            subwoofer, power amplifier, tweeter, head unit, hingga box subwoofer.
            Dengan merek-merek ternama seperti Pioneer, Nakamichi, Kicx, Blaupunkt, dan banyak lagi,
            kami siap membantu kamu mendapatkan suara terbaik untuk mobilmu.
          </p>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            Berlokasi di Padang Pasir IV No.28A, Padang Barat, Kota Padang.
            Transaksi dilakukan secara langsung via chat WhatsApp — silakan tanya stok,
            harga, atau konsultasi pemilihan produk.
          </p>
          <RouterLink
            to="/kontak"
            class="mt-4 inline-flex items-center gap-2 rounded-sm bg-amber px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-graphite-950 transition-colors hover:bg-amber-bright"
          >
            Hubungi Kami <AppIcon name="arrow-right" class="h-3 w-3" />
          </RouterLink>
        </div>
        <ProductCarousel :gambar="aboutImages" judul="Rizka Audio Padang" :showThumbnails="false" />
      </div>
    </section>

    <!-- ======================= FEATURED =========================== -->
    <section class="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
      <div class="mb-7 flex items-end justify-between">
        <h2 class="font-display text-2xl font-semibold uppercase tracking-wide text-ink sm:text-3xl">Produk Unggulan</h2>
        <RouterLink
          to="/produk"
          class="inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-amber hover:text-amber-bright"
        >
          Lihat Semua <AppIcon name="arrow-right" class="h-4 w-4" />
        </RouterLink>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <ProductCard v-for="p in featured" :key="p.id" :produk="p" />
      </div>
    </section>
  </div>
</template>
