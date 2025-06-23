<template>
  <div class="error-container">
    <div class="error-content">
      <h1 class="error-title">
        {{ getErrorTitle() }}
      </h1>
      
      <p class="error-message">
        {{ getErrorMessage() }}
      </p>
      
      <div class="error-actions">
        <button @click="handleError" class="btn-primary">
          ホームに戻る
        </button>
        <button @click="goBack" class="btn-secondary">
          前のページに戻る
        </button>
      </div>
      
      <div v-if="error.statusCode === 404" class="error-suggestions">
        <h3>お探しのページが見つからない場合：</h3>
        <ul>
          <li>URLが正しく入力されているか確認してください</li>
          <li>ブックマークやリンクが古い可能性があります</li>
          <li>サイトマップから目的のページを探してください</li>
        </ul>
      </div>
      
      <div v-if="error.statusCode === 500" class="error-suggestions">
        <h3>サーバーエラーが発生しました：</h3>
        <ul>
          <li>しばらく時間をおいてから再度お試しください</li>
          <li>問題が解決しない場合は、お問い合わせください</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}

const props = defineProps<ErrorProps>()

const getErrorTitle = () => {
  switch (props.error.statusCode) {
    case 404:
      return '404 - ページが見つかりません'
    case 403:
      return '403 - アクセスが拒否されました'
    case 500:
      return '500 - サーバーエラー'
    case 502:
      return '502 - バッドゲートウェイ'
    case 503:
      return '503 - サービス利用不可'
    case 504:
      return '504 - ゲートウェイタイムアウト'
    default:
      return 'エラーが発生しました'
  }
}

const getErrorMessage = () => {
  switch (props.error.statusCode) {
    case 404:
      return 'お探しのページは存在しないか、移動または削除された可能性があります。'
    case 403:
      return 'このページにアクセスする権限がありません。'
    case 500:
      return 'サーバーで内部エラーが発生しました。しばらく時間をおいてから再度お試しください。'
    case 502:
      return 'サーバーが一時的に利用できません。しばらく時間をおいてから再度お試しください。'
    case 503:
      return 'サービスが一時的に利用できません。メンテナンス中である可能性があります。'
    case 504:
      return 'サーバーからの応答がタイムアウトしました。しばらく時間をおいてから再度お試しください。'
    default:
      return props.error.message || '予期しないエラーが発生しました。'
  }
}

const handleError = () => {
  clearError({ redirect: '/' })
}

const goBack = () => {
  if (process.client) {
    window.history.back()
  }
}
</script>

<style scoped>
.error-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafc;
  padding: 2rem;
}

.error-content {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.error-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: #3182ce;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
}

.btn-primary:hover {
  background: #2c5aa0;
}

.btn-secondary {
  background: transparent;
  color: #3182ce;
  border: 1px solid #3182ce;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #3182ce;
  color: white;
}

.error-suggestions {
  text-align: left;
  background: #f7fafc;
  padding: 1rem;
  border-radius: 4px;
  border-left: 3px solid #3182ce;
}

.error-suggestions h3 {
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.error-suggestions ul {
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
  padding-left: 1.5rem;
}

.error-suggestions li {
  margin-bottom: 0.25rem;
}

@media (max-width: 768px) {
  .error-container {
    padding: 1rem;
  }
  
  .error-content {
    padding: 1.5rem;
  }
  
  .error-actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style> 