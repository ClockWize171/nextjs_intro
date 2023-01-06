import React from 'react'
import Image from 'next/image'
import Img from '../public/3.jpeg'

const Pets = () => {
    return (
        <div>
        <Image src={Img} placeholder='blur' alt='pet' width={600} height={430}/>
            {
                ['1', '2', '3', '4', '5'].map(path => (
                    <div key={path} >
                        <Image src={`/${path}.jpeg`} alt="pets" width={600} height={430} />
                    </div>
                ))
            }
        </div>
    )
}

export default Pets