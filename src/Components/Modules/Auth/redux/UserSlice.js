import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authService from "./AuthService";

const user = JSON.parse(localStorage.getItem("loginuser"));
const userinfo = JSON.parse(localStorage.getItem("userinfo"));
const initialState = {
  user: user ? user : null,
  userinfo: userinfo ? userinfo : null,
  isSuccess: false,
  isSignout: false,
  isUpdatedata: null,
  updated: false,
  isError: false,
  isLoading: false,
  message: "",
};
export const register = createAsyncThunk(
  "auth/register",
  async (Reqdata, thunkAPI) => {
    try {
      return await authService.register(Reqdata);
    } catch (error) {
      const message =
        error.response ||
        error.response.data ||
        error ||
        error.response.data.message ||
        error.message;
      return thunkAPI.rejectWithValue(message.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (Reqdata, thunkAPI) => {
    try {
      return await authService.login(Reqdata);
    } catch (error) {
      const message =
        error.response ||
        error.response.data ||
        error ||
        error.response.data.message;
      return thunkAPI.rejectWithValue(message.data);
    }
  }
);

export const Signout = createAsyncThunk("auth/Signout", async thunkAPI => {
  try {
    return await authService.Signout();
  } catch (error) {
    const message =
      error.response ||
      error.response.data ||
      error ||
      error.response.data.message;
    return thunkAPI.rejectWithValue(message.data);
  }
});

export const GetMe = createAsyncThunk("auth/Me", async (_, thunkAPI) => {
  try {
    const Token = thunkAPI.getState().Auth.user.token;
    return await authService.GetMe(Token);
  } catch (error) {
    const message =
      error.response ||
      error.response.data ||
      error ||
      error.response.data.message;
    return thunkAPI.rejectWithValue(message.data);
  }
});

export const UpdateUser = createAsyncThunk(
  "auth/Update",
  async (reqdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().Auth.user.token;
      const id = thunkAPI.getState().Auth.user._id;
      return await authService.UpdateUser(reqdata, id, token);
    } catch (error) {
      const message =
        error.response ||
        error.response.data ||
        error ||
        error.response.data.message;
      return thunkAPI.rejectWithValue(message.data);
    }
  }
);

export const DeleteUser = createAsyncThunk(
  "auth/Delete",
  async (_, thunkAPI) => {
    try {
      //const Token = JSON.parse(localStorage.getItem("loginuser"))?.token;
      const token = thunkAPI.getState().Auth.user.token;
      console.log("delete token ", token);
      const id = thunkAPI.getState().Auth.user._id;
      console.log("delete id is ", id);
      return await authService.DeleteUser(id, token);
    } catch (error) {
      const message =
        error.response ||
        error.response.data ||
        error ||
        error.response.data.message;
      return thunkAPI.rejectWithValue(message.data);
    }
  }
);

export const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,

  reducers: {
    //reset the state to initial state
    reset: state => {
      state.isSuccess = false;
      state.isSignout = false;
      state.isError = false;
      state.isUpdatedata = null;
      state.updated = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(GetMe.pending, state => {
        state.isLoading = true;
      })
      .addCase(GetMe.fulfilled, (state, action) => {
        state.userinfo = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(GetMe.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(UpdateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdatedata = action.payload;
        state.updated = true;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(UpdateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isUpdatedata = null;
        state.isError = true;
        state.updated = false;
        state.message = action.payload;
      })
      .addCase(DeleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(DeleteUser.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(DeleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(Signout.pending, state => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(Signout.fulfilled, state => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isSignout = true;
        state.user = null;
        state.userinfo = null;
        state.isError = false;
        state.message = "";
      })
      .addCase(Signout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignout = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});
export const { reset } = authSlice.actions;

export default authSlice.reducer;
