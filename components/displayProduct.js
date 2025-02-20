app.component('product-display', {
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          class="color-circle" 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          :style="{ backgroundColor: variant.color }"></div>
        <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
        <p v-if="">On Sale</p>
      </div>
    </div>
  </div>`,

  props: {
    premium: {
        type: Boolean,
        required: true
    }
  },
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        image: './assets/images/socks_blue.jpg',
        inStock: false,
        details: ['50% cotton', '30% wool', '20% polyester'],
        onSale: false,
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', onSale: true },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', onSale: false },
        ]
    }
},
methods: {
},
computed: {
    title() {
        if (this.onSale) {
            return this.brand + ' ' + this.product + ' ' + 'are on sale!'
        }
        return ' '
    },
    onSale() {

    },
    shipping() {
        if (this.premium) {
          return 'Free'
        }
          return 2.99
        }
}

})