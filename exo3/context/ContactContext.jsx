import React, { createContext, useState, useContext } from 'react';

const ContactContext = createContext();

export const useContacts = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContacts must be used within a ContactProvider');
    }
    return context;
};

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([
        {
            id: '1',
            name: 'John Doe',
            phone: '+1 234 567 890',
            email: 'john.doe@example.com',
            picture: 'https://picsum.photos/200'
        },
        {
            id: '2',
            name: 'Jane Smith',
            phone: '+1 987 654 321',
            email: 'jane.smith@example.com',
            picture: 'https://picsum.photos/200'
        },
        {
            id: '3',
            name: 'Alice Johnson',
            phone: '+1 555 123 456',
            email: 'alice.johnson@example.com',
            picture: 'https://picsum.photos/200'
        },
        {
            id: '4',
            name: 'Bob Brown',
            phone: '+1 444 987 654',
            email: 'bob.brown@example.com',
            picture: 'https://picsum.photos/200'
        }
    ]);

    const addContact = (contact) => {
        const newContact = {
            id: Date.now().toString(),
            ...contact,
            picture: contact.picture || 'https://picsum.photos/200'
        };
        setContacts(prevContacts => [...prevContacts, newContact]);
    };

    const updateContact = (id, updatedContact) => {
        setContacts(prevContacts =>
            prevContacts.map(contact =>
                contact.id === id ? { ...contact, ...updatedContact } : contact
            )
        );
    };

    const deleteContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    };

    return (
        <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};

