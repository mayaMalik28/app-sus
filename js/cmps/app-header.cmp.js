export default {
    template: `
        <nav class="main-nav flex align-center justify-space-between">
            <div>
                <router-link to="/" exact class="logo"><i class="fab fa-earlybirds"></i>Owly<span>.</span></router-link>
            </div>
            <i @click="toggleNav" class="fas fa-th"></i>
            <div v-if="grid" class="grid-container">
                <button class="close-nav-btn" @click="toggleNav"><i class="fas fa-times"></i></button>
                <ul class="nav-grid">
                <li @click="toggleNav" class="nav-item works" >
                    <router-link to="/email/inbox" exact>
                    <i class="nav-icon fas fa-envelope"></i>
                        <p class="nav-desc">Email</p>
                    </router-link>
                </li>
                <li @click="toggleNav" class="nav-item works">
                    <router-link to="/keep" exact>
                    <i  class="nav-icon fas fa-sticky-note"></i>
                        <p class="nav-desc">Notes</p>
                    </router-link>
                </li>
                <li @click="toggleNav" class="nav-item works">
                    <router-link to="/about" exact>
                    <i class="nav-icon fas fa-address-card"></i>
                         <p class="nav-desc">About us</p>
                    </router-link>
                </li>
                <li @click="toggleNav" class="nav-item false">
                    <i class="nav-icon fas fa-images"></i>
                         <p class="nav-desc">Photos</p>
                        </li>
                <li @click="toggleNav" class="nav-item false">
                         <i class="nav-icon fas fa-calendar-times"></i>
                         <p class="nav-desc">Calendar</p>
                </li>
                <li @click="toggleNav" class="nav-item false">
                         <i class="nav-icon fas fa-newspaper"></i>
                         <p class="nav-desc">News</p>
                </li>
                <li @click="toggleNav" class="nav-item false">
                         <i class="nav-icon fas fa-globe-americas"></i>
                         <p class="nav-desc">Earth</p>
                </li>
                <li @click="toggleNav" class="nav-item false">
                    <i class="nav-icon fas fa-comment-dots"></i>
                         <p class="nav-desc">Chat</p>
                </li>
                <li @click="toggleNav" class="nav-item false">
                         <i class="nav-icon fas fa-play"></i>
                         <p class="nav-desc">Play</p>
                </li>
            </ul>
        </div>
        </nav>    
        `,data(){
        return {
            grid: false
        }
    },
    methods:{
        toggleNav(){
            this.grid= !this.grid;
        }
    }

}