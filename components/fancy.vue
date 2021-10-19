<template>
  <div>
    <div style="background: red">
      <img
        @click="showFancy = true"
        style="width: 250px"
        src="https://quotefancy.com/media/wallpaper/800x450/1823059-Albert-Einstein-Quote-One-picture-is-worth-a-thousand-words.jpg"
      />
      <div
        v-if="showFancy"
        style="
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          top: 0;
          left: 0;
          z-index: 9;
          position: fixed;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
        "
      >
        <div
          @click="showFancy = false"
          style="
            position: absolute;
            right: 20px;
            top:100px;
            margin: auto;
            cursor: pointer;
            color: yellow;
            z-index: 9999;
            font-size: 50px;
          "
        >
          &times;
        </div>
        <img
          style="width: 90%; border: 1px solid white"
          src="https://quotefancy.com/media/wallpaper/800x450/1823059-Albert-Einstein-Quote-One-picture-is-worth-a-thousand-words.jpg"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFancy: false,
    }
  },
  components: {},
  mounted() {},
  methods: {},
}
</script>
