import { eventBus, EVENT_FILTER_EMAIL } from '../../../services/event-bus-service.js'

export default {
    template: `
    <section>
        <h1>Filter</h1>
        <button @click="toggleSort">{{sortBy}}</button>
        <select 
        v-model="filterBy.isRead"
        @change="changeFilterBy()">
        <option value="null">All</option>
        <option value="true">Read</option>
        <option value="false">Unread</option>
            read</select>
    </section>
        `,
    data() {
        return {
            filterBy: {
                isSortByDate: true,
                isRead: null,
            },
        }
    },
    methods: {
        changeFilterBy() {
            eventBus.$emit(EVENT_FILTER_EMAIL, this.filterBy);
        },
        toggleSort() {
            this.filterBy.isSortByDate = !this.filterBy.isSortByDate;
            eventBus.$emit(EVENT_FILTER_EMAIL, this.filterBy);
        }
    },
    computed: {
        sortBy() {
            if (this.filterBy.isSortByDate) return 'sort by date'
            return 'sort by text'
        }

    }
}