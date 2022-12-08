import React from 'react'
import '../../styles/Admin/AddService.css'

function AddService({ setOpenModal }) {
  return (
    <div className="modalBackground">
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
        <form className="form-ser">
          <div className="tit-ser">THÔNG TIN DỊCH VỤ</div>
          <div className="sum-ser">
            <div className="img-ser"></div>
            <div className="fo-ser">
              <div className="row-ser-1">
                <div className="row-name-ser">Tên dịch vụ: </div>
                <div className="row-input-ser">
                  <input
                    className="input-ser"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập tên dịch vụ"
                  />
                </div>
              </div>
              <div className="row-ser-2">
                <div className="row-name-ser">Giá tiền: </div>
                <div className="row-input-ser">
                  <input
                    className="input-ser"
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Vui lòng nhập giá tiền"
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
        </form>
      </div>
    </div>
  )
}

export default AddService
