<template>
  <section id="projects" class="section-block section-light">
    <div class="site-wrap">
      <h2 class="section-title">
        Projects
      </h2>

      <div class="project-list">
        <article
          v-for="(project, i) in projects"
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
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link font-mono"
            >
              GitHub
              <q-icon name="mdi-arrow-top-right" size="14px" class="q-ml-xs" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects, publicationsByCite, pubAnchorId } from 'src/data/resume'

function citeLabel (cite) {
  return publicationsByCite[cite]?.short || cite
}

function citeTitle (cite) {
  const pub = publicationsByCite[cite]
  return pub ? `${cite}: ${pub.title}` : cite
}

function goToPub (cite) {
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

.project-link {
  display: inline-flex;
  align-items: center;
  margin-top: 0.85rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: #1a6fb5 !important;
  text-decoration: none;

  &:hover {
    color: #0c2c34 !important;
  }
}
</style>
