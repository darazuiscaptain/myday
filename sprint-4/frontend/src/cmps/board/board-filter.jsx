import { addGroup, addTaskOnFirstGroup } from '../../store/board.actions'
import { useRef, useState } from 'react'
import { boardService } from '../../services/board.service'
import { useEffectUpdate } from '../../customHooks/useEffectUpdate'
import { utilService } from '../../services/util.service'

import { FaAngleDown } from 'react-icons/fa'
import { TfiSearch } from 'react-icons/tfi'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { CgViewComfortable } from 'react-icons/cg'
import { BsArrowDownCircle } from 'react-icons/bs'

export function BoardFilter({ board, onSetFilter }) {
    const [isShowModal, setIsShowModal] = useState(false)
    const [filterByToEdit, setFilterByToEdit] = useState(boardService.getDefaultFilterBoard())

    onSetFilter = useRef(utilService.debounce(onSetFilter))

    useEffectUpdate(() => {
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function onAddGroup() {
        addGroup(board)
        setIsShowModal(false)
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return (<section className="board-filter">
        <div className="add-btn">
            <span className='new-task-btn' onClick={() => addTaskOnFirstGroup(board)}>New Task</span>
            <div className='drop-down-btn' onClick={() => setIsShowModal(!isShowModal)}>
                <FaAngleDown className="icon" />
            </div>
            {isShowModal && <div className='add-group-modal'>
                <div className='add-group' onClick={onAddGroup}>
                    <CgViewComfortable className='icon' />
                    <span>New group of Tasks</span>
                </div>
                <div className='import-tasks'>
                    <BsArrowDownCircle className='icon' />
                    <span>Import tasks</span>
                </div>
            </div>}
        </div>
        <div className='flex align-center board-tools'>
            <div className='search-task'>
                <TfiSearch className='icon' />
                <input type="text"
                    name='title'
                    value={filterByToEdit.title}
                    placeholder="Search"
                    onChange={handleChange} />
            </div>
            <div className='person-filter'>
                <BsPersonCircle className='icon' />
                <span>Person</span>
            </div>
            <div className='hide-filter'>
                <AiOutlineEyeInvisible />
                <span>Hide</span>
            </div>
            <div className='more-btn'>
                <BiDotsHorizontalRounded />
            </div>
            {/* <button className="person-btn btn1"><BsPersonCircle /> Person</button> */}
            {/* <button className="hide-btn btn1"><AiOutlineEyeInvisible /> Hide</button> */}
            {/* <button className="more-btn btn1"><BiDotsHorizontalRounded /> </button> */}
        </div>
    </section>
    )
}