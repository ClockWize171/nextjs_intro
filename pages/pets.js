import React from 'react'

const Pets = () => {
    return (
        <div>
            {
                ['1', '2', '3', '4', '5'].map(path => (
                    <div key={path} >
                        <img src={`/${path}.jpeg`} alt="pets" width={600} height={430} />
                    </div>
                ))
            }
        </div>
    )
}

export default Pets