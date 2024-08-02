<script setup lang="ts">
import { ref } from 'vue'

// Importera bilderna direkt
import img1 from '@/assets/images/img-1.png'
import img2 from '@/assets/images/img-2.png'
import img3 from '@/assets/images/img-3.png'
import img4 from '@/assets/images/img-4.png'
import img5 from '@/assets/images/img-5.png'
import img6 from '@/assets/images/img-6.png'
import img7 from '@/assets/images/img-7.png'
import img8 from '@/assets/images/img-8.png'
import cardBack from '@/assets/images/card-back.jpg'

const imagePaths = [img1, img2, img3, img4, img5, img6, img7, img8]

const generateDeck = () => {
  const deck = [...imagePaths, ...imagePaths]
  return deck.sort(() => Math.random() - 0.5)
}

const cards = ref<string[]>(generateDeck())
const selectedCards = ref<number[]>([])
const matchedCards = ref<number[]>([])

const selectCard = (index: number) => {
  if (
    selectedCards.value.length < 2 &&
    !selectedCards.value.includes(index) &&
    !matchedCards.value.includes(index)
  ) {
    selectedCards.value.push(index)

    if (selectedCards.value.length === 2) {
      setTimeout(checkForMatch, 1000)
    }
  }
}

const checkForMatch = () => {
  const [firstIndex, secondIndex] = selectedCards.value
  if (cards.value[firstIndex] === cards.value[secondIndex]) {
    matchedCards.value.push(firstIndex, secondIndex)
  }
  selectedCards.value = []
}

const resetGame = () => {
  cards.value = generateDeck()
  selectedCards.value = []
  matchedCards.value = []
}
</script>

<template>
  <div class="game-container">
    <h1>Memory</h1>
    <div class="content-wrapper">
      <div class="game-board">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card"
          :class="{ 'is-flipped': selectedCards.includes(index) || matchedCards.includes(index) }"
          @click="selectCard(index)"
        >
          <div class="card-inner">
            <div
              class="card-front"
              v-if="selectedCards.includes(index) || matchedCards.includes(index)"
            >
              <img :src="card" alt="Memory card image" />
            </div>
            <div class="card-back" v-else>
              <img :src="cardBack" alt="Card back image" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="matchedCards.length === cards.length" class="game-over">
        <p>Grattis! Du har hittat alla par!</p>
        <button class="resetBtn" @click="resetGame">Spela igen</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
  background-color: hotpink;
  margin-top: 10px;
  margin-bottom: 35px;
  width: 630px;
  height: 50px;
}

.game-container {
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-template-rows: repeat(4, 120px);
  gap: 10px;
  padding: 20px;
}

.card {
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 120px;
  height: 120px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card.is-flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

}

.card-front {
  transform: rotateY(180deg);
}

.card-back {
  background-color: lightgoldenrodyellow;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-front img,
.card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;

}

.game-over {
  text-align: center;
  margin-top: 30px;
}

.game-over p {
  font-size: 1.2em;
  font-weight: bold;
}

.resetBtn {
  width: 250px;
  height: 45px;
  margin-top: 20px;
  background-color: hotpink;
  border: 1px solid hotpink;
  border-radius: 8px;
  color: black;
  font-weight: bold;
  font-size: large;
  text-transform: uppercase;
}

.resetBtn:hover {
  background-color: lightgoldenrodyellow;
  border: 3px solid hotpink;
}

/* Media query för mindre skärmar */
@media (max-width: 480px) {
  h1 {
    width: 100%;
    height: auto;
    font-size: 1.5em;
  }

  .game-board {
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(4, 80px);
    gap: 5px;
    padding: 10px;
  }

  .card {
    width: 80px;
    height: 80px;
  }

  .card-inner {
    width: 80px;
    height: 80px;
  }

  .resetBtn {
    width: 180px;
    height: 40px;
    font-size: medium;
  }
}
</style>
