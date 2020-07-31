import {
  useFirestore,
  useUser,
  useFirestoreCollectionData,
  useAnalytics,
} from "reactfire";
import moment from "moment-timezone";

interface FirebaseDateType {
  seconds: number;
  nanoseconds: number;
  toDate: () => Date;
}

export interface HabitType {
  create_date: FirebaseDateType;
  update_date: FirebaseDateType;
  timezone: string;
  last_streak_date: FirebaseDateType;
  has_completed: boolean;
  id: string;
  visibility: "public" | "private";
  current_version: any;
  user_id: string;
  streak: 0;
  current_details: {
    name: string;
    description: string;
  };
}

export interface HabitCreationType {
  visibility: "public" | "private";
  create_date: Date;
  update_date: Date;
  has_completed: boolean;
  last_streak_date: Date;
  timezone: string;
  user_id: string;
  streak: 0;
  current_details: {
    name: string;
    description: string;
  };
}

export interface HabitVersionType {
  create_date: FirebaseDateType;
  update_date: FirebaseDateType;
  description: string;
  name: string;
}

export interface HabitVersionCreationType {
  create_date: Date;
  update_date: Date;
  description: string;
  name: string;
}

interface UserType {
  uid: string;
}

export const useHabitCreate = (onFinished?: () => void) => {
  const firestore = useFirestore();
  const user = useUser<UserType>();
  const analystics = useAnalytics();

  interface HabitCreationInput {
    name: string;
    description: string;
  }

  return async (input: HabitCreationInput) => {
    const initialHabit: HabitCreationType = {
      visibility: "public",
      create_date: new Date(),
      update_date: new Date(),
      has_completed: false,
      timezone: moment.tz.guess(),
      last_streak_date: new Date(),
      streak: 0,
      current_details: input,
      user_id: user.uid,
    };
    const initialDoc = await firestore.collection("habits").add(initialHabit);

    const initialHabitVersion: HabitVersionCreationType = {
      create_date: new Date(),
      update_date: new Date(),
      ...input,
    };
    const initialHVDoc = await initialDoc
      .collection("versions")
      .add(initialHabitVersion);

    await initialDoc.update({ current_version: initialHVDoc });
    analystics.logEvent("create_habit");
    onFinished && onFinished();
  };
};

export const useUserHabits = () => {
  const firestore = useFirestore();
  const user = useUser<UserType>();

  const data = firestore.collection("habits").where("user_id", "==", user.uid);
  return useFirestoreCollectionData<HabitType>(data, { idField: "id" });
};

export const useToggleHabitCompletion = () => {
  const firestore = useFirestore();
  const analytics = useAnalytics();

  return (habit: HabitType) => {
    var originalDate = moment(habit.last_streak_date.toDate()).tz(
      habit.timezone
    );
    var addDate = moment(habit.last_streak_date.toDate())
      .tz(habit.timezone)
      .add({ days: 1 });
    if (originalDate.isSame(moment(), "day")) {
      if (habit.has_completed) {
        var newDate = moment();
        firestore
          .collection("habits")
          .doc(habit.id)
          .update({
            streak: habit.streak - 1,
            update_date: new Date(),
            last_streak_date: newDate.toDate(),
            has_completed: false,
          });
        analytics.logEvent("decrement_streak", {
          streak: habit.streak - 1,
          lastStreakDate: habit.last_streak_date,
        });
      } else {
        firestore
          .collection("habits")
          .doc(habit.id)
          .update({
            streak: habit.streak + 1,
            update_date: new Date(),
            last_streak_date: new Date(),
            has_completed: true,
          });
        analytics.logEvent("save_streak", {
          streak: habit.streak + 1,
          lastStreakDate: habit.last_streak_date,
        });
      }
    } else if (addDate.isSame(moment(), "day")) {
      firestore
        .collection("habits")
        .doc(habit.id)
        .update({
          streak: habit.streak + 1,
          update_date: new Date(),
          last_streak_date: new Date(),
          has_completed: true,
        });
      analytics.logEvent("increase_streak", {
        streak: habit.streak + 1,
        lastStreakDate: habit.last_streak_date,
      });
    } else {
      firestore.collection("habits").doc(habit.id).update({
        streak: 1,
        update_date: new Date(),
        last_streak_date: new Date(),
        has_completed: true,
      });
      analytics.logEvent("reset_streak", {
        lastStreakDate: habit.last_streak_date,
      });
    }
  };
};
