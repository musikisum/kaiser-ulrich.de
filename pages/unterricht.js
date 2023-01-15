import axios from 'axios'
import { parseString } from 'xml2js'

function Unterricht() {
  return <div>Hallo Unterricht disabled!</div>
  
}

// function Unterricht({ courses }) {  
//   const seminar = courses[0]
//   return (
//     <main>
//       <div className='siteContainer'>
//         <div style={{ 'width': '80%', 'margin': '50px auto' }}>
//           <h1>Tutorials</h1>
//           { 
//             seminar.Course.map((course, index) => {              
//               return <div key={index}>
//                   <h3>{course.Title}</h3>
//                   <p>{course.Description}</p>
//                 </div>
//             })
//           }
//         </div>
//       </div>
//     </main>
//   )
// }

// export async function getStaticProps() {
//   let jsonData
//   let res = await axios.get('http://localhost:3000/data/2018-ws.xml')
//   parseString(res.data, function (err, result) {
//     jsonData = result
//   });

//   return {
//     props: {
//       courses: jsonData.CourseSerializerContainer.Courses
//     }
//   }
// }

export default Unterricht