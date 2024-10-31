<template>
  <section class="py-120px">
    <div class="max-w-[1280px] mx-auto px-12">
      <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div class="">
          <h1 class="text-5xl font-semibold text-slate-900 pb-6">Lorem Ipsum is simply dummy text of the printing and.</h1>
          <p class="text-base text-slate-900 opacity-70 pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
          
          <div class="flex gap-6">
            <a href="#" class="flex gap-2 items-center bg-green py-3 px-8 rounded-full">
              <UIcon name="teenyicons:apple-solid" class="text-white" />
              <span class="text-slate-900 font-semibold text-white">Apple App Store</span>
              <UIcon name="material-symbols:arrow-forward" class="text-white text-lg"/>
            </a>

            <a href="#" class="flex gap-2 items-center bg-green py-3 px-8 rounded-full">
              <UIcon name="formkit:google" class="text-white" />
              <span class="text-slate-900 font-semibold text-white">Google Play</span>
              <UIcon name="material-symbols:arrow-forward" class="text-white text-lg"/>
            </a>  
          </div>
        </div>

        <div class="flex justify-center">
          <img src="~/assets/images/download_app/mobile_app.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>