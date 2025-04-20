import React, { useEffect } from "react";
import Contacts from "../../components/contacts/Contacts";

const ContactsPage = ({ contacts }) => {
  return (
    <React.Fragment>
      <Contacts contacts={contacts} />
    </React.Fragment>
  );
};

export default ContactsPage;
