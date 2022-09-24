import React from 'react'

const DoctorDetails = ({result}) => {
    const { first_name, last_name, specialty, years_experience, university } =result

    // console.log(result)

  return (
    <>
    <div>
        <h3>{first_name} {last_name}</h3>

    </div>
    </>
  )
}

export default DoctorDetails