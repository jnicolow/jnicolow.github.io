<template>
  <section id="contact" class="section-block section-ink">
    <div class="site-wrap contact-inner">
      <h2 class="section-title">
        Contact
      </h2>

      <p class="contact-blurb">
        {{ personal.contactBlurb }}
      </p>

      <a :href="'mailto:' + personal.email" class="contact-email font-display">
        {{ personal.email }}
      </a>

      <div class="contact-links">
        <a :href="personal.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a
          v-if="personal.scholar"
          :href="personal.scholar"
          target="_blank"
          rel="noopener noreferrer"
        >Scholar</a>
        <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a
          :href="cvPdfUrl"
          target="_blank"
          rel="noopener noreferrer"
        >CV</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { personal } from 'src/data/resume'
import { cvPdfUrl } from 'src/data/media'
</script>

<style lang="scss" scoped>
.contact-inner {
  max-width: 640px;
}

.contact-blurb {
  font-size: 1.08rem;
  line-height: 1.75;
  color: rgba(238, 244, 242, 0.75);
  margin: -1rem 0 1.75rem;
}

.contact-email {
  display: inline-block;
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #9fd4cb !important;
  border-bottom: 2px solid rgba(159, 212, 203, 0.35);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #c4a574 !important;
    border-color: rgba(196, 165, 116, 0.55);
  }
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-top: 2rem;

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8rem;
    color: rgba(238, 244, 242, 0.65) !important;
    letter-spacing: 0.02em;

    &:hover {
      color: #c4a574 !important;
    }
  }
}
</style>
