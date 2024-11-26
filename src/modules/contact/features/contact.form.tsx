import { useState, useEffect } from "react";
import {
    Button,
    TextField,
    Box,
    Typography,
    FormControl,
} from "@mui/material";
import { ContactFormData } from "../types";
import { useContactCreate } from "../hooks/useContactCreate";
import { useContactUpdate } from "../hooks/useContactUpdate";
import { toast, ToastContainer } from "react-toastify";

const ContactForm = ({
    initialData,
    onClose,
}: {
    initialData?: ContactFormData;
    onClose: () => void;
}) => {
    const [formData, setFormData] = useState<ContactFormData>(
        initialData || {
            name: "",
            email: "",
            phone: "",
            message: "",
            created_at: new Date().toISOString(),
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
        mutate: createContact,
        isPending: isCreating,
        isSuccess: isCreateSuccess,
    } = useContactCreate();
    const {
        mutate: updateContact,
        isPending: isUpdating,
        isSuccess: isUpdateSuccess,
    } = useContactUpdate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (initialData?.id) {
            updateContact(formData);
        } else {
            createContact(formData);
        }
    };

    useEffect(() => {
        if (isCreateSuccess || isUpdateSuccess) {
            toast.success("پیام شما با موفقیت ثبت شد.");
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
                فرم تماس با ما
            </Typography>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                    size="small"
                    label="نام و نام خانوادگی"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                    size="small"
                    label="ایمیل"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                    size="small"
                    label="شماره تماس"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
                <TextField
                    size="small"
                    label="پیام"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                />
            </FormControl>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {isCreating || isUpdating ? (
                    <Typography>در حال ارسال...</Typography>
                ) : (
                    <>
                        <Button type="submit" variant="contained">
                            {initialData ? "ویرایش پیام" : "ارسال پیام"}
                        </Button>
                        <Button
                            variant="outlined"
                            color="warning"
                            onClick={onClose}
                        >
                            لغو
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default ContactForm;