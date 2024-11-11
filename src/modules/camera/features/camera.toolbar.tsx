import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import useCameraList from "../hook/useCameraList";
import CameraForm from './camera.form';

import { useState } from 'react';
import { Modal } from '@mui/material';

const CameraToolbar = () => {
    const { refetch } = useCameraList();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    
    const handleClose = () => setOpen(false);

    return (
        <div className="mb-6 flex justify-end gap-2">
            <button 
                onClick={handleOpen}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md flex items-center transition-colors"
                title="افزودن دوربین جدید"
            >
                <FontAwesomeIcon icon={faPlus} className="text-lg" />
            </button>

            <Modal open={open} onClose={handleClose}>
                <div className="modal-content">
                    <CameraForm onClose={handleClose} />
                </div>
            </Modal>

            <button 
                onClick={() => refetch()} 
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md flex items-center transition-colors"
                title="بروزرسانی"
            >
                <FontAwesomeIcon icon={faRotate} className="text-lg" />
            </button>
        </div>
    );
};

export default CameraToolbar;
