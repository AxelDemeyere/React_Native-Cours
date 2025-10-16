import React, { useState } from 'react';
import ContactListPage from './components/ContactList/ContactListPage/ContactListPage';
import ContactPage from './components/Contact/ContactPage/ContactPage';


export default function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const handleBackToList = () => {
    setSelectedContact(null);
  };

  if (selectedContact) {
    return <ContactPage contact={selectedContact} onBack={handleBackToList} />;
  }

  return <ContactListPage onContactSelect={handleContactSelect} />;
}
