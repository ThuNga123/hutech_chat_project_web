import React from 'react'
import '../../styles/Admin/Delete.css'

function Delete({ setDeleModal }) {
  return (
    <div className="modalBackground-del">
      <div className="modalContainer-del">
        <div className="titleCloseBtn-del">
          <button
            onClick={() => {
              setDeleModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className="body">Bạn có chắc chắn muốn xoá không?</div>
        <div className="footer">
          <button
            onClick={() => {
              setDeleModal(false)
            }}
            id="cancelBtn-del"
          >
            Huỷ
          </button>
          <button>Xoá</button>
        </div>
      </div>
    </div>
  )
}

export default Delete
