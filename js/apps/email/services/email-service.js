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
        subject: 'This is a scam!',
        body: 'Trust our company and we will take all your money! In a few steps give us your card details and there you go! you are poor now!',
        isRead: false,
        from: 'Shady INC',
        to: 'me',
        isStarred: false,
        isInbox: true,
        isSent: false,
        createdAt: 1551133930594,
        repliedId: null
    },
    {
        id: utilService.makeId(),
        subject: 'New music from artists you love',
        body: 'Your Release Radar is here: Fresh tracks by your favorite artists, including Pink Floyd, on a personalized playlist that we update just for you every Friday. Listen to it now on Spotify.',
        isRead: false,
        from: 'Spotify‏',
        to: 'me',
        isStarred: false,
        isInbox: true,
        isSent: false,
        createdAt: 1559483930598,
        repliedId: null

    },
    {
        id: utilService.makeId(),
        subject: 'Confirm Your Email',
        body: `HEY THERE! You're so close to using your first Font Awesome Kit! We just need you to confirm your email address and finish setting up a new Font Awesome account we created just for you. You can do it super-quickly!`,
        isRead: true,
        from: 'Font Awesome',
        to: 'me',
        isStarred: false,
        isInbox: true,
        isSent: false,
        createdAt: 1551203930596,
        repliedId: null
    },
    {
        id: 'markMail',
        subject: 'Please help!',
        body: `I really need some coding advice and I now you are the best in the business, contact me ASAP`,
        isRead: true,
        from: 'Mark Zuckerberg',
        to: 'me',
        isStarred: true,
        isInbox: true,
        isSent: false,
        createdAt: 1559485939758,
        repliedId: null
    },
    {
        id: utilService.makeId(),
        subject: 'New sign-in',
        body: `
            Hi Maya (or Stav)
            We noticed a new sign-in with your Netflix account (Hartabuna@gmail.com).
            
            Device
            Web Browser
            Location
            Central District, Israel
            (may not match your exact location)
            Time
            September 21st, 12:55 PM GMT+3
            If you signed-in recently, relax and enjoy watching! But if you don’t recognize this sign-in, we recommend that you change your password immediately to secure your account.
            We're here to help if you need it. Visit the Help Center for more info or contact us.
            –Your friends at Netflix`,
        isRead: false,
        from: 'Netflix',
        to: 'me',
        isStarred: true,
        isInbox: true,
        isSent: false,
        createdAt: 1557586938593,
        repliedId: null
    },
    {
        id: utilService.makeId(),
        subject: 'Thanks for ordering',
        body: `thank you for ordering from us! your order of: 27 pizzas is on its way! don't forget to tip
                the delivery guy because ew won't! `,
        isRead: true,
        from: 'Dominos Pizza',
        to: 'me',
        isStarred: false,
        isInbox: true,
        isSent: false,
        createdAt: 1555776931036,
        repliedId: null
    },
    {
        id: utilService.makeId(),
        subject: 'We are jealous',
        body: `damnnnn that's a sweet app, call us if you are looking for a job`,
        isRead: false,
        from: 'Google',
        to: 'me',
        isStarred: true,
        isInbox: true,
        isSent: false,
        createdAt: 1551000937594,
        repliedId: null
    },
    {
        id: 'gitMail',
        subject: 'Stop.Forgetting.The password.',
        body: `Again man? you gotta stop doing that, you will run out of Ideas eventually`,
        isRead: true,
        from: 'GitHub',
        to: 'me',
        isStarred: false,
        isInbox: true,
        isSent: false,
        createdAt: 1554885931010,
        repliedId: null
    },
    {
        id: utilService.makeId(),
        subject: 'Join Us!',
        body: `come and use our app! we are just like Whatsapp but we also have... we also have...
                OK we are exactly the same! stop shaming us! `,
        isRead: true,
        from: 'Slack',
        to: 'me',
        isStarred: false,
        isInbox: true,
        isSent: false,
        createdAt: 1555599930385,
        repliedId: null
    },
    {
        id: utilService.makeId(),
        subject: 'Lets talk business',
        body: `dear mr Bezos. I'm (not) sending you this email just for a simple request.
                one million dollars. thats all. just 1 Mil and i'll stop (not) sending you this stupids stuff. `,
        isRead: false,
        from: 'me',
        to: 'jeff Bezos',
        isStarred: false,
        isInbox: false,
        isSent: true,
        createdAt: 1557777937688,
        repliedId: null
    },
    {
        id: utilService.makeId(),
        subject: 'Re: Stop asking Me!',
        body: `dude, stop bagging so much. you want my advice? give 20% of Facebook and then we'll see.`,
        isRead: false,
        from: 'me',
        to: 'Mark Zuckerberg',
        isStarred: false,
        isInbox: false,
        isSent: true,
        createdAt: 1559999931298,
        repliedId: 'markMail'
    },
    {
        id: utilService.makeId(),
        subject: 'Re: Ok... relax',
        body: `I'm sorry man, i just never need it until you guys randomly asking me to log in again,
                maybe you are the problem...`,
        isRead: false,
        from: 'me',
        to: 'Github',
        isStarred: false,
        isInbox: false,
        isSent: true,
        createdAt: 1552222933476,
        repliedId: 'gitMail'
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
    return emails.filter((email) => email[currCategory]);

}