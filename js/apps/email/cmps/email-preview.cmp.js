export default {
    props: ['email'],
    template: `
    <li class="email-preview">
    <ul class="flex">
    <li></li>
    </ul>
        <pre>{{email}}</pre>
    </li>
        `
}