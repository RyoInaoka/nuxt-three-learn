<template>
  <div class="counter-page">
    <div class="counter-container">
      <h1 class="page-title">カウンター</h1>
      
      <!-- カウンター表示コンポーネント -->
      <CounterDisplay
        :count="count"
        :is-positive="isPositive"
        :is-negative="isNegative"
        :is-zero="isZero"
      />
      
      <!-- カウンター操作コンポーネント -->
      <CounterControls
        :count="count"
        :min-value="minValue"
        :max-value="maxValue"
        :step="step"
        @increment="increment"
        @decrement="decrement"
        @reset="reset"
        @set-value="setValue"
      />
      
      <!-- カウンター情報 -->
      <div class="counter-info">
        <h3>カウンター情報</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">現在の値:</span>
            <span class="info-value">{{ count }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">ステップ:</span>
            <span class="info-value">{{ step }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">最小値:</span>
            <span class="info-value">{{ minValue === -Infinity ? 'なし' : minValue }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">最大値:</span>
            <span class="info-value">{{ maxValue === Infinity ? 'なし' : maxValue }}</span>
          </div>
        </div>
      </div>
      
      <!-- 設定オプション -->
      <div class="counter-settings">
        <h3>設定</h3>
        <div class="settings-grid">
          <div class="setting-item">
            <label for="step-input">ステップ:</label>
            <input
              id="step-input"
              v-model.number="step"
              type="number"
              min="1"
              class="setting-input"
            />
          </div>
          <div class="setting-item">
            <label for="min-input">最小値:</label>
            <input
              id="min-input"
              v-model.number="minValue"
              type="number"
              class="setting-input"
              placeholder="制限なし"
            />
          </div>
          <div class="setting-item">
            <label for="max-input">最大値:</label>
            <input
              id="max-input"
              v-model.number="maxValue"
              type="number"
              class="setting-input"
              placeholder="制限なし"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCounter } from '~/composables/useCounter'

// カウンター設定
const step = ref(1)
const minValue = ref(-10)
const maxValue = ref(10)

// カウンターロジックを使用
const {
  count,
  isPositive,
  isNegative,
  isZero,
  increment,
  decrement,
  reset,
  setValue
} = useCounter({
  initialValue: 0,
  minValue: minValue.value,
  maxValue: maxValue.value,
  step: step.value
})

// 設定変更時の処理
const updateCounterSettings = () => {
  // 設定が変更された場合、カウンターを再初期化
  const newCounter = useCounter({
    initialValue: count.value,
    minValue: minValue.value === null ? -Infinity : minValue.value,
    maxValue: maxValue.value === null ? Infinity : maxValue.value,
    step: step.value
  })
  
  // 新しい設定を適用
  Object.assign({
    count,
    isPositive,
    isNegative,
    isZero,
    increment,
    decrement,
    reset,
    setValue
  }, newCounter)
}

// 設定変更を監視
watch([step, minValue, maxValue], updateCounterSettings)
</script>

<style scoped>
.counter-page {
  min-height: 100vh;
  background: #f7fafc;
  padding: 2rem;
}

.counter-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.page-title {
  text-align: center;
  color: #2d3748;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
}

.counter-info,
.counter-settings {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
}

.counter-info h3,
.counter-settings h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
}

.info-label {
  color: #4a5568;
  font-weight: 500;
}

.info-value {
  color: #2d3748;
  font-weight: 600;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.setting-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.setting-item label {
  color: #4a5568;
  font-weight: 500;
  font-size: 0.875rem;
}

.setting-input {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 0.875rem;
}

.setting-input:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

@media (max-width: 768px) {
  .counter-page {
    padding: 1rem;
  }
  
  .counter-container {
    padding: 1.5rem;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .info-grid,
  .settings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
