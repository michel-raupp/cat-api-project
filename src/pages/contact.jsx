import { StyledInput } from '../components/input';
import { Button, Flex, StyledLogin } from '../styles/styles';
import logo from "../assets/icons/cat-icon.svg"
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAW3_bOG83ZfzN_foK62aFQg0Ohynv4Cr8",
    authDomain: "cat-api-e723d.firebaseapp.com",
    projectId: "cat-api-e723d",
});

const Contact = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [contacts, setContacts] = useState([]);

    const db = getFirestore(firebaseApp);
    const contactCollectionRef = collection(db, "contact")

    useEffect(() => {
        const getContacts = async () => {
            const data = await getDocs(contactCollectionRef);

            console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log("")
            console.log("---------------------------------")
        }
        getContacts()
    }, [])

    async function sendForm() {
        try {
            const form = await addDoc(contactCollectionRef, {
                name,
                message,
            });

            // Wait for the promise to resolve before updating state
            await form;

            // Now, update the state with the new data
            const data = await getDocs(contactCollectionRef);
            setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Error sending form:", error);
        }
    }



    async function deleteMessage(id) {
        const contactDoc = doc(db, "contact", id);
        await deleteDoc(contactDoc);

        // Atualize o estado `contacts` após a exclusão
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    }



    return (
        <StyledLogin>
            <div className='bg'>
                <img src={logo} alt="cat-logo" />
                <h2>Contact Form</h2>
                <p>Leave us a message!</p>
                <Flex iscollum="yes">


                    <StyledInput
                        type="text"
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <StyledInput
                        type="text"
                        placeholder='Your Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <Button islogin="yes" onClick={sendForm}>Send Message</Button>

                    <ul className='messages'>
                        <h3>Messages:</h3>
                        {contacts.map((contact) => {
                            return (
                                
                                <div key={contact.id}>

                                    <li>Name: {contact.name}</li>
                                    <li>Message: {contact.message}</li>

                                    <Button isdelete="yes" onClick={() => deleteMessage(contact.id)}>Delete Message</Button>
                                </div>
                            );
                        })}
                    </ul>

                </Flex>
            </div>
        </StyledLogin>
    );
}

export default Contact;
