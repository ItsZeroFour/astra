import React, { useEffect } from "react";
import Contacts from "../../components/contacts/Contacts";

const ContactsPage = ({ contacts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
      <Contacts contacts={contacts} />
    </React.Fragment>
  );
};

export default ContactsPage;
