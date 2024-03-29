import { RootState } from "../../types/types";

// Define the return type of the selector function
export const selectCurrentUser = (state: RootState) => state.user.currentUser;