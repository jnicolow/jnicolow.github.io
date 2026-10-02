<template>
  <q-layout view="hHh lpR fFf" class="site-shell">
    <q-header class="main-header" :class="{ 'header-scrolled': scrolled, 'header-hidden': headerHidden }">
      <q-toolbar class="site-wrap header-bar">
        <a href="#hero" class="wordmark" @click.prevent="scrollTo('hero')">
          <span class="wordmark-name font-display">{{ personal.name }}</span>
        </a>

        <div class="gt-sm row items-center nav-cluster">
          <a
            :href="cvPdfUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link"
          >
            CV
          </a>
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="'#' + link.id"
            class="nav-link"
            :class="{ active: activeSection === link.id }"
            @click.prevent="scrollTo(link.id)"
          >
            {{ link.label }}
          </a>
        </div>

        <q-btn flat dense round icon="menu" class="lt-md" color="dark" @click="drawer = !drawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay :width="280" class="mobile-drawer">
      <q-list padding class="q-mt-xl">
        <q-item
          tag="a"
          :href="cvPdfUrl"
          target="_blank"
          rel="noopener noreferrer"
          clickable
          @click="drawer = false"
        >
          <q-item-section>
            <span class="text-subtitle1 text-weight-medium">CV</span>
          </q-item-section>
        </q-item>
        <q-item
          v-for="link in navLinks"
          :key="link.id"
          clickable
          @click="drawerScrollTo(link.id)"
        >
          <q-item-section>
            <span class="text-subtitle1 text-weight-medium">{{ link.label }}</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="site-footer">
      <div class="site-wrap footer-inner">
        <p class="footer-copy font-mono">
          {{ personal.name }} · Honolulu
        </p>
        <div class="footer-socials">
          <a :href="personal.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <q-icon name="mdi-github" size="20px" />
          </a>
          <a
            v-if="personal.scholar"
            :href="personal.scholar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
          >
            <q-icon name="mdi-school-outline" size="20px" />
          </a>
          <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <q-icon name="mdi-linkedin" size="20px" />
          </a>
          <a :href="'mailto:' + personal.email" aria-label="Email">
            <q-icon name="mdi-email-outline" size="20px" />
          </a>
        </div>
      </div>
    </q-footer>

    <transition name="fade-up">
      <q-btn
        v-show="scrolled"
        round
        flat
        icon="mdi-chevron-up"
        class="back-to-top"
        aria-label="Back to top"
        @click="scrollToTop"
      />
    </transition>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { personal } from 'src/data/resume'
import { cvPdfUrl } from 'src/data/media'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Employment' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'gallery', label: 'Field' },
  { id: 'contact', label: 'Contact' }
]

const drawer = ref(false)
const scrolled = ref(false)
const headerHidden = ref(false)
const activeSection = ref('hero')
let lastScroll = 0

function scrollTo (id) {
  const el = document.getElementById(id)
  if (!el) return
  const headerOffset = 72
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

function drawerScrollTo (id) {
  drawer.value = false
  setTimeout(() => scrollTo(id), 300)
}

function scrollToTop () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onScroll () {
  const current = window.scrollY
  scrolled.value = current > 50
  headerHidden.value = current > lastScroll && current > 220
  lastScroll = current

  const scrollPos = current + window.innerHeight / 3
  let currentId = 'hero'
  for (const link of navLinks) {
    const section = document.getElementById(link.id)
    if (section && section.offsetTop <= scrollPos) {
      currentId = link.id
    }
  }
  activeSection.value = currentId
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style lang="scss" scoped>
.site-shell {
  background: #eef4f2;
}

.main-header {
  background: rgba(238, 244, 242, 0.82);
  backdrop-filter: blur(16px) saturate(1.2);
  border-bottom: 1px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  color: #0c2c34;
}

.header-scrolled {
  border-bottom-color: rgba(12, 44, 52, 0.08);
  box-shadow: 0 8px 28px rgba(12, 44, 52, 0.06);
}

.header-hidden {
  transform: translateY(-100%);
}

.header-bar {
  min-height: 64px;
}

.wordmark {
  text-decoration: none;
  color: #0c2c34;
  margin-right: auto;
}

.wordmark-name {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.nav-cluster {
  gap: 0.15rem 1.15rem;
}

.nav-link {
  color: rgba(12, 44, 52, 0.62);
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  padding: 6px 0;
  transition: color 0.2s ease;

  &:hover,
  &.active {
    color: #2a7a6e;
  }
}

.mobile-drawer {
  background: #eef4f2 !important;
  border-left: 1px solid rgba(12, 44, 52, 0.08);
  color: #0c2c34;
}

.site-footer {
  background: #0c2c34;
  color: rgba(238, 244, 242, 0.75);
  padding: 1.35rem 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-copy {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}

.footer-socials {
  display: flex;
  gap: 1.1rem;

  a {
    color: rgba(238, 244, 242, 0.65);
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: #9fd4cb;
      transform: translateY(-2px);
    }
  }
}

.back-to-top {
  position: fixed;
  bottom: 28px;
  right: 24px;
  z-index: 100;
  color: #2a7a6e !important;
  border: 1px solid rgba(42, 122, 110, 0.25);
  background: rgba(238, 244, 242, 0.9) !important;
  backdrop-filter: blur(8px);

  &:hover {
    border-color: rgba(42, 122, 110, 0.5);
    transform: translateY(-2px);
  }
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
