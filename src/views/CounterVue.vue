<template>
  <div class="main">
      <div class="counter">
    <h1 class="counter__heading">Counter: {{ counter.count }}</h1>
    <div class="counter__set-value">
        <button class="counter__button" @click="counter.setValue(value)">Set Value</button>
      <input class="counter__input" type="number" v-model.number="value" />
    </div>
    <div class="counter__buttons">
      <button class="counter__button" @click="counter.increment()">+</button>
      <button class="counter__button" @click="counter.decrement()">-</button>
      <button class="counter__button" @click="counter.reset()">Reset</button>
    </div>
  </div>
  </div>
</template>

<script>
import useCounter from '@/composables/useCounter'
import { ref } from 'vue'

export default {
  setup() {
    const counter = useCounter()
    const value = ref(0)

    return {
      counter,
      value
    }
  }
}
</script>

<style scoped>
/* .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: silver;
} */

.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 40%; */
  height: 100%;
  background: silver;
}

.counter__heading {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.counter__buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
}

.counter__button {
  background-color: #1f88b4;
  color: #fff;
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.counter__button:hover {
  background-color: #2c3e50;
}

.counter__set-value {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
}

.counter__input {
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  border:none;
  box-sizing: border-box;
  /* background-color: grey; */
  text-align: center;
  width: 10rem;
  border: 2px solid;
}

.counter__input::-webkit-inner-spin-button,
.counter__input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* .counter__input[type=number] {
  -moz-appearance: textfield;
} */

@media only screen and (max-width: 1600px) {
  .counter__heading {
    font-size: 3rem;
  }

  .counter__buttons {
    flex-direction: column;
  }

  .counter__button {
    margin: 0.5rem 0;
  }

  .counter__set-value {
    flex-direction: column;
  }

  .counter__input {
    margin-right: 0;
    margin-bottom: 0.5rem;
    width: 100%;
  }
}
</style>
