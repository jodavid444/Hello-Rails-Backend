import React, { useEffect } from 'react';
import getText from '../redux/getText';
import { useDispatch, useSelector } from 'react-redux';



function Greeting (){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getText());
  }, []);
  const message = useSelector((state) => state.text);
  console.log(message)

  return <h1>{ message.data } User</h1>;
}

export default Greeting