<template>
  <div>
    <div class="title">Проживання &#127969;</div>
    <div class="box">
      <a href="/" class="card">
        <div class="box-img">
          <img src="/content/homes/4/1.jpg" alt="" />
        </div>
        <div class="box-desc">
          <div class="box_sub">
            <div class="box-title">Котедж</div>
            <div class="box-info">Будинок на 8-10 чол</div>
            <div class="box-price">3000 грн/доба</div>
          </div>
          <span class="btn btn_orange">Переглянути</span>
        </div>
      </a>
    </div>
    <div class="box">
      <a href="/" class="card">
        <div class="box-img">
          <img src="/content/homes/4/1.jpg" alt="" />
        </div>
        <div class="box-desc">
          <div class="box_sub">
            <div class="box-title">Кімната</div>
            <div class="box-info">Двохмісни номер на 2чол</div>
            <div class="box-price">3000 грн/доба</div>
          </div>
          <span class="btn btn_orange">Переглянути</span>
        </div>
      </a>
    </div>
    <div class="box">
      <a href="/" class="card">
        <div class="box-img">
          <img src="/content/homes/4/1.jpg" alt="" />
        </div>
        <div class="box-desc">
          <div class="box_sub">
            <div class="box-title">Кімната</div>
            <div class="box-info">Двохмісни номер на 2чол</div>
            <div class="box-price">3000 грн/доба</div>
          </div>
          <span class="btn btn_orange">Переглянути</span>
        </div>
      </a>
    </div>
    <div class="flex-center">
      <a href="" class="btn btn--primary"
        ><i class="icon icon-plus"></i> <span>дивитися всі пропозиції</span></a
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars.scss';

.title {
  display: none;
}

@media (max-width: 767px) {
  .title {
    display: block;
    font-size: 28px;
    padding: 50px 0 20px;
    color: $red;
  }
}
</style>
