import React, { useState } from 'react'
import '../../styles/Admin/AddPersonnel.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

function AddPersonnel({ setOpenModal }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="modalBackground">
      <div className="modalContainer-per">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false)
            }}
          >
            X
          </button>
        </div>
        <form className="form-per">
          <div className="tit-per">THÔNG TIN NHÂN VIÊN</div>
          <div className="sum-per">
            <div className="img-per"></div>
            <div className="fo-per">
              <div className="row-per">
                <div className="row-name-per">Họ và tên: </div>
                <div className="row-input-per">
                  <input
                    className="input-per"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập họ tên"
                  />
                </div>
              </div>
              <div className="row-per">
                <div className="row-name-per">Giới tính: </div>
                <div className="row-input-per">
                  <input
                    className="input-per"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập giới tính"
                  />
                </div>
              </div>
              <div className="row-per">
                <div className="row-name-per">Số điện thoại: </div>
                <div className="row-input-per">
                  <input
                    className="input-per"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập số điện thoại"
                  />
                </div>
              </div>
              <div className="row-per">
                <div className="row-name-per">Email: </div>
                <div className="row-input-per">
                  <input
                    className="input-per"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập email"
                  />
                </div>
              </div>
              <div className="row-per">
                <div className="row-name-per">Địa chỉ: </div>
                <div className="row-input-per">
                  <input
                    className="input-per"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập địa chỉ"
                  />
                </div>
              </div>
              <div className="row-per">
                <div className="row-name-per">Chức vụ: </div>
                <div className="row-input-per">
                  <input
                    className="input-per"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập chức vụ"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btt-sub-per" type="submit">
            Tạo mới
          </button>
          <button className="btt-can-per" type="cancel">
            Huỷ bỏ
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPersonnel
