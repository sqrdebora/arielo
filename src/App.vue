<script lang="ts">
import { RouterView } from 'vue-router';
import { words, expressions, normalizeText } from './utils'
export type word = {
  pt: string,
  en: string,
}
export default {
  data() {
    return {
      message: '',
      translate: '',
      error: false,
      errorText: '',
      loading: false,
    }
  },
  methods: {
    shareViaWebShare() {
  navigator.share({
    title: 'Title to be shared',
    text: 'Text to be shared',
    url: 'URL to be shared'
  })
},
    showError(msg) {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
      this.errorText = msg
    },
    setExpressions() {
      if (!this.message) {
        this.showError('Helloooo! Você precisa escrever uma mensagem antes');
        return false;
      }
      let msg = this.message
      expressions.forEach(expression => {
        console.log(expression['pt'])
       msg = normalizeText(msg).replace(normalizeText(expression['pt']), expression['en']);
      });
      console.log(msg)
      return msg
    },
    generateText() {
      
      let t;
      const final = [];
      const value = this.setExpressions().split(' ');
      const index = 0;
      value.map((item) => {
        t = '';
        words.find((word) => {
          if (normalizeText(word.pt) == normalizeText(item)) {
            t = word.en;
          }
          
        }  )
        final.push(t.toLowerCase() || item);

      })

      let normalize = final.join(' ');
      console.log(final)
      normalize = normalize.charAt(0).toUpperCase() + normalize.slice(1);
      normalize = normalize.replace("i ", "I ")
      
      this.translate = normalize
    }

    
  }
}
</script>

<template>

  <div>

<RouterView />
    
  </div>


</template>

<style scoped>

header {
  text-align: center;
  display: block;
  width: fit-content;
  margin: 0 auto;
}

section {
  background: #fff;
  width: 90%;
  max-width: 500px;
  margin: 5rem auto;
  padding: 1.5rem 1rem;
  position: relative
}

.input {
  width: 90%;
  position: relative;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    border: 4px solid var(--primary);
    background: #fff;
    width: 100%;
    height: 100%;
    left: 0.5rem;
    top: 0.2rem;
  }
}

textarea {
  border: 1px solid #c9c9c9;
  padding: 0.5rem 2%;
  position: relative;
  z-index: 2;
  width: 96%;
  outline: none;
  &:focus  {
    border: 1px solid #000
  }
}
.bg {
  position: absolute;
  width: auto;
  height: 150px;
  z-index: -1;
  img {
    height: 100%;
  }
  &.bg--1 {
    transform: translate(0, -100%);
    left: 0vh;
  }

  &.bg--2 {
    transform: translate(0, -100%);
    right: -3vh;
  }
  &.bg--3 {
    bottom: 5%;
    right: 0vh;
    transform: translate(0, 0%)
  }
  &.bg--4 {
    top: 30vh;
    right: 2%;
    transform: translate(0%, 0)
  }
  &.bg--5 {
    bottom: 0;
    left: 0vh;
    transform: translate(-10%,-40%)
  }

  &.bg--6 {
    left: 0;
    transform: translate(100%, 50%)
  }

  &.fixed {
    position: fixed
  }
}

h1 {
  font-family: "Playwrite TZ", cursive;
}

button {
  width: fit-content;
  display: block;
  margin: 1.5rem auto 0;
  color: var(--tertiary);
  background: var(--secondary);
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem
}

.translate {
  position: relative;
}

 .quote {
  font-family: "Roboto Mono", monospace;
  font-size: 3rem;
  color: var(--primary);
  position: absolute
}

.text {
  padding: 1.3rem;
}

.error {
  background: rgb(204, 0, 0);
  color: #fff;
  font-size: 0.9rem;
  padding: 0.5rem;
}

.translate-image {
  position: relative;
  img {
    width: 100%;
  }
  .translate-text {
    position: absolute;
    color: #FFFF00;
    font-size: 1.2rem;
    bottom: 5px;
    font-weight: bold;
    text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
  }
}

.disclaimer {
  font-size: 0.8rem;
  text-align: center
}
</style>
