<template>
  <section id="hero" class="hero-section">
    <div class="hero-media" aria-hidden="true">
      <img
        v-if="heroPhoto"
        :src="heroPhoto"
        class="hero-bg active"
        alt=""
      />
      <div class="hero-scrim" />
    </div>

    <div class="site-wrap hero-content">
      <p class="hero-kicker font-mono">
        UH Mānoa · Honolulu, HI
      </p>

      <h1 class="hero-name font-display">
        {{ personal.name }}
      </h1>

      <p class="hero-tagline">
        {{ personal.tagline }}
      </p>

      <p class="hero-summary">
        {{ personal.summary }}
      </p>

      <div class="hero-actions">
        <button type="button" class="btn-solid" @click="scrollTo('publications')">
          Publications
        </button>
        <button type="button" class="btn-ghost" @click="scrollTo('experience')">
          Employment
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { personal } from 'src/data/resume'
import { heroPhoto } from 'src/data/media'

function scrollTo (id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  min-height: min(92vh, 920px);
  display: flex;
  align-items: flex-end;
  padding: 7rem 0 4.5rem;
  overflow: hidden;
  color: #f4faf8;
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*
   * Keep the subject on the right. Vertically, crop top:bottom ≈ 2:1
   * (object-position y% = fraction of overflow taken from the top).
   */
  object-position: right 66.666%;
}

.hero-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(105deg, rgba(12, 44, 52, 0.88) 0%, rgba(12, 44, 52, 0.55) 48%, rgba(12, 44, 52, 0.28) 100%),
    linear-gradient(0deg, rgba(12, 44, 52, 0.7) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin-left: clamp(18px, 4vw, 28px);
  margin-right: auto;
}

.hero-kicker {
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #c4a574;
  margin: 0 0 1rem;
}

.hero-name {
  font-size: clamp(2.8rem, 8vw, 4.6rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.98;
  margin: 0 0 0.85rem;
  color: #f7fbf9;
}

.hero-tagline {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(1.05rem, 2.4vw, 1.3rem);
  font-weight: 500;
  line-height: 1.35;
  color: rgba(244, 250, 248, 0.9);
  margin: 0 0 1.1rem;
  max-width: 34rem;
}

.hero-summary {
  font-size: 1.02rem;
  line-height: 1.7;
  color: rgba(238, 244, 242, 0.82);
  margin: 0 0 2rem;
  max-width: 36rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn-solid,
.btn-ghost {
  font-family: 'Figtree', sans-serif;
  font-size: 0.92rem;
  font-weight: 650;
  border-radius: 6px;
  padding: 12px 22px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.btn-solid {
  border: none;
  background: #2a7a6e;
  color: #f4faf8;

  &:hover {
    background: #329184;
    transform: translateY(-2px);
  }
}

.btn-ghost {
  border: 1px solid rgba(244, 250, 248, 0.35);
  background: transparent;
  color: #f4faf8;

  &:hover {
    border-color: rgba(196, 165, 116, 0.7);
    color: #c4a574;
    transform: translateY(-2px);
  }
}

@media (max-width: 600px) {
  .hero-section {
    min-height: 88vh;
    padding-bottom: 3.5rem;
  }
}
</style>
