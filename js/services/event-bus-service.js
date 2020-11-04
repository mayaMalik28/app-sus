export const EVENT_SHOW_MSG = 'show-msg';
export const EVENT_FILTER_EMAIL = 'filter-email';
export const EVENT_FILTER_CATEGORY = 'filter-category';



export const eventBus = new Vue()

// Event Bus is a simple mechanism to communicate app-wide
// This is a PubSub Mechanism:
// Publishers and Subscribers