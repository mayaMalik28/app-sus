import longText from '../../../cmps/long-text.cmp.js'
export default {
    props: ['email'],
    template: `
    <li class="email-preview" >
    <router-link @click.stop :to="'/email/' +email.id " exact> 
    <div class="flex justify-space-between align-center">
    <p>{{email.from}}, {{email.to}}</p>
    <div class="flex center">
    <p>{{email.subject}} -</p>
        <long-text :text="email.body" :maxLength="30"/>
    </div>
    <p>{{date}}</p>
    </div>
    </router-link>
        <!-- <pre>{{email}}</pre> -->
    </li>
        `,
    computed: {
        date() {
            return (new Date(this.email.sentAt)).toLocaleDateString()
                // TODO: if its today- show hour
                // if less then a week - __ days ago
                // if more then week - __ weeks...
        }
    },
    components: {
        longText,
    }
}