<template>
  <section class="download_app_section">
    <div class="main_wrapper">
      <div class="vertical_padding">
        <div class="download_app_wrapper">
          <div class="download_app_block_left">
            <h1 class="section_title_black">Lorem Ipsum is simply dummy text of the printing and.</h1>
            <p class="paragraph_black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
          </div>

          <div class="download_app_block_right">
            <img src="~/assets/images/download_app/mobile_app.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .download_app_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .download_app_block_left h1 {
    margin-bottom: 20px;
  }

  .download_app_block_right {
    display: flex;
    justify-content: center;
  }
</style>