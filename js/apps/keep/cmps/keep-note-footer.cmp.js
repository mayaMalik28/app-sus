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
            <li class="color" style="background-color: rgb(251, 232, 235)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(224, 255, 220)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(198, 204, 255)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(214, 245, 253)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
            <li class="color" style="background-color: rgb(255, 0, 0)" @click="changeNoteColor($event,note)"></li>
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
            keepService.changeNoteColor(event.target.style.backgroundColor, note)
        }
    }
}