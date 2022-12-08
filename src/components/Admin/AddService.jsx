import React from 'react'
import '../../styles/Admin/AddService.css'

function AddService({ setOpenModal }) {
  return (
    <div className="modalBackground-">
      <div className="modalContainer-ser">
        <div className="titleCloseBtn-ser">
          <button
            onClick={() => {
              setOpenModal(false)
            }}
          >
            X
          </button>
        </div>
        {/* <form className="form-ser">
          <div className="tit-ser">THÔNG TIN NHÂN VIÊN</div>
          <div className="sum-ser">
            <div className="img-ser"></div>
            <div className="fo-ser">
              <div className="row-ser">
                <div className="row-name-ser">Họ và tên: </div>
                <div className="row-input-ser">
                  <input
                    className="input-ser"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập họ tên"
                  />
                </div>
              </div>
              <div className="row-ser">
                <div className="row-name-ser">Giới tính: </div>
                <div className="row-input-ser">
                  <input
                    className="input-ser"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập giới tính"
                  />
                </div>
              </div>
              <div className="row-ser">
                <div className="row-name-ser">Số điện thoại: </div>
                <div className="row-input-ser">
                  <input
                    className="input-ser"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập số điện thoại"
                  />
                </div>
              </div>
              <div className="row-ser">
                <div className="row-name-ser">Email: </div>
                <div className="row-input-ser">
                  <input
                    className="input-ser"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập email"
                  />
                </div>
              </div>
              <div className="row-ser">
                <div className="row-name-ser">Địa chỉ: </div>
                <div className="row-input-ser">
                  <input
                    className="input-ser"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập địa chỉ"
                  />
                </div>
              </div>
              <div className="row-ser">
                <div className="row-name-ser">Chức vụ: </div>
                <div className="row-input-ser">
                  <input
                    className="input-ser"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập chức vụ"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btt-sub-ser" type="submit">
            Tạo mới
          </button>
          <button className="btt-can-ser" type="cancel">
            Huỷ bỏ
          </button>
        </form> */}
      </div>
    </div>
  )
}

export default AddService
