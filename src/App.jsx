import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./Components/ContactCard";
import AddAndUpdate from "./Components/AddAndUpdate";
import useDisclouse from "./hooks/useDisclouse";
import NotFound from "./Components/NotFound";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-auto max-w-[370px] px-3 m-2">
        <Navbar />
        <div className="flex gap-4">
          <div className="relative flex items-center flex-grow">
            <FiSearch className=" ml-1 absolute text-white text-3xl" />
            <input
              onChange={filterContacts}
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
          {contacts.length <= 0 ? (
            <NotFound />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};
export default App;
