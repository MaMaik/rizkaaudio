# Rizka Audio Padang — Katalog Produk

Website katalog produk toko audio mobil (speaker, subwoofer, power amplifier, tweeter, head unit, box).
Stack: **Vue 3 + Vite + Tailwind CSS v4 + Vue Router**. Data produk statis (JSON).

## Jalankan di lokal

```bash
npm install
npm run dev      # buka http://localhost:5173
```

Build untuk production:

```bash
npm run build    # hasil ada di folder dist/
npm run preview  # cek hasil build secara lokal
```

## Struktur

```
produk_terstruktur.json   # SUMBER DATA mentah (27 produk, dari PRD)
scripts/build-data.mjs    # mengubah JSON di atas → src/data/produk.js
src/data/produk.js        # data terstruktur (slug, gambar, spek) — hasil generate
src/data/config.js        # nama toko, nomor WA, alamat, merek, link maps
src/views/                # Home, Produk (katalog), ProdukDetail, Kontak
src/components/           # Navbar, Footer, ProductCard, ProductCarousel, AppIcon
```

## Yang perlu diisi (placeholder)

- **Nomor WhatsApp** — edit `whatsapp` di `src/data/config.js`
  (format internasional tanpa `0`/`+`, mis. `6281234567890`).
  Semua tombol "Chat WA" otomatis memakai nomor ini.
- **Jam operasional** — edit `jam` di `src/data/config.js`.
- **Gambar produk** — saat ini pakai placeholder `picsum.photos`.
  Ganti `gambar` di `src/data/produk.js` ke file asli (taruh di `public/images/`,
  rujuk sebagai `/images/nama.jpg`).

## Menambah / mengubah produk

1. Edit `produk_terstruktur.json` (field: `id`, `Judul`, `Jenis`, `Deskripsi`).
2. Jalankan `npm run data` → `src/data/produk.js` diperbarui otomatis
   (slug, gambar placeholder, dan pemecahan spek dari `Deskripsi`).

## Deploy ke Vercel

Import repo ini ke Vercel — build command `npm run build`, output `dist/`.
Tidak perlu backend.
