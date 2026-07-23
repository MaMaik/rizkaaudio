import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Beranda' } },
  {
    path: '/produk',
    name: 'produk',
    component: () => import('../views/Produk.vue'),
    meta: { title: 'Katalog Produk' },
  },
  {
    path: '/produk/:slug',
    name: 'produk-detail',
    component: () => import('../views/ProdukDetail.vue'),
    props: true,
    meta: { title: 'Detail Produk' },
  },
  {
    path: '/kontak',
    name: 'kontak',
    component: () => import('../views/Kontak.vue'),
    meta: { title: 'Kontak' },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'Rizka Audio Padang'
  document.title = to.meta?.title ? `${to.meta.title} — ${base}` : base
})

export default router
