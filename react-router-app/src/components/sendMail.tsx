import React from 'react';

const person = { name: "John Doe",
                   email: "john@abc.com"
                };

 function SendMail(){
    return (
         <div className='page'>
            <h4>Send Mail Message</h4>
            <div className='pageContent'>Name: {person.name}</div>
            <div className='pageContent'>Mail: {person.email}</div>
         </div>
    );

}

export default SendMail;