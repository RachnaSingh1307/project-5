import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

const ContactCard = ({ contact }) => {
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
        <IoMdTrash />
      </div>
    </div>
  );
};
export default ContactCard;
