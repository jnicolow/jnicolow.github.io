<template>
  <section id="publications" class="section-block section-light publications-section">
    <div class="site-wrap">
      <div class="pubs-header">
        <h2 class="section-title q-mb-none">
          Publications
        </h2>
        <a
          v-if="personal.scholar"
          :href="personal.scholar"
          target="_blank"
          rel="noopener noreferrer"
          class="scholar-link font-mono"
        >
          Google Scholar
          <q-icon name="mdi-open-in-new" size="14px" class="q-ml-xs" />
        </a>
      </div>

      <p class="pubs-lede">
        Journal articles and conference posters.
      </p>

      <h3 class="pubs-subhead font-display">Journal articles</h3>

      <article
        v-for="(pub, i) in displayedJournals"
        :key="pub.cite || i"
        :id="pubAnchorId(pub.cite)"
        class="journal-card"
      >
        <div v-if="pubImage(pub)" class="journal-thumb">
          <img :src="pubImage(pub)" :alt="`Figure for ${pub.title}`" />
        </div>

        <div class="journal-body">
          <div class="journal-meta">
            <span v-if="pub.cite" class="cite-badge font-mono">{{ pub.cite }}</span>
            <span class="venue-pill font-mono">{{ pub.venue }}</span>
            <span v-if="pub.date" class="pub-date font-mono">{{ pub.date }}</span>
          </div>

          <h4 class="journal-title font-display">{{ pub.title }}</h4>
          <p class="journal-authors" v-html="highlightSelf(pub.authors)" />

          <div v-if="pub.tags?.length" class="row q-gutter-sm q-mt-md">
            <span v-for="tag in pub.tags" :key="tag" class="tech-tag">{{ tag }}</span>
          </div>

          <q-btn
            v-if="pub.link"
            :href="pub.link"
            target="_blank"
            rel="noopener noreferrer"
            unelevated
            no-caps
            color="primary"
            text-color="white"
            class="pub-btn q-mt-md"
            padding="10px 18px"
            :label="pub.linkLabel || 'Journal article'"
            icon-right="mdi-open-in-new"
          />
        </div>
      </article>

      <div v-if="canToggleJournals" class="row justify-center q-mt-md q-mb-lg">
        <button type="button" class="expand-btn font-mono" @click="journalsExpanded = !journalsExpanded">
          {{ journalsExpanded ? 'Show fewer articles' : 'Show all journal articles' }}
          <q-icon :name="journalsExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="18px" class="q-ml-xs" />
        </button>
      </div>

      <h3 class="pubs-subhead font-display q-mt-xl">Conference posters &amp; talks</h3>

      <div class="poster-grid">
        <article
          v-for="(p, k) in displayedPosters"
          :key="p.cite || k"
          :id="pubAnchorId(p.cite)"
          class="poster-card"
          :class="{ 'has-thumb': !!pubImage(p) }"
        >
          <div v-if="pubImage(p)" class="poster-thumb">
            <img :src="pubImage(p)" :alt="p.title" />
          </div>
          <div class="poster-body">
            <div class="font-mono text-caption cite-inline">{{ p.cite }}</div>
            <h4 class="poster-title">{{ p.title }}</h4>
            <p class="poster-venue font-mono">{{ p.venue }}</p>
            <div v-if="p.tags?.length" class="row q-gutter-sm q-mt-sm">
              <span v-for="tag in p.tags" :key="tag" class="tech-tag">{{ tag }}</span>
            </div>
            <q-btn
              v-if="p.link"
              :href="p.link"
              target="_blank"
              rel="noopener noreferrer"
              unelevated
              no-caps
              color="primary"
              text-color="white"
              class="pub-btn pub-btn--compact q-mt-sm"
              padding="8px 14px"
              :label="p.linkLabel || 'Poster'"
              icon-right="mdi-open-in-new"
            />
          </div>
        </article>
      </div>

      <div v-if="canTogglePosters" class="row justify-center q-mt-lg">
        <button type="button" class="expand-btn font-mono" @click="postersExpanded = !postersExpanded">
          {{ postersExpanded ? 'Show fewer posters' : 'Show all conference posters' }}
          <q-icon :name="postersExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="18px" class="q-ml-xs" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import {
  personal,
  publicationsJournals,
  publicationsPosters,
  publicationSettings,
  pubAnchorId
} from 'src/data/resume'
import { resolvePubImage } from 'src/data/media'
import { journalsExpanded, postersExpanded } from 'src/composables/goToPublication'

const journalLimit = publicationSettings.journalsCollapsedCount ?? 4
const posterLimit = publicationSettings.postersCollapsedCount ?? 3

