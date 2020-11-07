export default {
    template: `
<button @click="toggleSideBar" class="btn btn-hamburger">
<i v-if="isSideBar" class="fas fa-times"></i>
<i v-if="!isSideBar" class="fas fa-bars"></i>       
</button> `,
    data() {
        return {
            isSideBar: false
        }
    },
    methods: {
        toggleSideBar() {
            this.$emit('sideBar')
            this.isSideBar = !this.isSideBar
        },
    },

    created() {}
}