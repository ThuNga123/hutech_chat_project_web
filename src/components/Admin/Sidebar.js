import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/Admin/Sidebar.css'
import admin from '../../router/admin'

const sidebarNavItems = [
  {
    display: 'Trang chủ',
    icon: <i className="fa fa-home"></i>,
    to: '/',
    section: '',
  },
  {
    display: 'Dịch vụ khám',
    icon: <i className="fa fa-plus-square"></i>,
    to: '/homeStaff',
    section: 'homeStaff',
  },
  {
    display: 'Nhân viên',
    icon: <i className="fa fa-user-md"></i>,
    to: '/homeAdmin',
    section: 'homeAdmin',
  },
  {
    display: 'Bệnh nhân',
    icon: <i className="fa fa-group"></i>,
    to: '/signIn',
    section: 'signIn',
  },
  {
    display: 'Lịch khám',
    icon: <i className="fa fa-calendar"></i>,
    to: '/test',
    section: 'test',
  },
]

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [stepHeight, setStepHeight] = useState(0)
  const sidebarRef = useRef()
  const indicatorRef = useRef()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar-menu-item')
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`
      setStepHeight(sidebarItem.clientHeight)
    }, 50)
  }, [])

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1]
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath,
    )
    setActiveIndex(curPath.length === 0 ? 0 : activeItem)
  }, [location])

  return (
    <div className="side">
      <div className="sidebar">
        <div className="sidebar-logo">Chức năng</div>
        <hr />
        <div ref={sidebarRef} className="sidebar-menu">
          <div
            ref={indicatorRef}
            className="sidebar-menu-indicator"
            style={{
              transform: `translateX(-50%) translateY(${
                activeIndex * stepHeight
              }px)`,
            }}
          ></div>
          {sidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div
                className={`sidebar-menu-item ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <div className="sidebar-menu-item-icon">{item.icon}</div>
                <div className="sidebar-menu-item-text">{item.display}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      ;
    </div>
  )
}

export default Sidebar
