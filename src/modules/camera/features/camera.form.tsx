import { useState } from 'react';
import { Button, TextField, Box, Typography, FormControl } from '@mui/material';
import { Camera } from '../types';


const CameraForm = () => {
  const [formData, setFormData] = useState<Camera>({
    name: '',
    ip: '',
    port: 0,
    username: '',
    password: '',
    is_active: true,
    path: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌توانید اطلاعات فرم را به سرور ارسال کنید
    console.log('فرم ارسال شد:', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        افزودن دوربین جدید
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="نام دوربین"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="ای پی دوربین"
          name="ip"
          value={formData.ip}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="پورت"
          name="port"
          value={formData.port}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="نام کاربری"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <TextField
          label="توضیحات"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
        />
      </FormControl>

      <Button type="submit" variant="contained" fullWidth>
        ثبت دوربین
      </Button>
    </Box>
  );
};

export default CameraForm;
