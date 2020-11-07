import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

export const emailService = {
    getEmails,
    getEmailById,
    getEmptyEmailToSend,
    sendEmail,
    removeEmail,
    saveEmailAsDraft,
    toggleStar,
    toggleRead,
    countReadEmails,
    countEmails,
    setCurrCategory,
    getCurrCategory
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
        // isLater: false,
        isInbox: false,
        isSent: true,
        createdAt: 1551133930594,
        repliedId: null
    },
    {
        id: utilService.makeId(),
        subject: '2?',
        body: 'blaa!',
        isRead: false,
        from: 'stav',
        to: 'me',
        isStarred: false,
        // isLater: false,
        isInbox: true,
        isSent: false,
        createdAt: 1550133930598,
        repliedId: null

    },
    {
        id: utilService.makeId(),
        subject: 'email',
        body: '......',
        isRead: true,
        from: 'ariana',
        to: 'me',
        isStarred: false,
        // isLater: true,
        isInbox: true,
        isSent: false,
        createdAt: 1551133930596,
        repliedId: null

    },
]
var emails;
var currCategory = 'isInbox';

getEmails()

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

function toggleStar(emailId) {
    getEmailById(emailId)
        .then((email) => {
            email.isStarred = !email.isStarred
            saveEmailsToLocal();
        })

}

function toggleRead(emailId) {
    getEmailById(emailId)
        .then((email) => {
            email.isRead = !email.isRead
            saveEmailsToLocal();

        })
}

function getEmptyEmailToSend() {
    return {
        id: utilService.makeId(),
        subject: '',
        body: '',
        from: 'me',
        to: '',
        isInbox: null,
        isSent: null,
        isRead: true,
        isStarred: false,
        // isLater: false,
        createdAt: Date.now(),
        cc: null,
        bcc: null,
        isDraft: false,
        repliedId: null
    }
}

function sendEmail(email) {
    if (email.to === '') return Promise.reject('You didn\'t mantion who is getting this email')
    if (email.body === '') return Promise.reject('What do you want to sey?')
    email.isSent = true;
    if (email.to === 'me') {
        email.isInbox = true;
        email.isRead = false
    }
    if (email.isDraft) email.isDraft = false
    return saveEmail(email);
}

function saveEmailAsDraft(email) {
    email.isDraft = true
    return saveEmail(email);
}

function saveEmail(email) {
    if (email.subject === '') email.subject = 'No Subject'
    getEmailById(email.id)
        .then((emailById) => {
            if (emailById) emailById = email
            else emails.push(email)
            saveEmailsToLocal();
        })
    return Promise.resolve('saved')
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

function countReadEmails() {
    const emailsByCattegory = getEmailsByCategory();
    var count = 0
        // emails.forEach(email => {
    emailsByCattegory.forEach(email => {
        if (email.isRead) count++
    })
    return count;
}

function countEmails() {
    const emailsByCattegory = getEmailsByCategory();
    // return emails.length;
    return emailsByCattegory.length;
}

function setCurrCategory(category) {
    currCategory = category;
    console.log(currCategory);
}

function getCurrCategory() {
    return currCategory;
}

function getEmailsByCategory() {
    console.log(currCategory);
    console.log(emails.filter((email) => email[currCategory]));
    return emails.filter((email) => email[currCategory]);

}