<template>
  <div class="counter-controls">
    <div class="button-group">
      <button 
        @click="decrement" 
        class="btn btn-decrement"
        :disabled="isMinReached"
        title="減算"
      >
        -
      </button>
      
      <button 
        @click="increment" 
        class="btn btn-increment"
        :disabled="isMaxReached"
        title="加算"
      >
        +
      </button>
    </div>
    
    <div class="secondary-controls">
      <button 
        @click="reset" 
        class="btn btn-reset"
        title="リセット"
      >
        リセット
      </button>
      
      <div class="input-group">
        <input 
          v-model.number="inputValue" 
          type="number" 
          class="input"
          placeholder="値を設定"
          @keyup.enter="setValueFromInput"
        />
        <button 
          @click="setValueFromInput" 
          class="btn btn-set"
          title="値を設定"
        >
          設定
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  count: number
  minValue?: number
  maxValue?: number
  step?: number
}

interface Emits {
  (e: 'increment'): void
  (e: 'decrement'): void
  (e: 'reset'): void
  (e: 'setValue', value: number): void
}

const props = withDefaults(defineProps<Props>(), {
  minValue: -Infinity,
  maxValue: Infinity,
  step: 1
})

const emit = defineEmits<Emits>()

const inputValue = ref<number | ''>('')

const isMinReached = computed(() => {
  if (props.minValue === -Infinity) return false
  return props.count <= props.minValue
})

const isMaxReached = computed(() => {
  if (props.maxValue === Infinity) return false
  return props.count >= props.maxValue
})

const increment = () => {
  emit('increment')
}

const decrement = () => {
  emit('decrement')
}

const reset = () => {
  emit('reset')
}

const setValueFromInput = () => {
  if (typeof inputValue.value === 'number') {
    emit('setValue', inputValue.value)
    inputValue.value = ''
  }
}
</script>

<style scoped>
.counter-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.button-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-decrement {
  background: #e53e3e;
  color: white;
}

.btn-decrement:hover:not(:disabled) {
  background: #c53030;
}

.btn-increment {
  background: #3182ce;
  color: white;
}

.btn-increment:hover:not(:disabled) {
  background: #2c5aa0;
}

.btn-reset {
  background: #718096;
  color: white;
}

.btn-reset:hover {
  background: #4a5568;
}

.secondary-controls {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.input {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 0.875rem;
  width: 120px;
}

.input:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.btn-set {
  background: #48bb78;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-set:hover {
  background: #38a169;
}

@media (max-width: 768px) {
  .button-group {
    gap: 0.5rem;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    min-width: 50px;
  }
  
  .input-group {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .input {
    width: 100px;
  }
}
</style> 