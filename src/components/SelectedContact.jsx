import { useState } from 'react'
import { useEffect } from 'react'


const SelectedContact = () => {
    const [contact, setContact]= useState(null)

    useEffect (()=>{
        async function fetchContact(){
    try{
        // your fetch logic will go here
        const response= await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContact(result);
    } catch (error){
        console.error(error);
    }
}
fetchContact();
    },[]);

    console.log("Contact: ", contact)

    return(
        <table>
        <thead>
            <tr>
                <th colSpan="3"> Seected Contact</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
                {/* {contacts.map((contact) => {
                    return <ContactRow key={contact.id} contact={contact} />;
                  })} */}
        </tbody>
    </table>
    )
}

export default SelectedContact;