<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <h2 class="not-found-subtitle">ページが見つかりません</h2>
      <p class="not-found-description">
        お探しのページは存在しないか、移動または削除された可能性があります。
      </p>
      
      <div class="not-found-actions">
        <NuxtLink to="/" class="btn-home">
          ホームに戻る
        </NuxtLink>
        <button @click="goBack" class="btn-back">
          前のページに戻る
        </button>
      </div>
      
      <div class="search-suggestions">
        <h3>お探しのページが見つからない場合：</h3>
        <ul>
          <li>URLが正しく入力されているか確認してください</li>
          <li>ブックマークやリンクが古い可能性があります</li>
          <li>サイトマップから目的のページを探してください</li>
          <li>検索機能を使って関連ページを探してください</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const goBack = () => {
  if (process.client) {
    window.history.back()
  }
}
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafc;
  padding: 2rem;
}

.not-found-content {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.not-found-title {
  font-size: 3rem;
  font-weight: 700;
  color: #3182ce;
  margin: 0 0 0.5rem 0;
}

.not-found-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.not-found-description {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-home,
.btn-back {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: none;
  border: none;
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

.search-suggestions {
  text-align: left;
  background: #f7fafc;
  padding: 1rem;
  border-radius: 4px;
  border-left: 3px solid #3182ce;
}

.search-suggestions h3 {
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.search-suggestions ul {
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
  padding-left: 1.5rem;
}

.search-suggestions li {
  margin-bottom: 0.25rem;
}

@media (max-width: 768px) {
  .not-found-container {
    padding: 1rem;
  }
  
  .not-found-content {
    padding: 1.5rem;
  }
  
  .not-found-title {
    font-size: 2.5rem;
  }
  
  .not-found-actions {
    flex-direction: column;
  }
  
  .btn-home,
  .btn-back {
    width: 100%;
  }
}
</style> 