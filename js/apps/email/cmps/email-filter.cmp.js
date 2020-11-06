import { eventBus, EVENT_FILTER_EMAIL } from '../../../services/event-bus-service.js'

export default {
    name: 'email-filter',
    template: `
    <section>
        <!-- <button @click="toggleSort">{{sortBy}}</button> -->
        <button @click="sortByText">Sort By Text</button>
        <button @click="sortByDate">Sort By Date</button>
        <select 
        value="all"
        v-model="filterBy.isRead"
        @change="changeFilterBy()">
        <option value="all" selected>All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
            read</select>
    </section>
        `,
    data() {
        return {
            filterBy: {
                isSortByText: true,
                isRead: null,
            },
        }
    },
    methods: {
        changeFilterBy() {
            if (this.filterBy.isRead === 'read') this.filterBy.isRead = true
            else if (this.filterBy.isRead === 'unread') this.filterBy.isRead = false
            else this.filterBy.isRead = null
            console.log(this.filterBy.isRead);
            eventBus.$emit(EVENT_FILTER_EMAIL, this.filterBy);
        },
        // toggleSort() {
        //     this.filterBy.isSortByText = !this.filterBy.isSortByText;
        //     eventBus.$emit(EVENT_FILTER_EMAIL, JSON.parse(JSON.stringify(this.filterBy)));
        // },
        sortByDate() {
            this.filterBy.isSortByText = false;
            eventBus.$emit(EVENT_FILTER_EMAIL, JSON.parse(JSON.stringify(this.filterBy)));
        },
        sortByText() {
            this.filterBy.isSortByText = true;
            eventBus.$emit(EVENT_FILTER_EMAIL, JSON.parse(JSON.stringify(this.filterBy)));
        }
    },
    computed: {
        sortBy() {
            if (this.filterBy.isSortByDate) return 'sort by text'
            return 'sort by date'
        }

    }
}