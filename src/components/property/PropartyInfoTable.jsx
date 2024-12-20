import React from 'react'

function PropartyInfoTable() {
  return (
    <div className="info-table">
      <ul>
        <li>
          <img src="assets/images/info-icon-01.png" alt="" style={{ maxWidth: "52px" }} />
          <h4>250 m2<br /><span>Total Flat Space</span></h4>
        </li>
        <li>
          <img src="assets/images/info-icon-02.png" alt="" style={{ maxWidth: "52px" }} />
          <h4>Contract<br /><span>Contract Ready</span></h4>
        </li>
        <li>
          <img src="assets/images/info-icon-03.png" alt="" style={{ maxWidth: "52px" }} />
          <h4>Payment<br /><span>Payment Process</span></h4>
        </li>
        <li>
          <img src="assets/images/info-icon-04.png" alt="" style={{ maxWidth: "52px" }} />
          <h4>Safety<br /><span>24/7 Under Control</span></h4>
        </li>
      </ul>
    </div>
  )
}

export default PropartyInfoTable
