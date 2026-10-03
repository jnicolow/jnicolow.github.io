<template>
  <section id="projects" class="section-block section-light">
    <div class="site-wrap">
      <h2 class="section-title">
        Projects
      </h2>

      <div class="project-list">
        <article
          v-for="(project, i) in displayedProjects"
          :key="i"
          class="project-item"
        >
          <div class="project-meta font-mono">{{ project.dates }}</div>
          <div class="project-body">
            <h3 class="font-display project-title">
              {{ project.title }}
              <span v-if="project.subtitle" class="project-sub"> — {{ project.subtitle }}</span>
            </h3>
            <p class="project-desc">{{ project.description }}</p>
            <div v-if="project.cites?.length" class="cite-row">
              <button
                v-for="cite in project.cites"
                :key="cite"
                type="button"
                class="cite-chip"
                :title="citeTitle(cite)"
                @click="goToPub(cite)"
              >
                {{ citeLabel(cite) }}
              </button>
            </div>
            <div class="row q-gutter-sm q-mt-sm">
              <span v-for="tag in project.tags" :key="tag" class="tech-tag">{{ tag }}</span>
            </div>
            <button
              v-if="projectImage(project)"
              type="button"
              class="project-poster"
              :aria-label="`View poster for ${project.title}`"
              @click="openPoster(project)"
            >
              <img
                :src="projectImage(project)"
                :alt="`Poster for ${project.title}`"
              />
              <span class="project-poster-hint font-mono">View poster</span>
            </button>
            <div v-if="githubLinks(project).length" class="project-links">
              <a
                v-for="link in githubLinks(project)"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link font-mono"
              >
                {{ link.label }}
                <q-icon name="mdi-arrow-top-right" size="14px" class="q-ml-xs" />
              </a>
            </div>
          </div>
        </article>
      </div>

      <div v-if="canToggleProjects" class="row justify-center q-mt-xl">
        <button type="button" class="expand-btn font-mono" @click="expanded = !expanded">
          {{ expanded ? 'Show fewer projects' : 'Show all projects' }}
          <q-icon :name="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="18px" class="q-ml-xs" />
        </button>
      </div>
    </div>

    <q-dialog v-model="posterOpen" maximized transition-show="fade" transition-hide="fade">
      <div class="poster-backdrop flex flex-center" @click="posterOpen = false">
        <q-btn
          flat
          round
          dense
          icon="close"
          color="white"
          size="lg"
          class="poster-close"
          @click.stop="posterOpen = false"
        />
        <img
          v-if="activePoster"
          :src="activePoster.src"
          :alt="activePoster.alt"
          class="poster-full"
          @click.stop
        />
      </div>
    </q-dialog>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { projects, projectSettings, publicationsByCite } from 'src/data/resume'
import { resolveProjectImage } from 'src/data/media'
import { goToPublication } from 'src/composables/goToPublication'

const expanded = ref(false)
const posterOpen = ref(false)
const activePoster = ref(null)

const projectLimit = projectSettings.collapsedCount ?? 4

const displayedProjects = computed(() => {
  if (expanded.value) return projects
  return projects.slice(0, projectLimit)
})

const canToggleProjects = computed(() => projects.length > projectLimit)

function projectImage (project) {
  return resolveProjectImage(project.image)
}

function openPoster (project) {
  const src = projectImage(project)
  if (!src) return
  activePoster.value = { src, alt: `Poster for ${project.title}` }
  posterOpen.value = true
}

/** Normalize `github` (string) or `githubs` (string[] / {label,url}[]) into link chips. */
function githubLinks (project) {
  const raw = project.githubs ?? project.github
  if (!raw) return []
  const list = Array.isArray(raw) ? raw : [raw]
  return list
    .map((item) => {
      if (!item) return null
      if (typeof item === 'string') {
        const name = item.replace(/\/$/, '').split('/').pop() || 'GitHub'
        return { label: name, url: item }
      }
      if (item.url) {
        return { label: item.label || 'GitHub', url: item.url }
      }
      return null
    })
    .filter(Boolean)
}

function citeLabel (cite) {
  return publicationsByCite[cite]?.short || cite
}

function citeTitle (cite) {
  const pub = publicationsByCite[cite]
  return pub ? `${cite}: ${pub.title}` : cite
}

function goToPub (cite) {
  return goToPublication(cite)
}
</script>

<style lang="scss" scoped>
.project-list {
  display: flex;
  flex-direction: column;
}

.project-item {
  display: grid;
  grid-template-columns: minmax(7rem, 9rem) 1fr;
  gap: 1rem 1.75rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(12, 44, 52, 0.1);

  &:last-child {
    border-bottom: 1px solid rgba(12, 44, 52, 0.1);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
}

.project-meta {
  font-size: 0.76rem;
  color: #5c736e;
  padding-top: 0.35rem;
}

.project-title {
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0c2c34;
  margin: 0 0 0.5rem;
  line-height: 1.25;
}

.project-sub {
  font-weight: 500;
  color: #2a7a6e;
}

.project-desc {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.7;
  color: #3d524e;
  max-width: 46rem;
}

.cite-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.65rem;
}

.cite-chip {
  appearance: none;
  border: 1px solid rgba(42, 122, 110, 0.3);
  background: rgba(42, 122, 110, 0.08);
  color: #2a7a6e;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 5px 10px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;

  &:hover {
    background: rgba(42, 122, 110, 0.16);
    border-color: rgba(42, 122, 110, 0.5);
    transform: translateY(-1px);
  }
}

.project-poster {
  appearance: none;
  display: block;
  margin-top: 1rem;
  padding: 0;
  border: 1px solid rgba(12, 44, 52, 0.12);
  border-radius: 10px;
  overflow: hidden;
  background: #eef4f2;
  max-width: min(100%, 22rem);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  &:hover {
    border-color: rgba(42, 122, 110, 0.45);
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(12, 44, 52, 0.12);
  }
}

.project-poster-hint {
  display: block;
  padding: 0.55rem 0.75rem;
  font-size: 0.72rem;
  color: #5c736e;
  background: rgba(255, 255, 255, 0.65);
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: 0.85rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.78rem;
  font-weight: 500;
  color: #1a6fb5 !important;
  text-decoration: none;

  &:hover {
    color: #0c2c34 !important;
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

.poster-backdrop {
  background: rgba(12, 44, 52, 0.96);
  width: 100%;
  height: 100%;
  position: relative;
  padding: 3.5rem 1.25rem 1.5rem;
}

.poster-close {
  position: absolute;
  top: 16px;
  right: 24px;
  z-index: 10;
}

.poster-full {
  max-width: min(92vw, 1100px);
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
}
</style>
