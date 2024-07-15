import { deleteDoc } from "firebase/firestore/lite";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { doc } from "firebase/firestore";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div
      key={contact.id}
      className="flex items-center justify-between rounded-lg bg-white p-4 mt-4"
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-orange text-6xl mt-1 " />
        <div className="">
          <h2 className="font-medium">{contact.Name}</h2>
          <p className="text-sm">{contact.Email}</p>
          <p className="text-sm">{contact.Number}</p>
        </div>
      </div>
      <div className="flex text-2xl">
        <RiEditCircleLine className="text-orange" />
        <IoMdTrash onClick={() => deleteContact(contact.id)} />
      </div>
    </div>
  );
};
export default ContactCard;
