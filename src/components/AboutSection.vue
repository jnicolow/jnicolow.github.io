<template>
  <section id="about" class="section-block section-light">
    <div class="site-wrap">
      <h2 class="section-title">
        About
      </h2>

      <div class="row q-col-gutter-xl items-start">
        <div :class="hasAboutPhotos ? 'col-12 col-md-7' : 'col-12'">
          <p
            v-for="(para, i) in personal.about"
            :key="i"
            class="about-text text-grey-4 q-mb-md"
            v-html="para"
          />

          <div class="q-mt-lg row q-gutter-md">
            <div
              v-for="(stat, i) in personal.aboutStats"
              :key="i"
              class="about-stat"
            >
              <div class="about-stat-value font-display text-primary">{{ stat.value }}</div>
              <div class="about-stat-label text-grey-6 font-mono">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div v-if="hasAboutPhotos" class="col-12 col-md-5">
          <div class="photo-mosaic">
            <div class="mosaic-tall mosaic-cell">
              <q-img
                v-if="mosaicSlots[0]"
                :key="'t-' + String(mosaicSlots[0])"
                :src="mosaicSlots[0]"
                alt="About photo"
                class="mosaic-img"
              />
              <div v-else class="mosaic-placeholder" aria-hidden="true" />
            </div>
            <div class="mosaic-square mosaic-cell">
              <q-img
                v-if="mosaicSlots[1]"
                :key="'s-' + String(mosaicSlots[1])"
                :src="mosaicSlots[1]"
                alt="About photo"
                class="mosaic-img"
              />
              <div v-else class="mosaic-placeholder" aria-hidden="true" />
            </div>
            <div class="mosaic-wide mosaic-cell">
              <q-img
                v-if="mosaicSlots[2]"
                :key="'w-' + String(mosaicSlots[2])"
                :src="mosaicSlots[2]"
                alt="About photo"
                class="mosaic-img"
              />
              <div v-else class="mosaic-placeholder" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { personal } from 'src/data/resume'
import { aboutMosaicPhotos } from 'src/data/media'

const hasAboutPhotos = computed(() => aboutMosaicPhotos.some(Boolean))

/** [tall, square, wide] — fixed in `src/data/media.js` */
const mosaicSlots = computed(() => {
  const out = aboutMosaicPhotos.map((url) => url || null)
  while (out.length < 3) out.push(null)
  return out.slice(0, 3)
})
</script>

<style lang="scss" scoped>
.about-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3d524e;

  :deep(strong) {
    color: #0c2c34;
    font-weight: 700;
  }
}

.about-stat {
  padding: 12px 18px;
  border-left: 3px solid #2a7a6e;

  &-value {
    font-size: 1.05rem;
    font-weight: 700;
    color: #2a7a6e;
  }

  &-label {
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-top: 2px;
    color: #5c736e;
  }
}

.photo-mosaic {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 14px;
  max-width: 440px;
  margin: 0 auto;
}

.mosaic-cell {
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18);
  }
}

.mosaic-tall {
  grid-row: 1 / 3;
  border-radius: 40% 8px 8px 16px;
  aspect-ratio: 2 / 3;
}

.mosaic-wide {
  border-radius: 8px 24px 4px 8px;
  aspect-ratio: 4 / 3;
}

.mosaic-square {
  border-radius: 8px 4px 32% 8px;
  aspect-ratio: 1;
}

.mosaic-img {
  width: 100%;
  height: 100%;
  filter: saturate(0.85);
  transition: filter 0.4s ease, transform 0.5s ease;

  :deep(img) {
    object-fit: cover;
  }

  &:hover {
    filter: saturate(1);
    transform: scale(1.03);
  }
}

.mosaic-placeholder {
  width: 100%;
  height: 100%;
  min-height: 80px;
  background: rgba(53, 84, 49, 0.22);
  border: 1px dashed rgba(240, 211, 160, 0.18);
}
</style>
