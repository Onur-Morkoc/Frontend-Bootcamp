import "./SideBarMenu.css"

const SideBarMenu = ({ name, icon, class_name }) => {


    return (
        <li>
            <a href='/#' className={`link ${class_name}`} >
                <div className="link_icon">{icon}</div>
                <div className={`link_text ${class_name}`}>{name}</div>
            </a>
        </li>

    )

}

export default SideBarMenu;
