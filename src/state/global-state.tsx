import { create } from "zustand";

interface globalStateTypes {
  isIntroCompleted: boolean;
  setIsIntroCompleted: (value: boolean) => void;
  checkFullScreen: boolean;
  setCheckFullScreen: (value: boolean) => void;
}

const globalState = create<globalStateTypes>((set) => ({
  isIntroCompleted: false,
  setIsIntroCompleted: (value: boolean) =>
    set(() => ({
      isIntroCompleted: value,
    })),
  checkFullScreen: false,
  setCheckFullScreen: (value: boolean) =>
    set(() => ({
      checkFullScreen: value,
    })),
}));

export default globalState;
