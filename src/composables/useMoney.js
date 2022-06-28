//mixin처럼 사용
import { ref } from "vue";

function useMoney(initalTotalMoney = 0) {
    const totalMoney = ref(initalTotalMoney);

    function addMoney(price) {
        totalMoney.value += price;
    }

    return {
        totalMoney,
        addMoney,
    };
}

export default useMoney;