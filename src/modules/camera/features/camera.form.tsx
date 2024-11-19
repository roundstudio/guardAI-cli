import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Camera } from "../types";
import { useCameraCreate, useCameraUpdate } from "../hooks";
import { toast, ToastContainer } from "react-toastify";

const CameraForm = ({
  initialData,
  onClose,
}: {
  initialData?: Camera;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<Camera>(
    initialData || {
      name: "",
      ip: "",
      port: 0,
      username: "",
      password: "",
      is_active: true,
      path: "",
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

  const {
    mutate: createCamera,
    isPending: isCreating,
    isSuccess: isCreateSuccess,
  } = useCameraCreate();
  const {
    mutate: updateCamera,
    isPending: isUpdating,
    isSuccess: isUpdateSuccess,
  } = useCameraUpdate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData?.id) {
      updateCamera(formData);
    } else {
      createCamera(formData);
    }
  };

  useEffect(() => {
    if (isCreateSuccess || isUpdateSuccess) {
      toast.success("ثبت دوربین با موفقیت انجام شد.");
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
      <Typography variant="h6" sx={{ mb: 3 }}>
        افزودن دوربین جدید
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="نام دوربین"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="ای پی دوربین"
          name="ip"
          value={formData.ip}
          onChange={handleChange}
          required
          helperText="لطفاً یک آدرس IP معتبر وارد کنید."
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="پورت"
          name="port"
          value={formData.port}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="نام کاربری"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="گذرواژه"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="is_active"
              checked={formData.is_active}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  is_active: e.target.checked,
                }))
              }
            />
          }
          label="فعال بودن"
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="مسیر"
          name="path"
          value={formData.path}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <TextField
          size="small"
          label="توضیحات"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={2}
        />
      </FormControl>

      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        {isCreating || isUpdating ? (
          <Typography>در حال ارسال...</Typography>
        ) : (
          <>
            <Button type="submit" variant="contained">
              {initialData ? "ویرایش دوربین" : "ثبت دوربین"}
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

export default CameraForm;
