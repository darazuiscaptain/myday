import { Link } from 'react-router-dom'
import { useState } from 'react'

import { AiOutlineStar } from 'react-icons/ai'
import { VscTriangleLeft } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { LoginLogoutModal } from '../modal/login-logout-modal'

const logoHomePage = require('../../assets/img/icon.png')
const guest = require('../../assets/img/guest.png')

export function MainSidebar({ setIsStarredOpen, setIsLoginModalOpen }) {
    const [iconChoose, setIconChoose] = useState('board')
    const user = useSelector(storeState => storeState.userModule.user)

    function onChooseIcon(icon) {
        setIconChoose(icon)
        if (icon === 'starred') {
            setIsStarredOpen(true)
        }
        else setIsStarredOpen(false)
    }

    return (
        <section className="main-sidebar">
            <Link to={'/'}> <img className='home-img' src={logoHomePage} alt="" /> </Link>
            <div className='middle-div'>
                <div className="icon-container">
                    <svg className="workspace-icon" onClick={() => onChooseIcon('board')} width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5063 0.983153C0.782691 2.23087 0.3638 4.68688 1.57068 6.46881L11.7573 21.509C12.5031 22.6101 13.6951 23.1962 14.9037 23.1889C16.1107 23.1945 17.3004 22.6086 18.0451 21.509L28.2344 6.46481C29.4413 4.68289 29.0224 2.22688 27.2988 0.979157C25.5752 -0.268562 23.1995 0.164499 21.9927 1.94643L14.9012 12.4168L7.81243 1.95042C6.60555 0.168496 4.22991 -0.264566 2.5063 0.983153Z" fill="#D7D7FF"></path><path d="M2.50923 23.8352C0.785618 22.5875 0.366728 20.1315 1.57361 18.3495L11.7558 3.31581C12.499 2.21855 13.6853 1.63274 14.8897 1.6359C16.1013 1.62581 17.2971 2.21204 18.0447 3.3157L28.2269 18.3495C29.4338 20.1315 29.0149 22.5875 27.2913 23.8352C25.5677 25.0829 23.1921 24.6499 21.9852 22.8679L14.9003 12.4073L7.81536 22.8679C6.60848 24.6499 4.23284 25.0829 2.50923 23.8352Z" fill="url(#paint0_linear_1640_88925)"></path><path d="M10.2475 19.2773L5.59619 12.4098L10.2475 5.54228L14.8988 12.4098L10.2475 19.2773Z" fill="#C1C1FF"></path><defs><linearGradient id="paint0_linear_1640_88925" x1="18.3366" y1="19.6173" x2="15.7336" y2="1.25856" gradientUnits="userSpaceOnUse"><stop stopColor="#8F8FFF"></stop><stop offset="1" stopColor="#C2C2FF"></stop></linearGradient></defs></svg>
                    {iconChoose === 'board' && <VscTriangleLeft className="triangle-icon" />}
                </div>
                <div data-title="Favorites" className='icon-container' onClick={() => onChooseIcon('starred')}>
                    < AiOutlineStar />
                    {iconChoose === 'starred' && <VscTriangleLeft className="triangle-icon" />}</div>
            </div>
            <div className='bottom'>
                <img className='logged-user-img' src={(user && user.imgUrl) ? user.imgUrl : guest} alt="" onClick={() => setIsLoginModalOpen(prev => !prev)} />
            </div>
        </section>
    )
}