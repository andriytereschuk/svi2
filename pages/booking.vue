<template>
  <div class="container">
    <h1>Бронювання</h1>

    <p>
      Ви завжди можете забронювати номер заздалегідь. Це відбувається наступним
      чином:
    </p>

    <ul>
      <li>
        <div class="step">Крок 1</div>
        <div class="todo">
          <div class="todo-txt">
            Зателефонуйте або напишіть нам, щоб узгодити деталі і дізнатися
            доступність житла на потрібний вам період.
          </div>

          <div class="phone-section">
            <div class="number">{{ phoneNumber }}</div>

            <div>
              <a
                href="tel:+380976541951"
                class="btn-call btn-contact"
                @click="track('sv_phone_call')"
                >Телефонувати</a
              >
              <a href="#" class="btn-contact" @click="copy">Копіювати номер</a>
              <a
                href="viber://chat/?number=%2B380976541951"
                class="btn-contact"
                title="Відкрити в додатку. Для цього він має бути встановлений на вашому пристрою"
                @click="track('sv_open_viber')"
                >Viber</a
              >
              <textarea
                ref="areaNumber"
                class="area-number"
                :value="phoneNumber"
              ></textarea>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="step">Крок 2</div>
        <div class="todo">
          <div class="todo-txt">
            Ви перераховуєте суму за 1 добу проживання на рахунок власника.

            <section>
              <h1>Реквізити</h1>
              <div class="cart-item">
                <div class="cart-title">Номер картки Приватбанку:</div>
                <div class="cart-number">5168 7573 7654 8006</div>
                <div>
                  <a href="#" class="btn-contact" @click="copyCardNumber"
                    >Копіювати номер картки</a
                  >
                </div>
                <textarea
                  ref="cardRef"
                  class="area-number"
                  :value="cardNumber"
                ></textarea>
              </div>

              <div class="cart-item">
                <div class="cart-title">Отримувач:</div>
                <div>Терещук Марія Антонівна</div>
              </div>
            </section>
          </div>
        </div>
      </li>

      <li>
        <div class="step">Крок 3</div>
        <div class="todo">
          <div class="todo-txt">
            <div class="confirm-section">
              Після здійснення оплати - надішліть нам підтвердження на
              <b>Viber</b> &nbsp;
              <a
                href="viber://chat/?number=%2B380976541951"
                class="btn-contact"
                title="Відкрити в додатку. Для цього він має бути встановлений на вашому пристрою"
                @click="track('sv_send_confirmation_in_viber')"
                >Відкрити Viber</a
              >
            </div>

            <div class="confirm-section">
              Отримавши оплату житло буде гарантовано надане на визначену дату.
              <b>Час заселення:</b> після 12:00
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const successCopyCb = () => alert('Номер скопійовано!')
const errorCopyCb = () => alert('Копіювання не підтримується вашим браузером')

export default {
  data() {
    return {
      phoneNumber: '+380976541951',
      cardNumber: 5168757376548006,
    }
  },
  head: {
    title: 'Забронювати будинок чи кімнату влітку на Шацьких озерах',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Деталі бронювання житла в Шацьку, Світязі',
      },
    ],
  },
  methods: {
    copy(event) {
      event.preventDefault()

      this.track('sv_copy_phone_number')

      if (!navigator.clipboard) {
        this.fallbackCopy()
        return
      }
      navigator.clipboard
        .writeText(this.phoneNumber)
        .then(successCopyCb, errorCopyCb)
    },
    fallbackCopy() {
      this.$refs.areaNumber.focus()
      this.$refs.areaNumber.select()
      let isCopied = false
      try {
        isCopied = document.execCommand('copy')
      } catch (e) {
        isCopied = false
      }
      this.$refs.areaNumber.blur()
      return isCopied ? successCopyCb() : errorCopyCb()
    },
    copyCardNumber(event) {
      event.preventDefault()

      this.track('sv_copy_card_number')

      if (!navigator.clipboard) {
        this.fallbackCopyCard()
        return
      }
      navigator.clipboard
        .writeText(this.cardNumber)
        .then(successCopyCb, errorCopyCb)
    },
    fallbackCopyCard() {
      this.$refs.cardRef.focus()
      this.$refs.cardRef.select()
      let isCopied = false
      try {
        isCopied = document.execCommand('copy')
      } catch (e) {
        isCopied = false
      }
      this.$refs.cardRef.blur()
      return isCopied ? successCopyCb() : errorCopyCb()
    },
    track(eventName) {
      this.$gtag.event(eventName)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars.scss';

p {
  margin-bottom: 20px;
}

li {
  padding: 15px 20px;
  margin-bottom: 25px;
  background-color: #fff;
  border: 1px solid silver;
  display: flex;
  align-items: center;

  @media #{$small} {
    padding: 15px 10px;
  }
}

.step {
  background-color: $orange;
  color: #fff;
  display: flex;
  min-width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  font-size: 16px;
  font-weight: 600;

  @media #{$small} {
    min-width: 60px;
    height: 60px;
    font-size: 13px;
    font-weight: 600;
  }
}

.todo {
  padding-left: 20px;

  @media #{$small} {
    padding-left: 10px;
  }
}

.todo-txt {
  margin-bottom: 10px;
}

.number {
  font-family: monospace;
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
}

.area-number {
  width: 0;
  height: 0;
  opacity: 0;
}

.btn-contact {
  display: inline-block;
  position: relative;
  top: -1px;
  padding: 4px 6px;
  font-size: 12px;
  line-height: 14px;
  border: 1px solid #9a9a9a;
  border-radius: 2px;
  background-color: #efefef;
  font-family: Arial;
  white-space: nowrap;
  cursor: pointer;
  margin-right: 2px;

  &:hover {
    background-color: #e9e9e9;
    border: 1px solid #808080;
  }
}

.btn-call {
  display: none;

  @media #{$small} {
    display: inline-block;
  }
}

.phone-section {
  display: flex;

  @media #{$small} {
    flex-direction: column;
    align-items: center;

    .number {
      padding-bottom: 5px;
    }

    .btn-contact {
      margin-top: 8px;
    }
  }
}

.cart-item {
  display: flex;
  margin-top: 2px;

  @media #{$xsmall} {
    flex-direction: column;

    .cart-title {
      font-size: 12px;
    }

    & + .cart-item {
      margin-top: 20px;
    }

    .cart-number {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      padding: 10px 0;

      & + div {
        text-align: center;
      }
    }
  }
}

section h1 {
  margin: 0 0 10px 0;
  padding: 20px 0 0 0;
  line-height: 18px;
  color: $grey;
  font-size: 12px;
  border-bottom: 1px solid $light;
  letter-spacing: 0.04em;

  @media #{$xsmall} {
    font-size: 13px;
  }
}

.cart-title {
  margin-right: 5px;
  font-weight: bold;
}

.cart-number {
  margin-right: 10px;
  font-family: monospace;
  white-space: nowrap;
}

.confirm-section {
  margin-top: 8px;

  @media #{$small} {
    a {
      display: block;
      text-align: center;
      width: 100px;
      margin: 10px auto 15px auto;
    }
  }
}
</style>
