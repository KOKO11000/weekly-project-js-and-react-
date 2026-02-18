import React from 'react'
import ComplaintsTable from '../components/ComplaintsTable.jsx'
import Header from '../components/Header.jsx'

export default function SubmitComplaintPage() {
  return (
    <div>
      <Header title="Home Page" link="/" />
      <ComplaintsTable textH1="הגשת תלונה" link="" />
    </div>
  )
}
