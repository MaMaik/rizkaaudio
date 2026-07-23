// Store-level constants. Edit these when real values are known.
export const toko = {
  nama: 'Rizka Audio Padang',
  tagline: 'Menjual Barang Audio Khususnya Audio Mobil',
  // TODO: replace with the real WhatsApp number in international format, no "+" or "0".
  // Example for an Indonesian number 0812-3456-7890 -> "6281234567890"
  whatsapp: '6281234567890',
  alamat: 'Padang Pasir IV No.28A, Padang Pasir, Kec. Padang Barat, Kota Padang, Sumatera Barat 25115',
  // TODO: fill in real operating hours
  jam: 'Buka setiap hari · 09.00 – 21.00 WIB',
  maps: 'https://maps.google.com/?q=Padang+Pasir+IV+No.28A+Padang+Barat+Padang+Sumatera+Barat',
  instagram: 'https://instagram.com/rizkaaudio_padang',
  facebook: 'https://www.facebook.com/share/17ukY5S5d8/',
}

// Brands currently carried (shown on the Kontak page).
export const merek = [
  'Pioneer', 'Nakamichi', 'Kicx', 'Blaupunkt', 'Embassy', 'Pegasus',
  'LM Audio', 'Sansui', 'Autolab', 'a/d/x', 'Acoustic', 'CTION',
  'Macrone', 'Venom', 'M Acoustic', 'Emazer', 'ORCA', 'Carman', 'JBL',
]

export function waLink(judul) {
  const text = `Halo Rizka Audio, saya mau tanya tentang produk: ${judul}`
  return `https://wa.me/${toko.whatsapp}?text=${encodeURIComponent(text)}`
}
