import React from 'react'
import Image from 'next/image';
interface propstype {
    title: string;
}

const Heading: React.FC<propstype> = ({title}) => {
  return (
    <div className="text-center text-4x1 pb-8">
        <p className="borde-b-4 inline-block pb-2"> {title}</p>
    </div>
  )
}

export default Heading
