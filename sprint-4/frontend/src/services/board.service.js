import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'boardDB'

_createBoards()

export const boardService = {
    query,
    getById,
    save,
    remove,
    getEmptyBoard,
    getEmptyFilter
}


function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
}

function remove(boardId) {
    return storageService.remove(STORAGE_KEY, boardId)
}

function save(board) {
    if (board._id) return storageService.put(STORAGE_KEY, board)
    return storageService.post(STORAGE_KEY, board)
}

function getEmptyBoard() {
    return {
        "title": 'New Board',
        "archivedAt": Date.now(),
        "labels": [
            {
                "id": "l101",
                "title": "Done",
                "color": "#037f4c"
            },
            {
                "id": "l102",
                "title": "Progress",
                "color": "#ffcb00"
            },
            {
                "id": "l103",
                "title": "stack",
                "color": "#e2445c"
            }
        ],
        "members": [
        {
            "_id": "m101",
            "fullname": "Tal Tarablus",
            "imgUrl": "https://res.cloudinary.com/du63kkxhl/image/upload/v1673788222/cld-sample.jpg"
        },
        {
            "_id": "m102",
            "fullname": "Idan David",
            "imgUrl": "https://res.cloudinary.com/du63kkxhl/image/upload/v1673820094/%D7%A2%D7%99%D7%93%D7%9F_jranbo.jpg"
        }],
        "groups": [],
        "activities": [],
        "cmpsOrder": ["status-picker", "member-picker", "date-picker"]
    }
}

function getEmptyFilter() {
    return {
        
    }
}

function _createBoards() {
    let boards = utilService.loadFromStorage(STORAGE_KEY)
    if (!boards) {
        boards = []
        boards.push(
            {
                "_id": "b101",
                "title": "Robot dev proj",
                "archivedAt": 1589983468418,
                "createdBy": {
                    "_id": "m102",
                    "fullname": "Idan David",
                    "imgUrl": "https://res.cloudinary.com/du63kkxhl/image/upload/v1673820094/%D7%A2%D7%99%D7%93%D7%9F_jranbo.jpg"
                },
                "labels": [
                    {
                        "id": "l101",
                        "title": "Done",
                        "color": "#00c875"
                    },
                    {
                        "id": "l102",
                        "title": "Progress",
                        "color": "#fdab3d"
                    },
                    {
                        "id": "l101",
                        "title": "Stuck",
                        "color": "#e2445c"
                    },
                    {
                        "id": "l102",
                        "title": "Low",
                        "color": "#ffcb00"
                    },
                    {
                        "id": "l101",
                        "title": "Medium",
                        "color": "#a25ddc"
                    },
                    {
                        "id": "l102",
                        "title": "High",
                        "color": "#e2445c"
                    },
                ],
                "members": [
                    {
                        "_id": "m101",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "https://res.cloudinary.com/du63kkxhl/image/upload/v1673788222/cld-sample.jpg"
                    },
                    {
                        "_id": "m102",
                        "fullname": "Idan David",
                        "imgUrl": "https://res.cloudinary.com/du63kkxhl/image/upload/v1673820094/%D7%A2%D7%99%D7%93%D7%9F_jranbo.jpg"
                    },
                    {
                        "_id": "m103",
                        "fullname": "Ofek Tarablus",
                        "imgUrl": "https://res.cloudinary.com/du63kkxhl/image/upload/v1674069458/image_exxnux.png"
                    },
                    {
                        "_id": "m104",
                        "fullname": "Ofer Tarablus",
                        "imgUrl": "https://res.cloudinary.com/du63kkxhl/image/upload/v1674069496/me_dpbzfs.jpg"
                    }
                ],
                "groups": ["g101", "g102",],
                "activities": [
                    {
                        "id": "a101",
                        "txt": "Changed Color",
                        "createdAt": 154514,
                        "byMember": {
                            "_id": "m101",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "https://res.cloudinary.com/du63kkxhl/image/upload/v1673788222/cld-sample.jpg"
                        },
                        "task": {
                            "id": "c101",
                            "title": "Replace Logo"
                        }
                    }
                ],
                "cmpsOrder": ["status-picker", "member-picker", "date-picker"]
            }
        )
        utilService.saveToStorage(STORAGE_KEY, boards)
    }
}
