import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    createUser: (state, action) => {
      const newUser = {
        id: Date.now(), // Simple unique ID generation
        name: action.payload,
      };
      state.push(newUser);
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload);
    },
    editUser: (state, action) => {
      const { id, name } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
      }
    },
  },
});

export const { createUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
