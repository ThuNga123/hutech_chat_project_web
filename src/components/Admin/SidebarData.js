import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
// import HomeAdmin from '../../screen/admin/HomeAdmin'
// import Services from '../../screen/admin/Services'
// import Patient from '../../screen/admin/Patient'
// import Personnel from '../../screen/admin/Personnel'
// import Book from '../../screen/admin/Book'

export const SidebarData = [
  {
    title: 'Trang chủ',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Dịch vụ',
    path: '/services',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Bệnh nhân',
    path: '/patients',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Nhân viên',
    path: '/personnel',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Lịch hẹn',
    path: '/book',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
]