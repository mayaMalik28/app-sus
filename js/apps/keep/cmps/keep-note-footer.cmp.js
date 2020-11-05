import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepNoteFooter',
    props: ['note'],
    template:`
    <section >
        <ul class="keep-note-footer" >
            <li>
                <i class="fas fa-thumbtack" @click="pinNote(note)"></i>
            </li>
            <li @click="showColors= !showColors">
                <i class="fas fa-palette"></i>
            </li>
            <li>
                <i class="fas fa-edit"></i>
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
            <li class="color" style="background-color: rgb(56 47 47)" @click="changeNoteColor($event,note)"></li>
        </ul>
    </section>
    `,
    data(){
        return{
            showColors: false
        }
    },
    methods:{
        pinNote(note){
            keepService.pinNote(note)
        },
        changeNoteColor(event, note){
            this.showColors = false
            keepService.changeNoteColor(event.target.style.backgroundColor, note)
        }
    }
}