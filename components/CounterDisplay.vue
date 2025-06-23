<template>
  <div class="counter-display">
    <div class="counter-value" :class="valueClass">
      {{ count }}
    </div>
    <div class="counter-status">
      <span v-if="isPositive" class="status positive">正の数</span>
      <span v-else-if="isNegative" class="status negative">負の数</span>
      <span v-else class="status zero">ゼロ</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  count: number
  isPositive: boolean
  isNegative: boolean
  isZero: boolean
}

const props = defineProps<Props>()

const valueClass = computed(() => {
  if (props.isPositive) return 'positive'
  if (props.isNegative) return 'negative'
  return 'zero'
})
</script>

<style scoped>
.counter-display {
  text-align: center;
  margin-bottom: 2rem;
}

.counter-value {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.counter-value.positive {
  color: #3182ce;
}

.counter-value.negative {
  color: #e53e3e;
}

.counter-value.zero {
  color: #718096;
}

.counter-status {
  font-size: 0.875rem;
  color: #4a5568;
}

.status {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}

.status.positive {
  background: #ebf8ff;
  color: #2b6cb0;
}

.status.negative {
  background: #fed7d7;
  color: #c53030;
}

.status.zero {
  background: #f7fafc;
  color: #4a5568;
}
</style> 