const displayedJournals = computed(() => {
  if (journalsExpanded.value) return publicationsJournals
  return publicationsJournals.slice(0, journalLimit)
})

const canToggleJournals = computed(() => publicationsJournals.length > journalLimit)

const displayedPosters = computed(() => {
  if (postersExpanded.value) return publicationsPosters
  return publicationsPosters.slice(0, posterLimit)
})

const canTogglePosters = computed(() => publicationsPosters.length > posterLimit)

function pubImage (item) {
  return resolvePubImage(item.image)
}

function highlightSelf (authors) {
  if (!authors) return ''
  return authors.replace(
    /(J\.?\s*C\.?\s*Nicolow|Joel\s*C\.?\s*Nicolow|J\.\s*Nicolow)/gi,
    '<strong class="self-author">$1</strong>'
  )
}
</script>

<style lang="scss" scoped>
.pubs-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.pubs-header .section-title {
  margin-bottom: 0;
}

.scholar-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.78rem;
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid rgba(12, 44, 52, 0.14);
  color: #0c2c34 !important;
  background: #fff;
  transition: all 0.2s ease;

  &:hover {
    border-color: #2a7a6e;
    color: #2a7a6e !important;
  }
}

.pubs-lede {
  font-size: 1.02rem;
  line-height: 1.7;
  max-width: 40rem;
  margin: 0 0 2rem;
  color: #4a605b;
}

.pubs-subhead {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0c2c34;
  letter-spacing: -0.02em;
  margin: 0 0 1.15rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid rgba(42, 122, 110, 0.35);
  display: inline-block;
}

.journal-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.35rem;
  align-items: start;
  background: #fff;
  border: 1px solid rgba(12, 44, 52, 0.08);
  border-radius: 4px 14px 14px 4px;
  border-left: 4px solid #2a7a6e;
  padding: 1.35rem 1.4rem;
  margin-bottom: 1.1rem;
  box-shadow: 0 6px 22px rgba(12, 44, 52, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(12, 44, 52, 0.09);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.journal-thumb {
  width: 112px;
  height: 112px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(12, 44, 52, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.journal-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.55rem;
}

.cite-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(42, 122, 110, 0.12);
  color: #2a7a6e;
}

.venue-pill {
  font-size: 0.72rem;
  font-weight: 600;
  color: #0c2c34;
  background: rgba(12, 44, 52, 0.06);
  padding: 2px 9px;
  border-radius: 999px;
}

.pub-date {
  font-size: 0.74rem;
  color: #5c736e;
}

.journal-title {
  font-size: clamp(1.08rem, 2.2vw, 1.28rem);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #0c2c34;
  margin: 0 0 0.55rem;
}

.journal-authors {
  font-size: 0.92rem;
  line-height: 1.65;
  color: #4a605b;
  margin: 0;

  :deep(.self-author) {
    color: #0c2c34;
    font-weight: 700;
  }
}

.poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 0.95rem;
}

.poster-card {
  background: #fff;
  border: 1px solid rgba(12, 44, 52, 0.08);
  border-radius: 12px;
  padding: 1.05rem 1.1rem;
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  box-shadow: 0 4px 16px rgba(12, 44, 52, 0.04);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:not(.has-thumb) {
    flex-direction: column;
  }
}

.poster-thumb {
  width: 68px;
  height: 68px;
  border-radius: 7px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(12, 44, 52, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.cite-inline {
  color: #2a7a6e;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.poster-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 0.95rem;
  font-weight: 650;
  line-height: 1.35;
  color: #0c2c34;
  margin: 0 0 0.3rem;
}

.poster-venue {
  font-size: 0.72rem;
  line-height: 1.5;
  color: #5c736e;
  margin: 0;
}

.pub-btn {
  font-family: 'Figtree', sans-serif !important;
  font-weight: 650 !important;
  font-size: 0.88rem !important;
  border-radius: 6px !important;
  letter-spacing: -0.01em;

  &--compact {
    font-size: 0.8rem !important;
  }
}

.journal-card,
.poster-card {
  scroll-margin-top: 88px;
}

.journal-card.pub-flash,
.poster-card.pub-flash {
  animation: pubFlash 1.4s ease;
}

@keyframes pubFlash {
  0% {
    box-shadow: 0 0 0 0 rgba(42, 122, 110, 0.55);
  }
  35% {
    box-shadow: 0 0 0 4px rgba(42, 122, 110, 0.35), 0 10px 28px rgba(12, 44, 52, 0.12);
  }
  100% {
    box-shadow: 0 6px 22px rgba(12, 44, 52, 0.05);
  }
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(42, 122, 110, 0.35);
  background: transparent;
  color: #2a7a6e;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #2a7a6e;
    background: rgba(42, 122, 110, 0.08);
  }
}
</style>
