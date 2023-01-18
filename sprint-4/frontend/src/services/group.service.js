import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'groupDB'

_createGroups()

export const groupService = {
    query,
    getById,
    save,
    remove,
    getEmptyGroup,
    getEmptyFilter
}


function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(groupId) {
    return storageService.get(STORAGE_KEY, groupId)
}

function remove(groupId) {
    return storageService.remove(STORAGE_KEY, groupId)
}

function save(group) {
    if (group._id) return storageService.put(STORAGE_KEY, group)
    return storageService.post(STORAGE_KEY, group)
}

function getEmptyGroup() {
    return {
        "title": '',
        "archivedAt": Date.now(),
        "tasks": [],
    }
}

function _createGroups() {
    let groups = utilService.loadFromStorage(STORAGE_KEY)
    if (!groups) {
        groups = []
        groups.push(
            {
                "groups": [
                    {
                        "id": "g101",
                        "title": "Group 1",
                        "archivedAt": 1589983468418,
                        "tasks": [
                            "c101",
                            "c102"
                        ],
                    },
                    {
                        "id": "g102",
                        "title": "Group 2",
                        "tasks": [
                            "c103",
                            "c104",
                            "c105"
                        ],
                    }
                ],
            }
        )
        utilService.saveToStorage(STORAGE_KEY, groups)
    }
}






