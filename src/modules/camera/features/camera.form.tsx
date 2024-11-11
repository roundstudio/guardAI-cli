import { useState } from 'react';
import { Button, TextField, Box, Typography, FormControl, FormControlLabel, Checkbox } from '@mui/material';
import { Camera } from '../types';


const CameraForm = ({ initialData, onClose }: { initialData?: Camera; onClose: () => void }) => {
  const [formData, setFormData] = useState<Camera>(initialData || {
    name: '',
    ip: '',
    port: 0,
    username: '',
    password: '',
    is_active: true,
    path: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    onClose(); // بستن مدال پس از ارسال فرم
  };

  return (
    <Box 
        component="form"  
        onSubmit={handleSubmit} 
        sx={{ 
            maxWidth: 500, 
            mx: 'auto', 
            p: 3, 
            bgcolor: 'background.paper', // پس‌زمینه
            borderRadius: 2, // گرد کردن گوشه‌ها
            boxShadow: 3, // سایه برای عمق بیشتر
            display: 'flex', // استفاده از flex
            flexDirection: 'column', // چیدمان عمودی
            justifyContent: 'center', // مرکز کردن محتوا
            mt: 5, // فاصله از بالا
            mb: 5  // فاصله از پایین
        }}
    >
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

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
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
              onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
            />
          }
          label="فعال بودن"
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

      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>

        <Button 
            type="submit" 
            variant="contained" 
            
        >
            {initialData ? 'ویرایش دوربین' : 'ثبت دوربین'}
        </Button>
        <Button 
            variant="outlined" 
            color='warning'

            onClick={onClose} // بستن مدال
            sx={{ mb: 1 }} // فاصله پایین دکمه لغو
        >
            لغو
        </Button>
      </Box>
    </Box>
  );
};

export default CameraForm;
