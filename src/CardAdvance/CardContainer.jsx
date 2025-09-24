import React from 'react'
import Card from './Card'

const CardContainer = () => {
   const info = [
     {
       cardColor: "danger",
       imgAdd: "1.avif",
       days: "4 Days",
       post: "One",
       text: "Hello ahoenwjkeh jsjd sdfkjs dfkshuhsdmnfioajsdf sajh",
       foot: [
         {
           num: 7,
           footText: "Read",
         },
         {
           num: 3224,
           footText: "View",
         },
         {
           num: 21,
           footText: "Comments",
         },
       ],
     },
     {
       cardColor: "warning",
       imgAdd: "2.avif",
       days: "1 week",
       post: "Two",
       text: "Hello ahoenwjkeh jsjd sdfkjs dfkshuhsdmnfioajsdf sajh",
       foot: [
         {
           num: 11,
           footText: "Read",
         },
         {
           num: 1699,
           footText: "View",
         },
         {
           num: 27,
           footText: "Comments",
         },
       ],
     },
   ];
  return (
    <div className='container'>
        <div className="row">
          {info.map((elm,ind)=><Card key={ind} elm={elm}/>)}
        </div>
    </div>
  )
}

export default CardContainer