import './Form.css';
import { useState } from 'react';

const Form=(props)=>{
    const [getList, setList] = useState({
        mobile:'',
        price:0,
        discount:0
     });
  
     const onChangeHandler = (event) => {
        setList({...getList,[event.target.name]:event.target.value})
     }

     const onSubmitHandler=()=>{
        props.onGethandler(getList);
     }
  
    return(<div className='form'>
        <h1>Form Input</h1>
        Enter Mobile Name:<input type="text" name='mobile' onChange={onChangeHandler} id="mobile" />
         <br></br>
         Enter Price Details:<input type="text" name='price' onChange={onChangeHandler} id="price" />
         <br></br>
         Enter Discount Details:<input type="text" name='discount' onChange={onChangeHandler} id="discount" />
         <br></br>
         <button onClick={onSubmitHandler}>Submit</button>
    </div>)
}

export default Form;