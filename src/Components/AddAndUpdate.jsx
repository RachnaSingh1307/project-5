import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdate = ({ isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            number: "",
          }}
          onSubmit={(values) => {
            addContact(values);
          }}
        >
          <Form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">Name</label>
              <Field
                type="text"
                id="Name"
                name="Name"
                className="border h-10"
                placeholder="Enter Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email</label>
              <Field
                type="Email"
                id="Email"
                name="Email"
                placeholder="xyz@gmail.com"
                className="border h-10"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Number">Number</label>
              <Field
                type="text"
                id="Number"
                name="Number"
                placeholder="2342165761"
                className="border h-10"
              />
            </div>
            <button className="bg-black text-white border rounded-md px-3 py-1.5 self-center">
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
export default AddAndUpdate;
