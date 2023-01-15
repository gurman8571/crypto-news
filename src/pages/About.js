import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

export default function About() {
const [loading, setloading] = useState(true)
  
  const loader=()=>{
    setTimeout(() => {
     setloading(false);
    }, 400);
 }

 useEffect(() => {
      loader();
 }, [])

 if (loading) {
  return <Loader/>   
 }

  return (
    <> <body className="min-h-screen bg-gray-700 text-white p-3">

    <h1 className="text-yellow-200 text-4xl font-bold flex justify-center items-center m-2">About Us</h1>
    <br />
   
   <p className="flex font-light text-md m-4 justify-center ">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perferendis quos ea nulla quasi, quae vitae dolor iusto fuga voluptates distinctio odio reiciendis! Dolorum, libero illum obcaecati voluptatum provident similique optio eum illo nesciunt impedit, esse pariatur quis ducimus sapiente commodi ratione repudiandae, nisi quidem itaque unde excepturi eius! Quod, quae repellendus nulla ducimus tempora accusantium provident autem unde maiores velit mollitia ipsum distinctio nemo quisquam omnis tempore incidunt expedita voluptatum id commodi illum ea necessitatibus nobis. Nisi sequi veniam voluptates et odio magni, deserunt dolorum corrupti alias optio eum sint corporis. Eligendi tenetur corrupti ipsum nam expedita quo aliquam sint officia? Dolor, impedit dicta adipisci nesciunt a voluptatibus expedita. Illum ea quod sit eos corporis, saepe, fugiat temporibus magnam ex explicabo voluptas deserunt consequuntur. Eveniet delectus nobis minima obcaecati quibusdam placeat! Omnis odit et at, possimus assumenda molestias iusto beatae doloremque quo sapiente architecto, consectetur impedit nulla, reprehenderit provident alias expedita pariatur maiores? Quod cum consequatur, expedita, quasi natus ad, inventore incidunt debitis magnam nulla vitae error a quidem doloremque magni! Laboriosam maiores obcaecati ipsum quae. Quisquam alias magnam voluptates quis assumenda provident rem harum? Eum officia facilis eligendi, laborum corrupti tempore! Fugiat illo nam voluptatibus ad, architecto molestias.    

   </p>
         </body></>
  )
}

