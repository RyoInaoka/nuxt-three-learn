import { ref, computed, type Ref, type ComputedRef } from 'vue'

export interface CounterState {
  count: Ref<number>
  isPositive: ComputedRef<boolean>
  isNegative: ComputedRef<boolean>
  isZero: ComputedRef<boolean>
}

export interface CounterActions {
  increment: () => void
  decrement: () => void
  reset: () => void
  setValue: (value: number) => void
}

export interface CounterOptions {
  initialValue?: number
  minValue?: number
  maxValue?: number
  step?: number
}

export function useCounter(options: CounterOptions = {}): CounterState & CounterActions {
  const {
    initialValue = 0,
    minValue = -Infinity,
    maxValue = Infinity,
    step = 1
  } = options

  // 状態
  const count = ref(initialValue)

  // 計算されたプロパティ
  const isPositive = computed(() => count.value > 0)
  const isNegative = computed(() => count.value < 0)
  const isZero = computed(() => count.value === 0)

  // アクション
  const increment = () => {
    const newValue = count.value + step
    if (newValue <= maxValue) {
      count.value = newValue
    }
  }

  const decrement = () => {
    const newValue = count.value - step
    if (newValue >= minValue) {
      count.value = newValue
    }
  }

  const reset = () => {
    count.value = initialValue
  }

  const setValue = (value: number) => {
    if (value >= minValue && value <= maxValue) {
      count.value = value
    }
  }

  return {
    // 状態
    count,
    isPositive,
    isNegative,
    isZero,
    // アクション
    increment,
    decrement,
    reset,
    setValue
  }
} 