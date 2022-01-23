<template>
  <div class="container">
    <section class="intro">
      <div class="main-img">
        <button class="btn btn--primary">
          <i class="icon icon-expand"></i>
          <span>фото галерея</span>
        </button>
        <img src="../static/content/common/main.jpg" alt="" />
      </div>
      <div class="main-txt">
        <h1>
          Маєток <strong>SVILAKE</strong> - проживання на Світязі в приватному
          секторі
        </h1>

        <h2>Наші cервіси:</h2>

        <ul class="services">
          <li>
            <i class="icon icon-wifi"></i>
            <span>Free Wifi</span>
          </li>
          <li>
            <i class="icon icon-pergola"></i>
            <span>Альтанки</span>
          </li>
          <li>
            <i class="icon icon-barbecue"></i>
            <span>Мангали</span>
          </li>
          <li>
            <i class="icon icon-swing"></i>
            <span>Гойдалка</span>
          </li>
          <li>
            <i class="icon icon-trampoline"></i>
            <span>Батут</span>
          </li>
          <li>
            <i class="icon icon-park"></i>
            <span>Parking</span>
          </li>
        </ul>

        <h2 class="title-options">Варіанти розміщення:</h2>

        <ul class="list">
          <li>Окремі кімнати - кухня, санвузол загальні</li>
          <li>Апартаменти</li>
          <li>Котедж</li>
        </ul>

        <ul class="quick-contacts">
          <li>
            <i class="icon icon-phone-call"></i> <span>+380976541951</span>
          </li>
          <li>
            <i class="icon icon-pin"></i>
            <span>с. Світязь, вул. Набережна 45</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="top-props">
      <div class="box">
        <div class="box-img">
          <img src="/content/homes/4/1.jpg" alt="" />
        </div>
        <div class="box-desc">
          <div>
            <div class="box-title">Котедж</div>
            <div class="box-info">Будинок на 8-10 чол</div>
          </div>
          <div>
            <div class="box-price">3000 грн/доба</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-img">
          <img src="/content/homes/4/1.jpg" alt="" />
        </div>
        <div class="box-desc">
          <div>
            <div class="box-title">Котедж</div>
            <div class="box-info">Будинок на 8-10 чол</div>
          </div>
          <div>
            <div class="box-price">3000 грн/доба</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-img">
          <img src="/content/homes/4/1.jpg" alt="" />
        </div>
        <div class="box-desc">
          <div>
            <div class="box-title">Котедж</div>
            <div class="box-info">Будинок на 8-10 чол</div>
          </div>
          <div>
            <div class="box-price">3000 грн/доба</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-img">
          <img src="/content/homes/4/1.jpg" alt="" />
        </div>
        <div class="box-desc">
          <div>
            <div class="box-title">Котедж</div>
            <div class="box-info">Будинок на 8-10 чол</div>
          </div>
          <div>
            <div class="box-price">3000 грн/доба</div>
          </div>
        </div>
      </div>
    </section>
    <div class="flex-center">
      <a class="btn btn--primary" href="">
        <i class="icon icon-plus"></i> <span>дивитися всі пропозиції</span></a
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.intro {
  display: flex;
  margin-top: 14px;
  margin-bottom: 40px;
  border: 1px solid silver;
}

.main-img {
  flex: 0 1 auto;
  position: relative;
  img {
    width: auto;
  }

  button {
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
}

.main-txt {
  flex: 1 1 auto;
  background-color: #fff;
  padding: 24px 20px 0 20px;

  h1 {
    margin-bottom: 32px;
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #4d4d4d;
    margin-bottom: 20px;
  }

  .title-options {
    margin-bottom: 15px;
  }
}

.services {
  display: flex;
  color: #666;
  font-size: 12px;
  margin-bottom: 40px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      white-space: nowrap;
    }
  }

  li + li {
    margin-left: 60px;
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
}

.quick-contacts {
  display: flex;
  color: #666;
  margin-top: 32px;
  font-size: 14px;

  i {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .icon-pin {
    margin-right: 5px;
  }

  li {
    display: flex;
    align-items: center;
  }

  li + li {
    margin-left: 30px;
  }
}

.box {
  background-color: #fff;
  box-shadow: 0 7px 12px -4px rgb(0 0 0 / 15%);

  &-desc {
    padding: 5px 15px 15px 15px;
    display: flex;
    justify-content: space-between;
  }

  &-title {
    font-size: 15px;
    font-weight: 700;
    font-family: Arial;
  }

  &-info {
    font-size: 13px;
  }

  &-price {
    font-weight: bold;
    font-size: 13px;
    color: #e01a2b;
    margin-top: 19px;
  }
}

.top-props {
  padding: 0 0 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: '. . . .';
  column-gap: 10px;
}

@media all and (-ms-high-contrast: none) {
  .top-props {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    -ms-grid-rows: 1fr;
  }
}
</style>
