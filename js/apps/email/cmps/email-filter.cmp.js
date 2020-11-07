import { eventBus, EVENT_FILTER_EMAIL } from '../../../services/event-bus-service.js'

export default {
    name: 'email-filter',
    template: `
    <section>
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
                isTextinc: true,
                isDateDec: false,
                isRead: null,
            },
        }
    },
    methods: {
        changeFilterBy() {
            if (this.filterBy.isRead === 'read') this.filterBy.isRead = true
            else if (this.filterBy.isRead === 'unread') this.filterBy.isRead = false
            else this.filterBy.isRead = null
            this.createFilterEvent()
        },
        sortByDate() {
            this.filterBy.isSortByText = false;
            this.createFilterEvent()
        },
        sortByText() {
            this.filterBy.isSortByText = true;
            this.createFilterEvent()
        },
        createFilterEvent() {
            eventBus.$emit(EVENT_FILTER_EMAIL, JSON.parse(JSON.stringify(this.filterBy)));

        }
    },
}