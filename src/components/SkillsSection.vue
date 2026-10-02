<template>
  <section id="skills" class="section-block section-light">
    <div class="site-wrap">
      <h2 class="section-title">
        Skills
      </h2>

      <div class="row q-col-gutter-lg">
        <div
          v-for="(items, category) in skills"
          :key="category"
          class="col-12 col-sm-6"
        >
          <div class="skill-card q-pa-lg">
              <div class="row items-center q-mb-md">
                <q-icon :name="categoryIcon(category)" color="primary" size="24px" class="q-mr-sm" />
                <h3 class="font-display text-subtitle1 text-weight-bold q-ma-none skill-cat">
                  {{ category }}
                </h3>
              </div>
              <div class="row q-gutter-sm">
                <q-chip
                  v-for="skill in items"
                  :key="skill"
                  class="skill-chip"
                  outline
                  color="primary"
                  size="md"
                >
                  {{ skill }}
                </q-chip>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from 'src/data/resume'

function categoryIcon (cat) {
  const map = {
    Languages: 'mdi-code-braces',
    'ML & DL': 'mdi-brain',
    Geospatial: 'mdi-earth',
    'Misc.': 'mdi-text-box-outline',
    'Frameworks & Tools': 'mdi-wrench-outline',
    'Libraries & ML': 'mdi-brain',
    'Platforms & Infrastructure': 'mdi-cloud-outline'
  }
  return map[cat] || 'mdi-chip'
}
</script>

<style lang="scss" scoped>
.skill-cat {
  color: #0c2c34;
}

.skill-card {
  background: #ffffff;
  border: 1px solid rgba(12, 44, 52, 0.08);
  border-radius: 12px;
  box-shadow: 0 6px 22px rgba(12, 44, 52, 0.05);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(42, 122, 110, 0.28);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(12, 44, 52, 0.08);
  }
}
</style>
