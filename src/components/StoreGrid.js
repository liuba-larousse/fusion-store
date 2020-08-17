/** @format */

// /** @format */
// import React from 'react';
// import Card from './Card';
// import data from '../data';

// export default function StoreGrid() {
//   return (
//     <div className='grid-container'>
//       {data.map((item, index) => (
//         <Card
//           id={index}
//           category={item.category}
//           color={item.color}
//           img={item.img}
//           name={item.name}
//           price={item.price}
//         />
//       ))}
//     </div>
//   );
// }

// var db = firebase.database();
// var ref = db.ref('items');
// React.useEffect(() => {
//   ref.on('value', (snap) => {
//     console.log('items :', snap.val());
//   });
// }, []);
