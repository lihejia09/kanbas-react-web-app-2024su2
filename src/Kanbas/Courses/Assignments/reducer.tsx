import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";


const initialState = {
  assignments: [],
  assignment: {
    title: "New Assignment",
    description: "Assignment description",
    course: "",
    points: 100,
    due: "",
    available: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload
    },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        ...assignment,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, action) => {
      state.assignment = action.payload;
    }
  },
});
export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
