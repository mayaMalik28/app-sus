export default {
    template: `
        <nav class="main-nav flex align-center justify-space-between">
            <router-link to="/" exact>Home</router-link>
            <ul>
                <li>
                    <router-link to="/book" exact>Books</router-link>
                </li>
                <li>
                    <router-link to="/email" exact>eMail</router-link>
                </li>
                <li>
                    <router-link to="/keep" exact>Keep</router-link>
                </li>
                <li>
                    <router-link to="/about">About Us</router-link>
                </li>
            </ul>
        </nav>    
    `,

}