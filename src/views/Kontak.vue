<script setup>
import { toko, merek, waLink } from '../data/config'
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
    <header class="mb-10">
      <h1 class="font-display text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">Kontak &amp; Lokasi</h1>
      <p class="mt-2 text-sm text-muted">
        Mampir ke tokonya, atau chat dulu buat tanya spek &amp; stok. Kami bantu pilih setup audio yang pas buat mobil kamu.
      </p>
    </header>

    <div class="grid gap-5 md:grid-cols-2">
      <!-- info panel -->
      <div class="rounded-md border border-graphite-700 bg-graphite-850 p-6">
        <h2 class="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Informasi Toko</h2>

        <ul class="mt-5 space-y-5">
          <li class="flex gap-3">
            <span class="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-graphite-600 bg-graphite-800 text-amber btn-physical">
              <AppIcon name="map-pin" class="h-4 w-4" />
            </span>
            <div>
              <p class="font-display text-sm font-medium uppercase tracking-wide text-teal">Alamat</p>
              <p class="mt-0.5 text-sm text-ink">{{ toko.alamat }}</p>
            </div>
          </li>

          <li class="flex gap-3">
            <span class="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-graphite-600 bg-graphite-800 text-amber btn-physical">
              <AppIcon name="phone" class="h-4 w-4" />
            </span>
            <div>
              <p class="font-display text-sm font-medium uppercase tracking-wide text-teal">Jam Operasional</p>
              <p class="mt-0.5 text-sm text-ink">{{ toko.jam }}</p>
            </div>
          </li>
        </ul>

        <div class="mt-6 flex flex-col gap-3">
          <a
            :href="waLink('info toko')"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-graphite-950 transition-colors hover:bg-amber-bright"
          >
            <AppIcon name="whatsapp" class="h-5 w-5" /> Chat WhatsApp
          </a>
          <a
            :href="toko.instagram"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 rounded-sm border border-graphite-600 bg-graphite-800 px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-amber/50 hover:text-amber btn-physical"
          >
            <AppIcon name="instagram" class="h-4 w-4" /> Instagram
          </a>
          <a
            :href="toko.facebook"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 rounded-sm border border-graphite-600 bg-graphite-800 px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-amber/50 hover:text-amber btn-physical"
          >
            <AppIcon name="facebook" class="h-4 w-4" /> Facebook
          </a>
          <a
            :href="toko.maps"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 rounded-sm border border-graphite-600 bg-graphite-800 px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-amber/50 hover:text-amber btn-physical"
          >
            <AppIcon name="map-pin" class="h-4 w-4" /> Buka di Google Maps
          </a>
        </div>
      </div>

      <!-- brands panel -->
      <div class="rounded-md border border-graphite-700 bg-graphite-850 p-6">
        <h2 class="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Merek Tersedia</h2>
        <p class="mt-2 text-sm text-muted">Beberapa merek yang kami carry — stok bisa berubah, tanya via WA untuk yang terbaru.</p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="m in merek"
            :key="m"
            class="rounded-sm border border-graphite-700 bg-graphite-800 px-3 py-1.5 font-mono text-xs text-ink"
          >
            {{ m }}
          </span>
        </div>

        <div class="mt-6 rounded-sm border border-graphite-700 bg-graphite-900 p-4">
          <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Catatan</p>
          <p class="mt-1.5 text-sm leading-relaxed text-muted">
            Belum yakin mau pasang apa? Ceritakan mobil &amp; budget kamu, kami rekomendasiin combo speaker, subwoofer,
            dan amplifier yang seimbang.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
