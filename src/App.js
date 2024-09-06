import { Button, Input, Option, Radio, Select } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'

const App = () => {
  const {handleChange,handleSubmit,values,setFieldValue}= useFormik({
    initialValues:{
      username:'',
      email:'',
      gender:'',
      hobbies:[],
      country:'',
      image:'',
      imageReview:''
    },
    onSubmit :(val)=>{
      console.log(val);
    }
  })
  return (
    <div>

    <form onSubmit={handleSubmit} className='space-y-6 max-w-[400px]'>
      <h1>Fill up your detail</h1>
      <div>
        <Input
        name='username'
        onChange={handleChange}
        value={values.username}
        label='Username'
        />
      </div>
      <div>
      <Input
        name='email'
        onChange={handleChange}
        value={values.email}
        label='email'
        />
      </div>
<div>
  {radCheck.map((rad,i)=>{
    return <Radio
    key={i}
    name='gender'
    label={rad.label}
    value={rad.value}
    color={rad.color}
    onChange={handleChange}
    
    />
  })}
</div>
<div>
  <Select name='country' onChange={(e)=> setFieldValue('country',e)} label='chose your country'>
<Option value='india'>india</Option>
<Option value='nepal'>nepal</Option>
  </Select>
</div>
<div>
  <Input
  onChange={(e)=>{
    const file = e.target.files[0];
    setFieldValue('imageReview', URL.createObjectURL(file));
    setFieldValue('image',file
    )
  }}
  name='image'
  type='file'
  
  
  
  
  />
  {values.imageReview && <img src={values.imageReview} alt='pho'/>}
  {/* {values.imageReview && <img src={values.imageReview} alt="" />} */}
</div>
<Button type='submit'>Submit</Button>
    </form>
      
    </div>
  )
}

export default App



const radCheck =[
  {
    value:'male',
    label:'male',
    color:'red'
  },
  {
    value:'female',
    label:'female',
    color:'red'
  }
]






































// import { Button, Checkbox, Input, Option, Radio, Select } from '@material-tailwind/react';
// import { useFormik } from 'formik';
// import React, { useEffect, useState } from 'react'

// const App = () => {

// const{handleChange,handleSubmit,values,setFieldValue} = useFormik({
//   initialValues:{
//     username:'',
//     password:'',
//     gender:'',
//     hobbies:[],
//     country:'',
//     image:'',
//     imageReview:''

//   },
//   onSubmit:(val)=>{
// console.log(val);
//   }
// })

//   const [count, setCount]=useState(0);
//   const[name,setName]= useState(false)
//   useEffect(()=>{
// if(count === 3){
//   setName(true)
// }
//   },[count])
//   return (
//     <div>
//       <h1>{count}</h1>
//       {name? <p>Hello </p>:null }
//       <button onClick={()=>setCount(count+1)}>increment</button>

// <form onSubmit={handleSubmit} className='space-y-6 max-w-[400px]'>
// <h1>Fill up your details</h1>

// <div>
// <Input
// name='username'
// label='username'
// onChange={handleChange}
// value={values.username}
// />
// </div>
// <div>
// <Input
// name='email'
// label='email'
// onChange={handleChange}
// value={values.email}
// />
// </div>
// <div>
//   <h1>Chose your gender</h1>
//   {gen.map((gend,i)=>{
//     return <Radio
//     key={i}
//     onChange={handleChange}
//     name="gender"
//     label={gend.label}
//     color={gend.color}
//     value={gend.value}

    
//     />
//   })}
// </div>
// <div>
//   <h1>chose your hobbie</h1>
//   {check.map((che,i)=>{
//   return <Checkbox
//   key={i}
//   onChange={handleChange}
//   name='hobbies'
//   label={che.label}
//   color={che.color}
//   value={che.value}
  
//   />
//   })}
// </div>
// <div>
//   <Select name='counrty' onChange={(e)=>setFieldValue('country',e)}>
//     <Option value='Nepal'>Nepal</Option>
//     <Option value='India'>India</Option>
//     <Option value='China'>China</Option>

//   </Select>
// </div>

// <div className='space-y-2'>
//             <h1>Select An Image</h1>
// <Input
// label='image file'
// onChange={(e)=>{
//   const file = e.target.files[0];
//   setFieldValue('imageReview', URL.createObjectURL(file));
//   setFieldValue('imag',file);
// }}
// name='image'
// type='file'

// />
// </div>

//             {/* <Input
//               label="Image File"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 setFieldValue('imageReview', URL.createObjectURL(file))
//                 setFieldValue('product_image', file);
//               }}
//               type='file'
//               name='image'
//               multiple
//               accept='image/*'
//             />
           
//             {values.imageReview && <img src={values.imageReview} alt="" />}
//           </div> */}
// <Button type='submit'>Submit</Button>

// </form>




//     </div>
//   )
// }

// export default App


// const gen=[
//   {
//     label:'Male',
//     color:'red',
//     value:'male'
//   },
//   {
//     label:'Female',
//     color:'red',
//     value:'female'
//   }
// ]

// const check=[
//   {
// label:'dance',
// color:'black',
// value:'dance'
//   },
//   {
//     label:'sing',
//     color:'green',
//     value:'sing'
//       },
//       {
//         label:'game',
//         color:'yellow',
//         value:'game'
//           },
// ]