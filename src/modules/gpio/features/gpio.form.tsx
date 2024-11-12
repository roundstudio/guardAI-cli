import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
} from "@mui/material";
import { Gpio } from "../types";
import { useGpioCreate, useGpioUpdate } from "../hooks";
import { toast, ToastContainer } from "react-toastify";

const GpioForm = ({
  initialData,
  onClose,
}: {
  initialData?: Gpio;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<Gpio>(
    initialData || {
      name: "",
      pin: 0,
      duration: 0,
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

  const { mutate: createGpio, isPending: isCreating, isSuccess: isCreateSuccess } = useGpioCreate();
  const { mutate: updateGpio, isPending: isUpdating, isSuccess: isUpdateSuccess } = useGpioUpdate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData?.id) {
      updateGpio(formData);
    } else {
      createGpio(formData);
    }
  };

  useEffect(() => {
    if (isCreateSuccess || isUpdateSuccess) {
      toast.success("ثبت GPIO با موفقیت انجام شد.");
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
        افزودن GPIO جدید
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="نام GPIO"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="پین"
          name="pin"
          type="number"
          value={formData.pin}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="مدت (ثانیه)"
          name="duration"
          type="number"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </FormControl>

      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        {isCreating || isUpdating ? (
          <Typography>در حال ارسال...</Typography>
        ) : (
          <>
            <Button type="submit" variant="contained">
              {initialData ? "ویرایش GPIO" : "ثبت GPIO"}
            </Button>
            <Button
              variant="outlined"
              color="warning"
              onClick={onClose} 
              sx={{ mb: 1 }} 
            >
              لغو
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default GpioForm;
