<template>
  <button :style="{backgroundColor: Bgcolor}" class="button">
    <span class="text">
      {{ text }}
    </span>
     
    <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="arrow" />
  </button>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default {
  name: "MyButton",
  props: ["text", "Bgcolor"],
  
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style scoped>
button {
  border: none;
  border-radius: 3px;
  width: 110px;
  height: 31px;
  top: 190px;
  left: 48px;
  gap: 10px;
  padding: 8px, 15px;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
  box-shadow: 0px 4px 4px rgba(141, 238, 167, 0.565);
}
.text {
  margin-right: 10px;
  font-family: Quicksand;
  font-weight: 700px;
  font-size: 12px;
  line-height: 15px;
  width: 50px;
  height: 15px;
  text-align: center;
  color: #ffffff;
}
.arrow {
  font-size: 12px;
  line-height: 15px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
</style>