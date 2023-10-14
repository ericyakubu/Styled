import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./index";

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
