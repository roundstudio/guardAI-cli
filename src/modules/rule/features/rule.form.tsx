import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Slider,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  Rule,
  STATUS_CHOICES,
  PRIORITY_CHOICES,
  RuleSubmitData,
} from "../types";
import { useRuleCreate, useRuleUpdate } from "../hooks";
import { toast, ToastContainer } from "react-toastify";
import { SelectChangeEvent } from "@mui/material";
import { useCameraList } from "../../camera/hooks";
import { useObjectDetectionList } from "../../object-detection/hooks";
import { useGpioList } from "../../gpio/hooks";
import { ObjectType } from "../../object-detection/types";

const RuleForm = ({
  initialData,
  onClose,
}: {
  initialData?: Rule;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<Rule>(
    initialData || {
      name: "",
      description: "",
      status: "active",
      priority: 2,
      confidence_threshold: 0.5,
      detection_interval: 1,
      notification_cooldown: 300,
      camera: [],
      object_types: [],
      gpio: [],
      start_time: "",
      end_time: "",
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

  const handleSelectChange =
    (name: string) => (e: SelectChangeEvent) => {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    };

  const handleSliderChange =
    (name: string) => (_: Event, newValue: number | number[]) => {
      setFormData((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    };

  const {
    mutate: createRule,
    isPending: isCreating,
    isSuccess: isCreateSuccess,
  } = useRuleCreate();
  const {
    mutate: updateRule,
    isPending: isUpdating,
    isSuccess: isUpdateSuccess,
  } = useRuleUpdate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const submissionData: RuleSubmitData = {
      ...formData,
      id: initialData?.id,
      camera: formData.camera.map(c => c.id!),
      object_types: formData.object_types.map(o => o.id!),
      gpio: formData.gpio.map(g => g.id!)
    };

    if (formData.status !== "scheduled") {
      delete submissionData.start_time;
      delete submissionData.end_time;
    }

    if (initialData?.id) {
      updateRule(submissionData);
    } else {
      createRule(submissionData);
    }
  };

  useEffect(() => {
    if (isCreateSuccess || isUpdateSuccess) {
      toast.success("عملیات با موفقیت انجام شد");
      onClose();
    }
  }, [isCreateSuccess, isUpdateSuccess]);

  const { data: cameras } = useCameraList();
  const { data: objectTypes } = useObjectDetectionList();
  const { data: gpios } = useGpioList();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 800,
        mx: "auto",
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <ToastContainer autoClose={3000} />
      <Typography variant="h5" sx={{ mb: 3 }}>
        {initialData ? "ویرایش قانون" : "افزودن قانون جدید"}
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="نام قانون"
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
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          required
        />
      </FormControl>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>وضعیت</InputLabel>
          <Select
            value={formData.status}
            name="status"
            onChange={handleSelectChange("status")}
            input={<OutlinedInput label="وضعیت" />}
          >
            {Object.entries(STATUS_CHOICES).map(([value, label]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>اولویت</InputLabel>
          <Select
            value={(formData.priority ?? 2).toString()}
            name="priority"
            onChange={handleSelectChange("priority")}
            input={<OutlinedInput label="اولویت" />}
          >
            {Object.entries(PRIORITY_CHOICES).map(([value, label]) => (
              <MenuItem key={value} value={Number(value)}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Typography gutterBottom>حد آستانه اطمینان</Typography>
      <Slider
        value={formData.confidence_threshold}
        onChange={handleSliderChange("confidence_threshold")}
        min={0}
        max={1}
        step={0.1}
        valueLabelDisplay="auto"
        sx={{ mb: 2 }}
      />

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl fullWidth>
          <TextField
            label="فاصله زانی تشخیص (ثانیه)"
            name="detection_interval"
            type="number"
            value={formData.detection_interval}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="زمان انتظار بین هشدارها (ثانیه)"
            name="notification_cooldown"
            type="number"
            value={formData.notification_cooldown}
            onChange={handleChange}
          />
        </FormControl>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>دوربین‌ها</InputLabel>
          <Select
            multiple
            value={formData.camera.map(c => c.id!)}
            name="camera"
            onChange={(e) => {
              const selectedIds = e.target.value as number[];
              const selectedCameras = cameras?.filter(c => selectedIds.includes(c.id!)) || [];
              setFormData(prev => ({ ...prev, camera: selectedCameras }));
            }}
            input={<OutlinedInput label="دوربین‌ها" />}
          >
            {cameras?.map((camera) => (
              <MenuItem key={camera.id} value={camera.id}>
                {camera.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>اشیاء قابل تشخیص</InputLabel>
          <Select
            multiple
            value={formData.object_types.map(o => o.id!)}
            name="object_types"
            onChange={(e) => {
              const selectedIds = e.target.value as number[];
              const selectedObjects = objectTypes?.filter(o => selectedIds.includes(o.id!) && o.id !== undefined) || [];
              setFormData(prev => ({ ...prev, object_types: selectedObjects as ObjectType[] }));
            }}
            input={<OutlinedInput label="اشیاء قابل تشخیص" />}
          >
            {objectTypes?.map((object) => (
              <MenuItem key={object.id} value={object.id}>
                {object.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>پورت‌های GPIO</InputLabel>
        <Select
          multiple
          value={formData.gpio.map(g => g.id!)}
          name="gpio"
          onChange={(e) => {
            const selectedIds = e.target.value as number[];
            const selectedGpios = gpios?.filter(g => selectedIds.includes(g.id!)) || [];
            setFormData(prev => ({ ...prev, gpio: selectedGpios }));
          }}
          input={<OutlinedInput label="پورت‌های GPIO" />}
        >
          {gpios?.map((gpio) => (
            <MenuItem key={gpio.id} value={gpio.id}>
              {gpio.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isCreating || isUpdating}
        >
          {isCreating || isUpdating
            ? "در حال ارسال..."
            : initialData
            ? "ویرایش قانون"
            : "ثبت قانون"}
        </Button>
        <Button variant="outlined" color="warning" fullWidth onClick={onClose}>
          لغو
        </Button>
      </Box>
    </Box>
  );
};

export default RuleForm;
