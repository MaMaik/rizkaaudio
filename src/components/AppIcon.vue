<script setup>
// Single source of truth for icons (consistent stroke set + WhatsApp brand glyph).
// Usage: <AppIcon name="search" class="w-5 h-5" />
const props = defineProps({
  name: { type: String, required: true },
})

const paths = {
  search: ['<circle cx="11" cy="11" r="7" />', '<path d="m21 21-4.3-4.3" />'],
  menu: ['<path d="M4 6h16" />', '<path d="M4 12h16" />', '<path d="M4 18h16" />'],
  close: ['<path d="M6 6l12 12" />', '<path d="M18 6 6 18" />'],
  'chevron-left': ['<path d="m15 18-6-6 6-6" />'],
  'chevron-right': ['<path d="m9 18 6-6-6-6" />'],
  'arrow-right': ['<path d="M5 12h14" />', '<path d="m13 5 7 7-7 7" />'],
  'map-pin': [
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />',
    '<circle cx="12" cy="10" r="3" />',
  ],
  phone: [
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />',
  ],
  instagram: [
    '<rect x="2" y="2" width="20" height="20" rx="5" />',
    '<circle cx="12" cy="12" r="4" />',
    '<path d="M17.5 6.5h.01" />',
  ],
  facebook: [
    '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />',
  ],
  // category glyphs
  speaker: [
    '<rect x="6" y="2" width="12" height="20" rx="2" />',
    '<circle cx="12" cy="14" r="4" />',
    '<circle cx="12" cy="6" r="1.4" />',
  ],
  subwoofer: ['<circle cx="12" cy="12" r="9" />', '<circle cx="12" cy="12" r="4" />'],
  tweeter: [
    '<rect x="4" y="4" width="16" height="16" rx="8" />',
    '<circle cx="12" cy="12" r="2.5" />',
  ],
  amplifier: [
    '<rect x="2" y="6" width="20" height="12" rx="2" />',
    '<circle cx="8" cy="12" r="2" />',
    '<circle cx="16" cy="12" r="2" />',
  ],
  'head-unit': [
    '<rect x="3" y="4" width="18" height="16" rx="2" />',
    '<path d="M7 8h6" />',
    '<path d="M7 12h10" />',
  ],
  box: ['<path d="M3 7l9-4 9 4v10l-9 4-9-4Z" />', '<path d="M3 7l9 4 9-4" />', '<path d="M12 11v10" />'],
  grid: ['<rect x="3" y="3" width="7" height="7" rx="1" />', '<rect x="14" y="3" width="7" height="7" rx="1" />', '<rect x="3" y="14" width="7" height="7" rx="1" />', '<rect x="14" y="14" width="7" height="7" rx="1" />'],
  star: ['<path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9Z" />'],
}

const categoryMap = {
  Speaker: 'speaker',
  Subwoofer: 'subwoofer',
  Tweeter: 'tweeter',
  'Power Amplifier': 'amplifier',
  'Head Unit': 'head-unit',
  'Box Subwoofer': 'box',
}
</script>

<template>
  <svg
    v-if="name !== 'whatsapp'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="inline-block"
    aria-hidden="true"
    v-html="(paths[name] || paths[categoryMap[name]] || paths.box).join('')"
  />
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="inline-block"
    aria-hidden="true"
  >
    <path
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.4 1.31-1.93 1.36-.5.05-1.14.07-1.84-.12-.42-.13-.97-.31-1.66-.61-2.93-1.27-4.84-4.21-4.99-4.41-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.24.59.82 2.02.89 2.17.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12.99 2.06 1.3 2.36 1.44.3.15.47.12.64-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.69-.17 1.37Z"
    />
  </svg>
</template>
