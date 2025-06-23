<script setup lang="ts">
type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

const { data: users, error, pending } = await useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

</script>
<template>
  <div>
    <h1>Users</h1>
    <p v-if="pending">データ読み込み中...</p>
    <p v-else-if="error">エラーが発生しました: {{ error?.message }}</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="`/users/${user.id}`">{{ user.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>