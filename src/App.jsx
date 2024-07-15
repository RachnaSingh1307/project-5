import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

import ContactCard from "./Components/ContactCard";
import Modal from "./Components/Modal";
import AddAndUpdate from "./Components/AddAndUpdate";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="max-auto max-w-[370px] px-3 m-2">
        <Navbar />
        <div className="flex gap-4">
          <div className="relative flex items-center flex-grow">
            <FiSearch className=" ml-1 absolute text-white text-3xl" />
            <input
              type="text"
              className="border border-white rounded-md bg-transparent h-10 flex-grow text-white pl-9"
              placeholder="Search Contact"
            />

            <CiCirclePlus
              onClick={onOpen}
              className="text-white cursor-pointer text-4xl "
            />
          </div>
        </div>
        <div className="mt-4 flex-col gap-4">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
    </>
  );
};
export default App;
