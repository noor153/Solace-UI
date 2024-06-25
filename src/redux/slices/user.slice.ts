import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface LocalizedNameDTO {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
}

interface NationalIdDTO {
  idNumber: string;
  expiryDate: Date;
}

interface CountryDTO {
  id: number;
  name: string;
}

interface NationalityDTO {
  country: CountryDTO;
  countryId: number;
}

interface MaritalStatusDTO {
  id: number;
  name: string;
}

export interface User {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  localizedName: LocalizedNameDTO;
  nationalId: NationalIdDTO;
  nationalities: NationalityDTO[];
  maritalStatus: MaritalStatusDTO;
  dependants: number;
}

export const enum SliceStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

interface UserState {
  data: User | null;
  sliceStatus: SliceStatus;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  sliceStatus: SliceStatus.IDLE,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId: number) => {
    const response = await axios.get(`http://localhost:3333/user/${userId}`);
    return response.data;
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ userId, userData }: { userId: number; userData: User }) => {
    const response = await axios.post(
      `http://localhost:3333/user/${userId}`,
      userData
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.data = null;
      state.sliceStatus = SliceStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.sliceStatus = SliceStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.sliceStatus = SliceStatus.SUCCEEDED;
        console.log("action.payload", action.payload);
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.sliceStatus = SliceStatus.FAILED;
        state.error = action.error.message ?? "Failed to fetch user";
      })
      .addCase(editUser.pending, (state) => {
        state.sliceStatus = SliceStatus.LOADING;
        state.error = null;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.sliceStatus = SliceStatus.SUCCEEDED;
        console.log("action.payload", action.payload);
        state.data = action.payload;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.sliceStatus = SliceStatus.FAILED;
        state.error = action.error.message ?? "Failed to Update user";
      });
  },
});

export const { clearUser } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user;
export const selectUserData = (state: { user: UserState }) => state.user.data;
export const selectUserStatus = (state: { user: UserState }) =>
  state.user.sliceStatus;

export default userSlice.reducer;
