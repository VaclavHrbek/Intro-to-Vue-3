const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            onSale: true,
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', onSale: true },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', onSale: false },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.image = this.variants[index].image
            this
            
            
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product + ' ' + this.onSale
        },
        onSale() {
            if (this.variants.onSale) {
                return this.brand + ' ' + this.product + ' ' + 'are on sale!'
            }
            return ' '
        }
    }
})
