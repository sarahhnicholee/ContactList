import { useState, useEffect } from 'react'
import ContactRow from './ContactRow';


const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
    const [contact, setContact]= useState(null)

    useEffect (()=>{
        async function fetchContact(){
    try{
        console.log(selectedContactId)
        // your fetch logic will go here
        const response= await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
    } catch (error){
        console.error(error);
    }
}
fetchContact();
    },[]);

    // console.log("Contact: ", contact)

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
            
            {contact && <ContactRow contact={contact} setSelectedContactId={setSelectedContactId}/>}
        </tbody>
    </table>
    )
}

export default SelectedContact;