import { storageService } from '../../../services/storage-service.js'

export const keepStorageService = {
    saveNotesToLocalStorage,
    loadNotesToLocalStorage,
    savePinnedNotesToLocalStorage,
    loadPinnedNotesToLocalStorage
}

function saveNotesToLocalStorage(val){
    storageService.saveToStorage('notesDB',val)
}

function loadNotesToLocalStorage(){
    return storageService.loadFromStorage('notesDB')
}
function savePinnedNotesToLocalStorage(val){
    storageService.saveToStorage('pinnedNotesDB',val)
}

function loadPinnedNotesToLocalStorage(){
    return storageService.loadFromStorage('pinnedNotesDB')
}