export default {
    template: `
    <section class="home-page">
        <!-- <img class="home-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b47f353-1cbf-4a98-bd47-91a626d842dd/damhm6d-4197f1c7-b5a7-4947-908b-313ee14436b5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNmI0N2YzNTMtMWNiZi00YTk4LWJkNDctOTFhNjI2ZDg0MmRkXC9kYW1obTZkLTQxOTdmMWM3LWI1YTctNDk0Ny05MDhiLTMxM2VlMTQ0MzZiNS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.8aDgDooYV4SPF2pea7fECGUsUxxJTXdZmZxu9UofxTk"/> -->
        <div class="home-img flex-column center">
            <i class="fab fa-earlybirds"></i>
            <h3>Owly<span>.</span></h3>
        </div>
        <div class="home-btn-container">
            <button @click="toEmail" class="home-page-btn">
                    <i class="fas fa-envelope-open"></i>
                    Email
                <p class="home-btn-desc">Get And Send Your Emails</p>
            </button>
            <button @click="toNotes" class="home-page-btn">
                <i class="fas fa-sticky-note"></i>
                Notes
                <p class="home-btn-desc">Save Every Little Thought</p>
            </button>
            <button @click="toBooks" class="home-page-btn">
                <i class="fas fa-book-open"></i>
                Books
                <p class="home-btn-desc">Manage Your Favorite Books</p>
            </button>
        </div>
    </section>
    `,
    methods: {
        toEmail() {
            this.$router.push('/email/inbox')
        },
        toNotes() {
            this.$router.push('/keep')
        },
        toBooks() {
            this.$router.push('/book')
        },

    }

}