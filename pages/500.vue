<template>
  <div class="server-error-container">
    <div class="server-error-content">
      <h1 class="server-error-title">500</h1>
      <h2 class="server-error-subtitle">サーバーエラー</h2>
      <p class="server-error-description">
        サーバーで内部エラーが発生しました。
        技術チームが問題を解決するために作業中です。
      </p>
      
      <div class="server-error-actions">
        <button @click="retry" class="btn-retry">
          再試行
        </button>
        <NuxtLink to="/" class="btn-home">
          ホームに戻る
        </NuxtLink>
        <button @click="goBack" class="btn-back">
          前のページに戻る
        </button>
      </div>
      
      <div class="error-details">
        <h3>サーバーエラーが発生しました：</h3>
        <ul>
          <li>一時的な問題：しばらく時間をおいてから再度お試しください</li>
          <li>メンテナンス中：システムの改善作業を行っている可能性があります</li>
          <li>お問い合わせ：問題が解決しない場合は、サポートまでご連絡ください</li>
          <li>システム状況：システムの稼働状況を確認しています</li>
        </ul>
      </div>
      
      <div class="status-indicator">
        <span class="status-text">システム復旧中...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const retry = () => {
  if (process.client) {
    window.location.reload()
  }
}

const goBack = () => {
  if (process.client) {
    window.history.back()
  }
}
</script>

<style scoped>
.server-error-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafc;
  padding: 2rem;
}

.server-error-content {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.server-error-title {
  font-size: 3rem;
  font-weight: 700;
  color: #3182ce;
  margin: 0 0 0.5rem 0;
}

.server-error-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.server-error-description {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.server-error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-retry,
.btn-home,
.btn-back {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: none;
  border: none;
}

.btn-retry {
  background: #3182ce;
  color: white;
}

.btn-retry:hover {
  background: #2c5aa0;
}

.btn-home {
  background: #3182ce;
  color: white;
}

.btn-home:hover {
  background: #2c5aa0;
}

.btn-back {
  background: transparent;
  color: #3182ce;
  border: 1px solid #3182ce;
}

.btn-back:hover {
  background: #3182ce;
  color: white;
}

.error-details {
  text-align: left;
  background: #f7fafc;
  padding: 1rem;
  border-radius: 4px;
  border-left: 3px solid #3182ce;
  margin-bottom: 1rem;
}

.error-details h3 {
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.error-details ul {
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
  padding-left: 1.5rem;
}

.error-details li {
  margin-bottom: 0.25rem;
}

.status-indicator {
  padding: 0.5rem;
  background: #fef5e7;
  border-radius: 4px;
  border: 1px solid #fed7aa;
}

.status-text {
  color: #c05621;
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .server-error-container {
    padding: 1rem;
  }
  
  .server-error-content {
    padding: 1.5rem;
  }
  
  .server-error-title {
    font-size: 2.5rem;
  }
  
  .server-error-actions {
    flex-direction: column;
  }
  
  .btn-retry,
  .btn-home,
  .btn-back {
    width: 100%;
  }
}
</style> 