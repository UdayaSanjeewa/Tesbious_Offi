import React from 'react'

interface ProjectDetails {
  topic: string;
  paragraph: string;
}

const ProjectDetails = ({topic, paragraph} : ProjectDetails) => {
  return (
    <div className='my-[5%] ml-[5%] mr-[20%]'>
      <h1 className='text-[32px] sm:text-[35px] font-semibold mb-5 mt-[15%]'>{topic}</h1>
      <p className='text-[16px] sm:text-[22px] font-normal text-left'>{paragraph}</p>
    </div>
  )
}

export default ProjectDetails
