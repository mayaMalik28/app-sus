import { keepService } from '../services/keep-service.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    name: 'keepNoteFooter',
    props: ['note'],
    template: `
    <section >
        <ul class="keep-note-footer" >
            <li>
                <i class="fas fa-trash" @click="deleteNote(note)"></i>
            </li>
            <li @click="showColors= !showColors">
                <i class="fas fa-palette"></i>
            </li>
            <li>
                <i @click="editNote(note)" class="fas fa-edit"></i>
            </li>
            <li>
                <i @click="sendAsMail(note)" class="fas fa-envelope"></i>
            </li>
        </ul>
        <ul v-if="showColors" class="colors">
            <li class="color" style="background-color: lightgoldenrodyellow" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: white" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255 204 212)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(251 204 255)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(223 204 255)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(187 190 253)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(187 221 253)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(187 253 246)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(153 255 187)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(171 255 153)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(232 255 153)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255 217 153)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255 170 153)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(191 191 191)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(128 128 128)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(201, 198, 186)" @click="changeNoteColor($event,note)"></li>
        </ul>
    </section>
    `,
    data() {
        return {
            showColors: false
        }
    },
    methods: {
        deleteNote(note) {
            eventBus.$emit('show-msg', {
                text: `"${note.info.title}" was deleted`,
                type: 'success'
            })
            keepService.deleteNote(note)
        },
        changeNoteColor(event, note) {
            this.showColors = false
            keepService.changeNoteColor(event.target.style.backgroundColor, note)
        },
        editNote(note) {
            document.getElementById("keep-editor").scrollIntoView();
            eventBus.$emit('editNote', note)
        },
        sendAsMail(note) {
            this.$router.push('/email/inbox')
            eventBus.$emit('noteToMail', note);
        }
    }
}