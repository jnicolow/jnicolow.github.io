<template>
  <section id="education" class="section-block">
    <div class="site-wrap">
      <h2 class="section-title">
        Education
      </h2>

      <q-card
        v-for="(deg, idx) in educationDegrees"
        :key="idx"
        class="glass-card q-mb-lg edu-card"
      >
        <q-card-section class="q-pa-lg">
          <div class="row items-start justify-between q-mb-sm" style="gap: 12px">
            <div>
              <div class="font-display text-h6 text-weight-bold edu-school">{{ deg.school }}</div>
              <div class="edu-degree">{{ deg.degree }}</div>
              <div class="text-caption q-mt-xs edu-loc">{{ deg.location }}</div>
            </div>
            <span class="font-mono text-caption edu-dates">{{ deg.dates }}</span>
          </div>
          <div v-if="deg.detail" class="q-mt-md">
            <span class="font-mono edu-label text-caption">Thesis</span>
            <p class="q-mt-xs edu-detail">
              {{ deg.detail }}
            </p>
          </div>
        </q-card-section>
      </q-card>

      <div class="row q-col-gutter-lg">
        <div v-if="leadership.bullets.length" class="col-12 col-md-6">
          <q-card class="glass-card full-height">
            <q-card-section class="q-pa-lg">
              <div class="row items-center q-mb-sm">
                <q-icon name="mdi-account-group-outline" color="primary" size="22px" class="q-mr-sm" />
                <span class="font-display text-subtitle1 text-white text-weight-bold">Leadership</span>
              </div>
              <div class="text-white text-weight-medium q-mb-xs">{{ leadership.title }}</div>
              <div class="font-mono text-grey-6 text-caption q-mb-sm">{{ leadership.dates }}</div>
              <div
                v-for="(bullet, i) in leadership.bullets"
                :key="i"
                class="row no-wrap q-mb-xs"
              >
                <span class="text-primary q-mr-sm" style="flex-shrink: 0; margin-top: 2px">&#9656;</span>
                <span class="text-grey-4" style="font-size: 0.85rem; line-height: 1.65">{{ bullet }}</span>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div :class="leadership.bullets.length ? 'col-12 col-md-6' : 'col-12'">
          <q-card class="glass-card full-height">
            <q-card-section class="q-pa-lg">
              <div class="row items-center q-mb-md">
                <q-icon name="mdi-trophy-outline" color="warning" size="22px" class="q-mr-sm" />
                <span class="font-display text-subtitle1 text-weight-bold">Honors & awards</span>
              </div>

              <div
                v-for="(h, hi) in honorsList"
                :key="hi"
                class="q-mb-md"
              >
                <div class="text-weight-medium edu-honor-title">{{ h.title }}</div>
                <div class="font-mono text-caption edu-honor-meta">{{ h.context }} · {{ h.year }}</div>
              </div>

              <template v-if="affiliations.length">
                <q-separator dark class="q-mb-md" style="opacity: 0.7" />
                <div v-for="aff in affiliations" :key="aff" class="row items-center q-mb-xs">
                  <q-icon name="mdi-chevron-right" color="primary" size="16px" class="q-mr-xs" />
                  <span class="text-grey-4" style="font-size: 0.88rem">{{ aff }}</span>
                </div>
              </template>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  educationDegrees,
  leadership,
  honorsList,
  affiliations
} from 'src/data/resume'
</script>

<style lang="scss" scoped>
.edu-school {
  color: #0c2c34;
}

.edu-degree {
  font-size: 1.02rem;
  font-weight: 600;
  margin-top: 4px;
  color: #2a7a6e;
}

.edu-loc,
.edu-dates {
  color: #5c736e;
}

.edu-dates {
  white-space: nowrap;
}

.edu-label {
  color: #2a7a6e;
}

.edu-detail {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #3d524e;
}

.edu-card {
  border-left: 4px solid #2a7a6e !important;
}

.edu-honor-title {
  color: #0c2c34;
}

.edu-honor-meta {
  color: #5c736e;
}
</style>
