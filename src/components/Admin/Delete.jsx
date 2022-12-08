import React from 'react'
import '../../styles/Admin/Delete.css'

function Delete({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false)
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default Delete
