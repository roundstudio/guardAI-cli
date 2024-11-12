import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRotate } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Modal } from "@mui/material";

const Toolbar: React.FC<{
  onAdd?: React.FC<{ onClose: () => void }> | undefined;
  onRefresh: () => void;
  titleAdd: string;
}> = ({ onAdd, onRefresh, titleAdd }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="mb-6 flex justify-end gap-2">
      <button
        onClick={handleOpen}
        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md flex items-center transition-colors"
        title={titleAdd}
      >
        <FontAwesomeIcon icon={faPlus} className="text-lg" />
      </button>

      <Modal open={open} onClose={handleClose}>
        <div className="modal-content">
          {onAdd && React.createElement(onAdd, { onClose: handleClose })}
        </div>
      </Modal>

      <button
        onClick={onRefresh}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md flex items-center transition-colors"
        title="بروزرسانی"
      >
        <FontAwesomeIcon icon={faRotate} className="text-lg" />
      </button>
    </div>
  );
};

export default Toolbar;
