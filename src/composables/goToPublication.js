import { nextTick, ref } from 'vue'
import {
  publicationSettings,
  publicationsJournals,
  publicationsPosters,
  pubAnchorId
} from 'src/data/resume'

/** Shared so cite chips can reveal collapsed pubs before scrolling. */
export const journalsExpanded = ref(false)
export const postersExpanded = ref(false)

export async function goToPublication (cite) {
  if (!cite) return

  const journalLimit = publicationSettings.journalsCollapsedCount ?? 4
  const posterLimit = publicationSettings.postersCollapsedCount ?? 3

  const jIdx = publicationsJournals.findIndex((p) => p.cite === cite)
  if (jIdx >= journalLimit) journalsExpanded.value = true

  const pIdx = publicationsPosters.findIndex((p) => p.cite === cite)
  if (pIdx >= posterLimit) postersExpanded.value = true

  await nextTick()

  const el = document.getElementById(pubAnchorId(cite))
  if (!el) return

  const headerOffset = 80
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
  el.classList.remove('pub-flash')
  void el.offsetWidth
  el.classList.add('pub-flash')
  window.setTimeout(() => el.classList.remove('pub-flash'), 1600)
}
