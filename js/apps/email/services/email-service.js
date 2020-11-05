import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

export const emailService = {
    getEmails,
    getEmailById,
    getEmptyEmailToSend,
    sendEmail,
    removeEmail,

}

const EMAILS_KEY = 'emailsDB'
var emailsData = [{
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
        createdAt: 1551133930594
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
        createdAt: 1550133930598
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
        createdAt: 1551133930596
    },
]
var emails;

function getEmails() {
    emails = storageService.loadFromStorage(EMAILS_KEY);
    if (!emails || emails.length < 1) {
        console.log('from data');
        emails = emailsData;
    }
    saveEmailsToLocal();
    return Promise.resolve(emails);
}

function getEmailById(emailId) {
    const email = emails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getEmptyEmailToSend() {
    return {
        id: utilService.makeId(),
        subject: '',
        body: '',
        from: 'me',
        to: '',
        isInbox: null,
        isSent: true,
        isRead: null,
        isStarred: false,
        isLater: false,
        createdAt: Date.now(),
        cc: null,
        bcc: null,
        isDraft: false
    }
}

function sendEmail(email) {
    return saveEmail(email);
}

function saveEmail(email) {
    if (email.subject === '') email.subject = 'No Subject'
    emails.push(email);
    console.log(emails);
    saveEmailsToLocal();
    return Promise.resolve()
}

function removeEmail(emailId) {
    const emailIdx = emails.findIndex(email => email.id === emailId);
    console.log(emailIdx);
    emails.splice(emailIdx, 1);
    saveEmailsToLocal();
    return Promise.resolve();

}

function saveEmailsToLocal() {
    storageService.saveToStorage(EMAILS_KEY, emails);
}