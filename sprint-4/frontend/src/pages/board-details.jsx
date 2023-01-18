import { BoardHeader } from "../cmps/board/board-header"
import { MainSidebar } from "../cmps/sidebar/main-sidebar"
import { WorkspaceSidebar } from "../cmps/sidebar/workspace-sidebar"
import { useState, useEffect, useRef } from 'react'
import { loadBoards } from "../store/board.actions"
import { useSelector } from 'react-redux'
import { GroupList } from '../cmps/board/group-list.jsx'

export function BoardDetails() {
    const boards = useSelector(state => state.boardModule.boards)

    useEffect(() => {
        loadBoards()
    }, [])

    if (!boards) return <div>Loading...</div>
    return (
        <section className="board-details">
            <MainSidebar />
            <WorkspaceSidebar boards={boards} />
            <main className="board-main">
                <BoardHeader />
                {console.log(boards)}
                <GroupList board={boards[0]} />
            </main>
        </section>
    )
}