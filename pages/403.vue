<template>
  <div class="forbidden-container">
    <div class="forbidden-content">
      <h1 class="forbidden-title">403</h1>
      <h2 class="forbidden-subtitle">アクセスが拒否されました</h2>
      <p class="forbidden-description">
        このページにアクセスする権限がありません。
        必要な認証情報をお持ちでないか、アクセス権限が不足しています。
      </p>
      
      <div class="forbidden-actions">
        <NuxtLink to="/" class="btn-home">
          ホームに戻る
        </NuxtLink>
        <button @click="goBack" class="btn-back">
          前のページに戻る
        </button>
        <button @click="login" class="btn-login">
          ログイン
        </button>
      </div>
      
      <div class="access-info">
        <h3>アクセス権限について：</h3>
        <ul>
          <li>認証が必要：このページにアクセスするにはログインが必要です</li>
          <li>権限不足：お持ちのアカウントには十分な権限がありません</li>
          <li>管理者に連絡：アクセス権限が必要な場合は管理者にお問い合わせください</li>
          <li>再ログイン：セッションが切れている可能性があります</li>
        </ul>
      </div>
      
      <div class="security-notice">
        <h4>セキュリティ保護</h4>
        <p>このページはセキュリティ上の理由で保護されています</p>
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

const login = () => {
  // ログインページへのリダイレクト
  // 実際のアプリケーションでは適切なログインページのパスに変更してください
  if (process.client) {
    window.location.href = '/login'
  }
}
</script>

<style scoped>
.forbidden-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafc;
  padding: 2rem;
}

.forbidden-content {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.forbidden-title {
  font-size: 3rem;
  font-weight: 700;
  color: #3182ce;
  margin: 0 0 0.5rem 0;
}

.forbidden-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.forbidden-description {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.forbidden-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-home,
.btn-back,
.btn-login {
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

.btn-login {
  background: #3182ce;
  color: white;
}

.btn-login:hover {
  background: #2c5aa0;
}

.access-info {
  text-align: left;
  background: #f7fafc;
  padding: 1rem;
  border-radius: 4px;
  border-left: 3px solid #3182ce;
  margin-bottom: 1rem;
}

.access-info h3 {
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.access-info ul {
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
  padding-left: 1.5rem;
}

.access-info li {
  margin-bottom: 0.25rem;
}

.security-notice {
  padding: 1rem;
  background: #fef5e7;
  border-radius: 4px;
  border: 1px solid #fed7aa;
}

.security-notice h4 {
  margin: 0 0 0.5rem 0;
  color: #c05621;
  font-size: 1rem;
  font-weight: 600;
}

.security-notice p {
  margin: 0;
  color: #9c4221;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .forbidden-container {
    padding: 1rem;
  }
  
  .forbidden-content {
    padding: 1.5rem;
  }
  
  .forbidden-title {
    font-size: 2.5rem;
  }
  
  .forbidden-actions {
    flex-direction: column;
  }
  
  .btn-home,
  .btn-back,
  .btn-login {
    width: 100%;
  }
}
</style> 