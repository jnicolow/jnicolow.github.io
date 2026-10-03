<template>
  <section id="experience" class="section-block section-ink experience-section">
    <div class="site-wrap">
      <h2 class="section-title">
        Employment
      </h2>

      <div class="role-list">
        <article
          v-for="(job, i) in displayedExperience"
          :key="jobKey(job, i)"
          class="role-row"
        >
          <div class="role-when font-mono">{{ job.dates }}</div>
          <div class="role-main">
            <h3 class="font-display role-title">{{ job.title }}</h3>
            <p class="role-company">{{ job.company }}</p>
            <p class="role-location font-mono">{{ job.location }}</p>
            <ul class="role-bullets">
              <li v-for="(bullet, j) in job.bullets" :key="j">
                <span>{{ bulletText(bullet) }}</span>
                <span v-if="bulletCites(bullet).length" class="cite-row">
                  <button
                    v-for="cite in bulletCites(bullet)"
                    :key="cite"
                    type="button"
                    class="cite-chip"
                    :title="citeTitle(cite)"
                    @click="goToPub(cite)"
                  >
                    {{ citeLabel(cite) }}
                  </button>
                </span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div v-if="canToggleExperience" class="row justify-center q-mt-xl">
        <button type="button" class="expand-btn font-mono" @click="expanded = !expanded">
          {{ expanded ? 'Show less' : 'Show all experience' }}
          <q-icon :name="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="18px" class="q-ml-xs" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
  experience,
  experienceSettings,
  normalizeBullet,
  publicationsByCite
} from 'src/data/resume'
import { goToPublication } from 'src/composables/goToPublication'

const expanded = ref(false)

function jobKey (job, i) {
  return `${job.title}|${job.dates}|${job.company}|${i}`
}

function bulletText (bullet) {
  return normalizeBullet(bullet).text
}

function bulletCites (bullet) {
  return normalizeBullet(bullet).cites
}

function citeLabel (cite) {
  const pub = publicationsByCite[cite]
  return pub?.short || cite
}

function citeTitle (cite) {
  const pub = publicationsByCite[cite]
  if (!pub) return cite
  return `${cite}: ${pub.title}`
}

function goToPub (cite) {
  return goToPublication(cite)
}

const displayedExperience = computed(() => {
  if (expanded.value) return experience
  const n = experienceSettings.collapsedCount ?? 3
  const out = []
  for (const job of experience) {
    if (job.expandOnly) continue
    out.push(job)
    if (out.length >= n) break
  }
  return out
})

const canToggleExperience = computed(() => {
  const n = experienceSettings.collapsedCount ?? 3
  let shownNonExpand = 0
  let hasOverflowNonExpand = false
  for (const job of experience) {
    if (job.expandOnly) continue
    if (shownNonExpand < n) {
      shownNonExpand++
    } else {
      hasOverflowNonExpand = true
      break
    }
  }
  const hasExpandOnly = experience.some(j => j.expandOnly)
  return hasOverflowNonExpand || hasExpandOnly
})
</script>

<style lang="scss" scoped>
.role-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.role-row {
  display: grid;
  grid-template-columns: minmax(9rem, 12rem) 1fr;
  gap: 1.25rem 2rem;
  padding: 1.65rem 0;
  border-top: 1px solid rgba(238, 244, 242, 0.12);
  transition: background 0.25s ease;

  &:last-child {
    border-bottom: 1px solid rgba(238, 244, 242, 0.12);
  }

  &:hover {
    background: rgba(238, 244, 242, 0.04);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }
}

.role-when {
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  color: #c4a574;
  padding-top: 0.35rem;
}

.role-title {
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #f4faf8;
  margin: 0 0 0.35rem;
}

.role-company {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
  color: #9fd4cb;
}

.role-location {
  margin: 0.35rem 0 0;
  font-size: 0.76rem;
  color: rgba(238, 244, 242, 0.5);
}

.role-bullets {
  list-style: none;
  margin: 0.9rem 0 0;
  padding: 0;
}

.role-bullets li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.55rem;
  font-size: 0.98rem;
  line-height: 1.7;
  color: rgba(238, 244, 242, 0.82);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 6px;
    height: 2px;
    background: #c4a574;
  }
}

.cite-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.55rem;
}

.cite-chip {
  appearance: none;
  border: 1px solid rgba(196, 165, 116, 0.45);
  background: rgba(196, 165, 116, 0.12);
  color: #e8d2a8;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 5px 10px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;

  &:hover {
    background: rgba(196, 165, 116, 0.22);
    border-color: #c4a574;
    color: #f4faf8;
    transform: translateY(-1px);
  }
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(196, 165, 116, 0.4);
  background: transparent;
  color: #c4a574;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #c4a574;
    background: rgba(196, 165, 116, 0.08);
  }
}
</style>
