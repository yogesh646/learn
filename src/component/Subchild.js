import React from 'react'

const Subchild = (props) => {
    let {data}=props;
    let {age}=data;
    console.log(props);
  return (
    <div>Subchild
        <br/>
        {age}
    </div>
  )
}

export default Subchild