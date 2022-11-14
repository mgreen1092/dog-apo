import React from 'react'

function BreedList (props) {
    // console.log(props.dogBreedArray)
    return (
    <div>
        <button onClick={props.handleClick}>Dog Breeds</button>
        {props.dogBreedArray.length !== 0 && props.dogBreedArray.map(dog => {
            return (
                <div>
                    <ul>
                        <li>{dog}</li>
                    </ul>
                </div>
            )})}
    </div>
    )
}
export default BreedList


// {props.dogBreedArray.length && props.dogBreedArray.map(dog => {
//     return (
//         <div>
//             <ul>
//                 <li>{dog}</li>
//             </ul>
//         </div>
//     )})}