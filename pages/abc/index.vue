<script lang="ts" setup>
useHead({
  title: 'Trang home'
})
const user = useCookie<{ name: string }>('user')
const logins = useCookie<number>('logins')
const name = ref('')

const login = () => {
  logins.value = (logins.value || 0) + 1
  user.value = { name: name.value }
}

const logout = () => {
  user.value = null
}
</script>
<template>
    <div>
     <h1 class="text-3xl mb-3">
        Login
      </h1>
      <input v-model="name" n="lg" class="w-100 m-auto" placeholder="Enter your name..." @keypress.enter="login()" />
      <div class="mt-3">
        <button icon="carbon:user" :disabled="!name" @click="login">
          Log in
        </button>
      </div>
    </div>
</template>