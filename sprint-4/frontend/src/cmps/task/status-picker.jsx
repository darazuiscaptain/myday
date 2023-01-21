import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ModalStatusPriority } from "../modal-status-priority"

export function StatusPicker({ info, onUpdate }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    function onClick(ev) {
        setIsModalOpen(!isModalOpen)
    }
    
    let classText = !info.status ? 'empty-label ' : ''
    classText += 'label-text'
    const board = useSelector(storeState => storeState.boardModule.board)

    const label = board.labels.find(label => label.title === info.status)
    const color = label ? label.color : '#c4c4c4'
    return (
    <section className="status-picker picker label" style={{ backgroundColor: color }}>
        <div className={classText} onClick={onClick}>{info.status}</div>
        {isModalOpen && <ModalStatusPriority labels={board.labels} onUpdate={onUpdate} setIsModalOpen={setIsModalOpen} cmpType={'status'}/>}
    </section>
    )
    
}