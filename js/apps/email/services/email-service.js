import { utilService } from '../../../services/util-service.js'

export const emailService = {
    getEmails,
    getEmailById,

}

var emails = [{
        id: utilService.makeId(),
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        from: 'me',
        to: 'stav',
        isStarred: true,
        isLater: false,
        isInbox: false,
        isSent: true,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        subject: '2?',
        body: 'blaa!',
        isRead: false,
        from: 'stav',
        to: 'me',
        isStarred: false,
        isLater: false,
        isInbox: true,
        isSent: false,
        sentAt: 1551133930598
    },
    {
        id: utilService.makeId(),
        subject: 'email',
        body: '......',
        isRead: true,
        from: 'ariana',
        to: 'me',
        isStarred: false,
        isLater: true,
        isInbox: true,
        isSent: false,
        sentAt: 1551133930596
    },
]

function getEmails() {
    return Promise.resolve(emails);
}

function getEmailById(emailId) {
    const email = emails.find(email => email.id === emailId);
    return Promise.resolve(email);
}