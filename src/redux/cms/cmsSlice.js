import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchCms = createAsyncThunk("cms/fetchCms", async () => {
  const response = await axios.get(
    "https://api-car-rental.binaracademy.org/admin/v2/order",
    {
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
      params: {
        sort: "created_at:desc",
        page: 1,
        pageSize: 10,
      },
    }
  );

  return response.data.orders;
});

const cmsSlice = createSlice({
  name: "cms",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const cmsReducer = cmsSlice.reducer;
export default cmsReducer;
