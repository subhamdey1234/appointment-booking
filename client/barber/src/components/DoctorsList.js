import React from 'react';

const DoctorsList = ({ doctors }) => {
  return (
    <div>
      <h2>Select a Doctor</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor}>{doctor}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
