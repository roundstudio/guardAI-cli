import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Telegram } from "../types";
import { useTelegramCreate, useTelegramUpdate } from "../hooks";
import { toast, ToastContainer } from "react-toastify";

const TelegramForm = ({
  initialData,
  onClose,
}: {
  initialData?: Telegram;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<Telegram>(
    initialData || {
      id: 0,
      name: "",
      token: "",
      chat_id: "",
      status: true,
      created_at: "",
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      status: e.target.checked,
    }));
  };

  const { mutate: createTelegram, isPending: isCreating } = useTelegramCreate();
  const { mutate: updateTelegram, isPending: isUpdating } = useTelegramUpdate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData?.id) {
      updateTelegram(formData, {
        onSuccess: () => {
          toast.success("ثبت ربات تلگرام با موفقیت انجام شد.");
          onClose();
        }
      });
    } else {
      createTelegram(formData, {
        onSuccess: () => {
          toast.success("ثبت ربات تلگرام با موفقیت انجام شد.");
          onClose();
        }
      });
    }
  };

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
        {initialData ? "ویرایش ربات تلگرام" : "افزودن ربات تلگرام جدید"}
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="نام ربات"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="توکن ربات"
          name="token"
          value={formData.token}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="شناسه چت"
          name="chat_id"
          value={formData.chat_id}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.status}
              onChange={handleCheckboxChange}
              name="status"
            />
          }
          label="فعال"
        />
      </FormControl>

      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        {isCreating || isUpdating ? (
          <Typography>در حال ارسال...</Typography>
        ) : (
          <>
            <Button type="submit" variant="contained">
              {initialData ? "ویرایش ربات" : "ثبت ربات"}
            </Button>
            <Button
              variant="outlined"
              color="warning"
              onClick={onClose}
              sx={{ mt: 1 }}
            >
              لغو
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default TelegramForm;
