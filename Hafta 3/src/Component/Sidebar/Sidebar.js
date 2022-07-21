import SideBarMenu from '../SideBarMenu/SideBarMenu';
import "./SideBar.css"
import {
    AiOutlineHome,
    AiOutlineAppstore,
    AiOutlineApartment,
    AiOutlineSend,
    AiOutlineTeam,
    AiOutlineFundProjectionScreen,
    AiOutlineLogin,
    AiOutlineMenuFold,
} from 'react-icons/ai';
import { useState } from 'react';


const Sidebar = () => {

    const menuItems = [
        {
            name: "Dashboard",
            icon: <AiOutlineHome />
        },
        {
            name: "Projects",
            icon: <AiOutlineAppstore />
        },
        {
            name: "Modules",
            icon: <AiOutlineApartment />
        },
        {
            name: "Sprint",
            icon: <AiOutlineSend />
        },
        {
            name: "Members",
            icon: <AiOutlineTeam />
        },
        {
            name: "Reports",
            icon: <AiOutlineFundProjectionScreen />
        },

    ]

    const [isOpen, setIsOpen] = useState(false)


    const toggle = () => setIsOpen(!isOpen)



    return (
        <section className={isOpen ? "active" : ""}>
            <div className={`sidebar ${isOpen ? "active" : ""}`}>
                <div className={`sidebar_content ${isOpen ? "active" : ""}`}>
                    <div className={`top_sidebar ${isOpen ? "active" : ""}`}>
                        <div className={`logo-icon ${isOpen ? "active" : ""}`}>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className='big-icon' cx="12" cy="16" r="10" stroke="#0075FF" strokeWidth="4" />
                                <circle className='small-icon' cx="25" cy="26" r="6" stroke="#1BE3A7" strokeWidth="4" />
                            </svg>
                        </div>
                        <h1 className={`logo-text ${isOpen ? "active" : ""}`}>ChirKuut</h1>
                        <div className={`bars ${isOpen ? "active" : ""}`} onClick={toggle}> <AiOutlineMenuFold /> </div>
                    </div>
                    <ul>
                        {menuItems.map((item, index) => <SideBarMenu key={index} name={item.name} icon={item.icon} class_name={isOpen ? "active" : ""} />)}
                    </ul>


                </div>

                <div className={`logout ${isOpen ? "active" : ""}`}>
                    <ul>
                        <SideBarMenu class_name={isOpen ? "active" : ""} name="Log out" icon={<AiOutlineLogin />} />
                    </ul>
                </div>

            </div>

        </section>
    );
}

export default Sidebar;
