import longText from '../../../cmps/long-text.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    name: 'enail-preview',
    props: ['email'],
    template: `
    <li class="email-preview" >
        <div class="flex justify-space-between align-center">
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
            <button @click.stop="removrEmail(email.id)">Remove</button>
        </div>
        <!-- <pre>{{email}}</pre> -->
    </li>
        `,
    methods: {
        removrEmail(id) {
            // console.log(id);
            emailService.removeEmail(id);

        }
    },
    computed: {
        date() {
            return (new Date(this.email.createdAt)).toLocaleDateString()
                // TODO: if its today- show hour
                // if less then a week - __ days ago
                // if more then week - __ weeks...
        }
    },
    components: {
        longText,
    }
}