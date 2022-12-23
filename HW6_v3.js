// Create Vue Instance
const { createApp } = Vue

// Variable declaration
let doll1 = 'doll1.0.jpg';
let doll2 = 'doll1.0_1.jpg';
let doll3 = 'doll2.0.jpg';
let doll4 = 'doll2.0_1.jpg';
let doll5 = 'doll3.jpg';
let doll6 = 'doll3_1.jpg';
let doll7 = 'doll4.jpg';
let doll8 = 'doll4_1.jpg';

const dolls = [doll1, doll2, doll3, doll4, doll5, doll6, doll7, doll8]

// hover over 1st doll image
createApp({
  data() {
    return {
      message: 'Love My Dolls!'
      ,dolls,
      dollImg: dolls[1],
    }
  },
  methods: {
    updateDoll(id) {
      this.dollImg = this.dolls[id];
    },
    resetDoll() {
      this.dollImg = dolls[0];
    }
  }
}).mount('#app')

// hover over 2nd doll image
createApp({
  data() {
    return {
      dolls,
      dollImg: dolls[3],
    }
  },
  methods: {
    updateDoll(id) {
      this.dollImg = this.dolls[id];
    },
    resetDoll() {
      this.dollImg = dolls[2];
    }
  }
}).mount('#app2')

// hover over 3rd doll image
createApp({
  data() {
    return {
      dolls,
      dollImg: dolls[5],
    }
  },
  methods: {
    updateDoll(id) {
      this.dollImg = this.dolls[id];
    },
    resetDoll() {
      this.dollImg = dolls[4];
    }
  }
}).mount('#app3')

// hover over 4th doll image
createApp({
  data() {
    return {
      dolls,
      dollImg: dolls[7],
    }
  },
  methods: {
    updateDoll(id) {
      this.dollImg = this.dolls[id];
    },
    resetDoll() {
      this.dollImg = dolls[6];
    }
  }
}).mount('#app4')

