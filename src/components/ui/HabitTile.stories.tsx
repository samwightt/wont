import React from "react";
import HabitTile from "./HabitTile";

export default { title: "Habit Tile" };

export const defaultTheme = () => (
  <HabitTile
    name="Example"
    progressAmount={50}
    streakAmount={5}
    streakUnit="days"
    xpAmount={400}
    theme="default"
  />
);

export const darkTheme = () => (
  <HabitTile
    name="Example"
    progressAmount={50}
    streakAmount={5}
    streakUnit="days"
    xpAmount={400}
    theme="dark"
  />
);

export const peachTheme = () => (
  <HabitTile
    name="Example"
    progressAmount={50}
    streakAmount={5}
    streakUnit="days"
    xpAmount={400}
    theme="peach"
  />
);

export const blueTheme = () => (
  <HabitTile
    name="Example"
    progressAmount={50}
    streakAmount={5}
    streakUnit="days"
    xpAmount={400}
    theme="blue"
  />
);

export const greenTheme = () => (
  <HabitTile
    name="Example"
    progressAmount={50}
    streakAmount={5}
    streakUnit="days"
    xpAmount={400}
    theme="green"
  />
);

export const redTheme = () => (
  <HabitTile
    name="Example"
    progressAmount={50}
    streakAmount={5}
    streakUnit="days"
    xpAmount={400}
    theme="red"
  />
);
