import { theme } from "@chakra-ui/core";

interface HabitTileColors {
  [key: string]: {
    background: string;
    streakAmount: string;
    streakUnit: string;
    progress: string;
    xpAmount: string;
    xpUnit: string;
    name: string;
  };
}

const habitTileColors: HabitTileColors = {
  default: {
    background: "#F2EFE9",
    progress: "#523249",
    streakAmount: "#252627",
    streakUnit: "#252627",
    name: "#523249",
    xpAmount: "#252627",
    xpUnit: "#252627",
  },
  dark: {
    background: "#252627",
    progress: "#A49FB3",
    streakAmount: "#FEFDFF",
    streakUnit: "#FEFDFF",
    name: "#F2EFE9",
    xpAmount: "#FEFDFF",
    xpUnit: "#FEFDFF",
  },
  peach: {
    background: "#F1BB87",
    progress: "#7F4610",
    streakAmount: "#5B320B",
    streakUnit: "#5B320B",
    name: "#5B320B",
    xpAmount: "#5B320B",
    xpUnit: "#5B320B",
  },
  blue: {
    background: "#5465FF",
    progress: "#C2C9FF",
    streakAmount: "#FEFDFF",
    streakUnit: "#FEFDFF",
    name: "#C2C9FF",
    xpAmount: "#FEFDFF",
    xpUnit: "#FEFDFF",
  },
  green: {
    background: "#20BF55",
    progress: "#96EDB3",
    streakAmount: "#FEFDFF",
    streakUnit: "#FEFDFF",
    name: "#96EDB3",
    xpAmount: "#FEFDFF",
    xpUnit: "#FEFDFF",
  },
  red: {
    background: "#BF3100",
    progress: "#FFB399",
    streakAmount: "#FEFDFF",
    streakUnit: "#FEFDFF",
    name: "#FFB399",
    xpAmount: "#FEFDFF",
    xpUnit: "#FEFDFF",
  },
};

export default {
  ...theme,
  colors: {
    ...theme.colors,
    habitTile: habitTileColors,
  },
};
