import { utilService } from '../../../services/util-service.js'

export const emailService = {
    getEmails,
}

var emails = [{
        id: utilService.makeId(),
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        from: 'me',
        to: 'stav',
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        subject: '2?',
        body: 'blaa!',
        isRead: false,
        from: 'stav',
        to: 'me',
        sentAt: 1551133930598
    },
    {
        id: utilService.makeId(),
        subject: 'email',
        body: '......',
        isRead: true,
        from: 'ariana',
        to: 'me',
        sentAt: 1551133930596
    },
]

function getEmails() {
    return Promise.resolve(emails);
}