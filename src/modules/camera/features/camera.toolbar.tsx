import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import useCameraList from "../hook/useCameraList";

const CameraToolbar = () => {
    const {refetch} = useCameraList();
    
    return(
        <div className="mb-6 flex justify-end gap-2">
            <button 
                onClick={() => {/* اینجا مدال افزودن دوربین باز شود */}} 
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md flex items-center transition-colors"
                title="افزودن دوربین جدید"
            >
                <FontAwesomeIcon icon={faPlus} className="text-lg" />
            </button>

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
