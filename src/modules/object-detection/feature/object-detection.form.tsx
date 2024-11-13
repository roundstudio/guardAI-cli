import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Chip,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import { UserObjectRequest } from "../types/object-detection.type";
import { toast, ToastContainer } from "react-toastify";
import { useObjectDetectionCreate, useObjectDetectionUpdate } from "../hooks";
import { AVAILABLE_OBJECTS } from "../config";


const ObjectDetectionForm = ({
  initialData,
  onClose,
}: {
  initialData?: UserObjectRequest;
  onClose: () => void;
}) => {
  const { mutate: createObject, isSuccess: isCreateSuccess } = useObjectDetectionCreate();
  const { mutate: updateObject, isSuccess: isUpdateSuccess } = useObjectDetectionUpdate();
  
  const [formData, setFormData] = useState<UserObjectRequest>(
    initialData || {
      id: undefined,
      name: "",
      object_types: [],
      description: "",
    }
  );



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleObjectTypesChange = (event: SelectChangeEvent<number[]>) => {
    const selectedIds = event.target.value as number[];
    const selectedObjects = AVAILABLE_OBJECTS
      .filter(obj => selectedIds.includes(obj.id))
      .map(obj => ({ id: obj.id, name: obj.name }));
    
    setFormData(prev => ({
      ...prev,
      object_types: selectedObjects,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (initialData?.id) {

      updateObject(formData);
    } else {
      createObject(formData);
    }
  };

  useEffect(() => {
    if (isCreateSuccess || isUpdateSuccess) {
      toast.success("ثبت شیء با موفقیت انجام شد.");
      onClose();
    }
  }, [isCreateSuccess, isUpdateSuccess]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 2,
        mb: 5,
      }}
    >
      <ToastContainer autoClose={3000} />
      <Typography variant="h5" sx={{ mb: 3 }}>
        افزودن شیء
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="نام تشخیص شیء"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="توضیحات"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={1}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="object-types-label">نوع شیء</InputLabel>
        <Select
          labelId="object-types-label"
          id="object-types"
          multiple
          value={formData.object_types.map(obj => obj.id)}
          onChange={handleObjectTypesChange}
          input={<OutlinedInput label="نوع شیء" />}
          renderValue={(selected) =>
            selected.map(id => AVAILABLE_OBJECTS.find(obj => obj.id === id)?.label).join(', ')
          }
        >
          {AVAILABLE_OBJECTS.map((obj) => (
            <MenuItem key={obj.id} value={obj.id}>
              <Chip label={obj.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Button type="submit" variant="contained">
          ثبت شیء
        </Button>
        <Button
          variant="outlined"
          color="warning"
          onClick={onClose} 
          sx={{ mb: 1 }} 
        >
          لغو
        </Button>
      </Box>
    </Box>
  );
};

export default ObjectDetectionForm;
