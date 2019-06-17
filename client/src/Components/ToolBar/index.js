import React from 'react'
import { FaBell } from 'react-icons/fa'
import './ToolBar.css'

const ToolBar = () => (
  <div className="text-left bkp-toolbar">
    <button type="button" className="btn btn-link">Filter</button>
    <button type="button" className="btn btn-link">Sort</button>
    <button type="button" className="btn btn-link float-right">
      <FaBell />
      &nbsp;
      <span>Price alerts</span>
    </button>
  </div>
)

export default ToolBar;
