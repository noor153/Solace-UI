import { User } from "@/redux/slices/user.slice";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import parse from "date-fns/parse";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface EditUserModalProps {
  open: boolean;
  handleClose: () => void;
  user: User;
  onSubmit: (data: User) => void;
}

const validationSchema: yup.ObjectSchema<User> = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  fatherName: yup.string().required("Father name is required"),
  grandfatherName: yup.string().required("Grandfather name is required"),
  familyName: yup.string().required("Family name is required"),
  localizedName: yup.object().shape({
    firstName: yup.string().required("Localized first name is required"),
    fatherName: yup.string().required("Localized father name is required"),
    grandfatherName: yup
      .string()
      .required("Localized grandfather name is required"),
    familyName: yup.string().required("Localized family name is required"),
  }),
  nationalId: yup.object().shape({
    idNumber: yup.string().required("National ID number is required"),
    expiryDate: yup
      .date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse.parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
      })
      .typeError("please enter a valid date")
      .required()
      .min("1969-11-13", "Date is too early"),
  }),
  maritalStatus: yup.object().shape({
    id: yup.number().required("Marital status is required"),
  }),
  dependants: yup
    .number()
    .required("Dependants are required")
    .min(0, "Dependants cannot be negative"),
}) as yup.ObjectSchema<User>;

const EditUserModal: React.FC<EditUserModalProps> = ({
  open,
  handleClose,
  user,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: user,
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit: SubmitHandler<User> = (data) => {
    onSubmit(data);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-user-dialog-title"
      fullWidth
    >
      <DialogTitle id="edit-user-dialog-title">Edit User</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                fullWidth
                margin="normal"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            )}
          />
          <Controller
            name="fatherName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Father Name"
                fullWidth
                margin="normal"
                error={!!errors.fatherName}
                helperText={errors.fatherName?.message}
              />
            )}
          />
          <Controller
            name="grandfatherName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Grandfather Name"
                fullWidth
                margin="normal"
                error={!!errors.grandfatherName}
                helperText={errors.grandfatherName?.message}
              />
            )}
          />
          <Controller
            name="familyName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Family Name"
                fullWidth
                margin="normal"
                error={!!errors.familyName}
                helperText={errors.familyName?.message}
              />
            )}
          />
          <Typography variant="subtitle1">Localized Name</Typography>
          <Controller
            name="localizedName.firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Localized First Name"
                fullWidth
                margin="normal"
                error={!!errors.localizedName?.firstName}
                helperText={errors.localizedName?.firstName?.message}
              />
            )}
          />
          <Controller
            name="localizedName.fatherName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Localized Father Name"
                fullWidth
                margin="normal"
                error={!!errors.localizedName?.fatherName}
                helperText={errors.localizedName?.fatherName?.message}
              />
            )}
          />
          <Controller
            name="localizedName.grandfatherName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Localized Grandfather Name"
                fullWidth
                margin="normal"
                error={!!errors.localizedName?.grandfatherName}
                helperText={errors.localizedName?.grandfatherName?.message}
              />
            )}
          />
          <Controller
            name="localizedName.familyName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Localized Family Name"
                fullWidth
                margin="normal"
                error={!!errors.localizedName?.familyName}
                helperText={errors.localizedName?.familyName?.message}
              />
            )}
          />
          <Typography variant="subtitle1">National ID</Typography>
          <Controller
            name="nationalId.idNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="ID Number"
                fullWidth
                margin="normal"
                error={!!errors.nationalId?.idNumber}
                helperText={errors.nationalId?.idNumber?.message}
              />
            )}
          />
          <Controller
            name="nationalId.expiryDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                value={new Date(field.value).toISOString().split("T")[0]}
                type="date"
                label="Expiry Date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                margin="normal"
                error={!!errors.nationalId?.expiryDate}
                helperText={errors.nationalId?.expiryDate?.message}
              />
            )}
          />
          <Controller
            name="maritalStatus.id"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Marital Status"
                fullWidth
                margin="normal"
                error={!!errors.maritalStatus?.id}
                helperText={errors.maritalStatus?.id?.message}
              >
                {[
                  { id: 1, name: "Single" },
                  { id: 2, name: "Married" },
                  { id: 27, name: "Divorced" },
                ].map((status) => (
                  <MenuItem key={status.id} value={status.id}>
                    {status.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Controller
            name="dependants"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                label="Dependants"
                fullWidth
                margin="normal"
                error={!!errors.dependants}
                helperText={errors.dependants?.message}
              />
            )}
          />
          <div className="justify-end flex">
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
              <Button onClick={handleClose} color="secondary" sx={{ ml: 2 }}>
                Cancel
              </Button>
            </Box>
          </div>
        </form>
      </DialogContent>
      <Divider />
    </Dialog>
  );
};

export default EditUserModal;
