<template>
  <!--  <h2>{{ username }}</h2>
  <h2>{{ age }}</h2>
  <h2>handsome? {{ isHandsome }}</h2>
  <h3>{{ state.name }}</h3>-->
  <div>
    <h2>{{ username }}</h2>
    <button @click="changeName">ChangeUserName</button>
    <h2>제품명: {{ name }}, 가격{{ price }}</h2>
    <button @click="changeProduct">제품 바꾸기</button>
  </div>
  <div>
    <input type="text" v-model="username" />
  </div>
  <hr />
  <div>
    price <input type="number" v-model="price" /> amount
    <input type="number" v-model="amount" />
    <h3>Total Price :: {{ totalPrice }}</h3>
  </div>
  <hr />
  <div>
    first <input type="text" v-model="home.city" /> last
    <input type="text" v-model="last" />
    <h3>Full name :: {{ fullName }}</h3>
  </div>
  <hr />
  <h2>Hello LifeCycle</h2>
  <input type="text" v-model="username1" ref="inputRef" />
  <ChildComponent
    firstname="Code"
    lastname="Scalper"
    @sendParent="sendParent"
  />
  <hr />
  <div>
    <ProductsStatus />
    <hr />
    <FeeStatus />
    <hr />
    <SavingStatus />
  </div>
</template>

<script>
import FeeStatus from "../mixin/FeeStatus.vue";
import ProductsStatus from "../mixin/ProductsStatus.vue";
import SavingStatus from "../mixin/SavingStatus.vue";
import ChildComponent from "./ChildComponent.vue";
import {
  reactive,
  toRefs,
  ref,
  computed,
  watch,
  onMounted,
} from /*onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,*/ "vue";
export default {
  name: "TestComponent",
  components: { ChildComponent, FeeStatus, ProductsStatus, SavingStatus },
  methods: {
    sendParent() {
      console.log("parent event!!!");
    },
  },
  setup() {
    const inputRef = ref(null);
    const username1 = ref("scalper");
    onMounted(() => {
      inputRef.value.focus();
      console.log("onMounted");
    });
    /*onBeforeMount(() => {
      console.log("before mounted");
    });
    onBeforeUpdate(() => {
      console.log("before update");
    });
    onUpdated(() => {
      console.log("updated");
    });
    onBeforeUnmount(() => {
      console.log("before unmount");
    });
    onUnmounted(() => {
      console.log("unmounted");
    });*/

    const price = ref(5000);
    const amount = ref(1);
    const username = ref("scalper");

    /*watch(
      () => {
        return { ...state.home };
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: true }
    );*/

    watch(price, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    /*watch(()=>{return state.first;}, (newValue,oldValue)=>{console.log(newValue,oldValue);}) */

    const fullName = computed(function () {
      return `${state.first} ${state.last}`;
    });

    const totalPrice = computed(() => {
      return price.value + amount.value;
    });

    function changeName() {
      username.value = "Messi";
    }
    const state = reactive({
      home: {
        city: "Seoul",
        type: "Apartment",
      },
      first: "Code",
      last: "Scalper",
      name: "TV",
      price: 100,
    });
    function changeProduct() {
      state.name = "세탁기";
      state.price = 500;
    }

    /*let isHandsome = ref(false);
    let isNotUgly = isHandsome;
    isHandsome.value = true;
    const state = reactive({
      username: "Scalper",
      name: "scalper",
      age: 50,
      job: "programmer",
    });*/

    return {
      username1,
      inputRef,
      fullName,
      totalPrice,
      price,
      amount,
      changeName,
      username,
      changeProduct,
      //isHandsome,
      //isNotUgly,
      //state,
      ...toRefs(state), ///return toRefs(state)와 같은 형식
    };
    /*{
      toRefs를 사용하지 않는 경우
      username: state.username,
      age: state.age,
    };*/
  },
  /*data() {
    return {
        price: 5000,
        amount: 1,
      //username: "Scalper",
    };
  },
  computed: {
    totalPrice(){
        return this.price * this.amount;
    }
  }*/
};
</script>

<style></style>
