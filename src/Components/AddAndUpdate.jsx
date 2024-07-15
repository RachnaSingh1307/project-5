import Modal from "./Modal";

const AddAndUpdate = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}></Modal>
    </div>
  );
};
export default AddAndUpdate;
