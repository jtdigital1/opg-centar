<template>
  <header class="bg-slate-900">
    <div class="max-w-[1280px] mx-auto px-12">
      <nav class="flex items-center justify-between h-20">
        <div class="flex items-center gap-9">
          <NuxtLink href="/" class="logo">
            <img src="~/assets/images/logo/logo_white.svg" alt="MyLogo" class="logo-img" />
          </NuxtLink>

          <ul class="flex items-center gap-9">
            <li><NuxtLink class="text-white" href="/about">About us</NuxtLink></li>
            <li><NuxtLink class="text-white" href="/services">Shop</NuxtLink></li>
          </ul>
        </div>
  
        <div class="nav_block_right">
          <H1 class="text-white">Cart</H1>
        </div>
      </nav>
    </div>
  </header>
</template>