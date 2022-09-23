import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CartService from "./CartService";

const initialState = {
  items: null,
  PreviousOrders: [],
  Totalquantity: 0,
  isPrevious: false,
  message: "",
  isLoadings: false,
};

export const Products = createAsyncThunk(
  "auth/MyProducts",
  async (_, thunkAPI) => {
    try {
      return await CartService.Products();
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

export const Cartdata = createAsyncThunk(
  "auth/Cart",
  async (reqdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().Auth.user.token;
      console.log("this is user token", token);
      return await CartService.Cartdata(reqdata, token);
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

export const Cartdataget = createAsyncThunk(
  "auth/CartGet",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().Auth.user.token;
      console.log("this is user token", token);
      return await CartService.Cartdataget(token);
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

export const counterSlice = createSlice({
  name: "Myitems",
  initialState: initialState,
  reducers: {
    reset: state => {
      state.PreviousOrders = null;
      state.isPrevious = false;
    },
    removeIndividualCart: (state, action) => {
      return {
        ...state,
        //state.totalquantity = (totalquantity=7)-5
        Totalquantity:
          state.Totalquantity -
          state.items.find(e => e.id === action.payload)?.quantity,
        items: state.items.filter(currentElement => {
          return currentElement.id !== action.payload;
        }),
      };
    },
    SendtocartPage: (state, action) => {
      state.items.filter(currentElement => {
        if (
          currentElement.id === action.payload &&
          currentElement.quantity < 1
        ) {
          currentElement.quantity += 1;
        }
        return currentElement.id === action.payload;
      });
    },
    addquantity: (state, action) => {
      let updateQuantity = state.items.map(currentElement => {
        if (currentElement.id === action.payload) {
          return {
            ...currentElement,

            quantity: currentElement.quantity + 1,
          };
        }

        return currentElement;
      });

      return { ...state, items: updateQuantity };
    },
    subtractquanity: (state, action) => {
      const updatenewQuantity = state.items.map(currentElement => {
        if (currentElement.id === action.payload) {
          //index :1 index:1 Match
          if (currentElement.quantity > 1) {
            //1>0
            return {
              ...currentElement,
              quantity: currentElement.quantity - 1,
            };
          }
        }

        return currentElement;
      });
      return { ...state, items: updatenewQuantity };
    },
    ClearCart: state => {
      return {
        ...state,
        Totalquantity: 0,
        items: state.items.map(currentElement => {
          return {
            ...currentElement,
            quantity: currentElement.quantity * 0,
          };
        }),
      };
    },
    UpdateTotalQuantity: state => {
      let { Totalquantity } = state.items.reduce(
        (accum, currentvalue) => {
          let { quantity } = currentvalue;
          accum.Totalquantity += quantity;
          return accum;
        },
        {
          Totalquantity: 0,
        }
      );
      return { ...state, Totalquantity };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(Products.pending, state => {
        state.isLoadings = true;
      })
      .addCase(Products.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoadings = false;
      })
      .addCase(Products.rejected, async (state, action) => {
        state.message = action.payload;
      })
      .addCase(Cartdata.pending, state => {
        state.isLoadings = true;
      })
      .addCase(Cartdata.fulfilled, (state, action) => {
        state.isLoadings = false;
      })
      .addCase(Cartdata.rejected, async (state, action) => {
        state.message = action.payload;
      })
      .addCase(Cartdataget.pending, state => {
        state.isLoadings = true;
        state.PreviousOrders = null;
      })
      .addCase(Cartdataget.fulfilled, (state, action) => {
        state.isLoadings = false;
        state.isPrevious = true;
        state.PreviousOrders = action.payload;
      })
      .addCase(Cartdataget.rejected, async (state, action) => {
        state.message = action.payload;
        state.PreviousOrders = null;
        state.isPrevious = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  removeIndividualCart,
  ClearCart,
  subtractquanity,
  UpdateTotalQuantity,
  addquantity,
  reset,
  SendtocartPage,
} = counterSlice.actions;

export default counterSlice.reducer;
