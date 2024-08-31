import React, { useState } from 'react';

export default function ShareExercise() {
  
  const [subject, setSubject] = useState('');
  const [unit, setUnit] = useState('');
  const [year, setYear] = useState('');
  const [teacher, setTeacher] = useState('');
  const [school, setSchool] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = { "subject":subject, "unit":unit, "year":year, "teacher":teacher, "school":school, "description":description };
    console.log('Form Data:', formData);
    setSubject('');
    setUnit("");
    setYear("");
    setTeacher("");
    setSchool("");
    setDescription("")
  };

  return (
    <div className='flex justify-center min-h-screen mt-7 p-4'>
      <div className='text-white rounded-md w-full max-w-md p-6 flex flex-col'>
      <h1 className='text-xl font-bold pl-7 pt-7 text-center'>Upload a past paper</h1>
      <form onSubmit={handleSubmit} className='flex flex-col pt-7' >
        <div className='text-base mb-5 text-center'>
          {/* <label>Subject: </label> */}
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Subject'
            required
          />
        </div>

        <div className='text-base mb-5'>
          {/* <label>Unit:</label> */}
          <input
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder='Unit'
            required
          />
        </div>

        <div className='text-base mb-5'>
          {/* <label>Year:</label> */}
          <input
            type="text"
            value={year}
            placeholder='Year'
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <div className='text-base mb-5'>
          {/* <label>Teacher:</label> */}
          <input
            type="text"
            value={teacher}
            placeholder='Teacher'
            onChange={(e) => setTeacher(e.target.value)}
          />
        </div>

        <div className='text-base mb-5'>
          {/* <label>School:</label> */}
          <input
            type="text"
            value={school}
            placeholder='School'
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>

        <div className='text-base mb-5'>
          {/* <label>Description:</label> */}
          <textarea
            value={description}
            placeholder='Description...'
            onChange={(e) => setDescription(e.target.value)}
            rows="2"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}
