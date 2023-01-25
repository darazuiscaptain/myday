import React from 'react'
import { Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import { BoardDetails } from './pages/board-details'
import { HomePage } from './pages/home-page'
import { store } from './store/store'
import { LoginSignup } from './cmps/login/login-signup'

export function RootCmp() {
    return (
        <Provider store={store}>
            <div>
                <main>
                    <Routes>
                        <Route element={<HomePage />} path='/' />
                        <Route element={<BoardDetails />} path='/board/:boardId/' />
                        <Route element={<BoardDetails />} path='/board/:boardId/:groupId/:taskId' />
                        <Route element={<LoginSignup />} path='/auth/login' />
                        <Route element={<LoginSignup />} path='/auth/signup' />
                    </Routes>
                </main>
            </div>
        </Provider>
    )
}
