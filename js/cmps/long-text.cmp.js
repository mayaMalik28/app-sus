export default {
    props: ['text', 'maxLength'],
    template: `
        <p class="long-text">
                {{textToShow}} 
                <!-- <button 
                v-if="moreThen" 
                v-on:click="toggleReadMore">
                {{readMore}}
                </button>         -->
            </p>
    `,
    data() {
        return {
            shortText: true
        }
    },
    methods: {
        toggleReadMore() {
            this.shortText = !this.shortText;
        }

    },
    computed: {
        textToShow() {
            if (this.shortText && !(this.text.length < this.maxLength)) return this.text.substring(0, this.maxLength) + '...';
            else return this.text
        },
        moreThen() {
            return !(this.text.length < this.maxLength)
        },
        readMore() {
            if (this.shortText) return 'Read More';
            else return 'Read Less'
        }
    },
    created() {


    },

}