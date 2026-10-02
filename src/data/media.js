/**
 * Site images: `src/assets/media/{hero,about,gallery}/` (see globs below).
 * CV PDF: `src/assets/media/cv/` — imported once as `cvPdfUrl`.
 * Each import.meta.glob MUST use a string literal (Vite limitation).
 */

import cvPdfAsset from '../assets/media/cv/Nicolow_Joel_CV.pdf?url'

/** Resolved URL to the CV PDF (bundled by Vite) */
export const cvPdfUrl = cvPdfAsset

function sortedUrls (modules) {
  return Object.keys(modules)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((path) => {
      const mod = modules[path]
      return typeof mod === 'string' ? mod : mod.default
    })
}

/** Random order each page load — avoids alphabetically similar filenames clustering together */
export function shuffleArray (arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function basenameLabel (path) {
  const base = path.split(/[/\\]/).pop() || 'Photo'
  return base.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
}

const heroModules = {
  ...import.meta.glob('../assets/media/hero/*.jpg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.jpeg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.webp', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.JPEG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.PNG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.WEBP', { eager: true, import: 'default' })
}

const aboutModules = {
  ...import.meta.glob('../assets/media/about/*.jpg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.jpeg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.webp', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.JPEG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.PNG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.WEBP', { eager: true, import: 'default' })
}

const galleryModules = {
  ...import.meta.glob('../assets/media/gallery/*.jpg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.jpeg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.webp', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.JPEG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.PNG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.WEBP', { eager: true, import: 'default' })
}

/** Optional publication thumbs — square crops preferred; basename only in resume.js */
const pubsModules = {
  ...import.meta.glob('../assets/media/pubs/*.jpg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/pubs/*.jpeg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/pubs/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/pubs/*.webp', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/pubs/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/pubs/*.JPEG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/pubs/*.PNG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/pubs/*.WEBP', { eager: true, import: 'default' })
}

export const heroPhotos = sortedUrls(heroModules)

/** Prefer this file when present; otherwise first hero image */
const HERO_PREFERRED = 'kahikinui_station.jpg'

function resolveHeroPreferred () {
  const key = Object.keys(heroModules).find((p) => {
    const normalized = p.replace(/\\/g, '/')
    return normalized.endsWith('/' + HERO_PREFERRED) || normalized.endsWith(HERO_PREFERRED)
  })
  if (!key) return heroPhotos[0] || null
  const mod = heroModules[key]
  return typeof mod === 'string' ? mod : mod.default
}

export const heroPhoto = resolveHeroPreferred()

/** About mosaic slot order: left tall cell, top-right square, bottom wide */
const ABOUT_MOSAIC_FILENAMES = [
  'Kahikinui Station Joel Mos House.jpg',
  'planet_presentation_square.jpg',
  'hcc2024_square.png'
]

function resolveAboutUrl (basename) {
  const key = Object.keys(aboutModules).find((p) => {
    const normalized = p.replace(/\\/g, '/')
    return normalized.endsWith('/' + basename) || normalized.endsWith(basename)
  })
  if (!key) {
    console.warn(`[media] about image not found: ${basename}`)
    return null
  }
  const mod = aboutModules[key]
  return typeof mod === 'string' ? mod : mod.default
}

export const aboutMosaicPhotos = ABOUT_MOSAIC_FILENAMES.map(resolveAboutUrl)

/** Every image in `gallery/` — stable sort; captions derived from filename */
export const galleryItemsAll = Object.keys(galleryModules)
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  .map((path) => {
    const mod = galleryModules[path]
    const src = typeof mod === 'string' ? mod : mod.default
    const caption = basenameLabel(path)
    return {
      src,
      alt: caption || 'Gallery photo',
      caption
    }
  })

/** Resolve optional pub image basename → bundled URL (or null) */
export function resolvePubImage (basename) {
  if (!basename) return null
  const key = Object.keys(pubsModules).find((p) => {
    const normalized = p.replace(/\\/g, '/')
    return normalized.endsWith('/' + basename) || normalized.endsWith(basename)
  })
  if (!key) {
    console.warn(`[media] pubs image not found: ${basename}`)
    return null
  }
  const mod = pubsModules[key]
  return typeof mod === 'string' ? mod : mod.default
}
