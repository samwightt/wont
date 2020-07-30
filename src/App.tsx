import React, { Suspense } from "react";
import { firebaseConfig } from "config/firebase";
import {
  FirebaseAppProvider,
  useFirestore,
  useFirestoreDocData,
  AuthCheck,
  useUser,
} from "reactfire";

interface HabitType {
  visibility: string;
  current_version: firebase.firestore.DocumentReference;
}

interface VersionType {
  create_date: {
    seconds: number;
    nanoseconds: number;
  };
  description: string;
  name: string;
}

const Example = () => {
  const habitRef = useFirestore()
    .collection("habits")
    .doc("X0PGnSRtValC3iMPA9n4");
  const user = useUser();

  const habit: HabitType = useFirestoreDocData(habitRef);
  const version: VersionType = useFirestoreDocData(habit.current_version);
  console.log(user);
  return (
    <div>
      <h1>{version.name}</h1>
    </div>
  );
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <div className="App">
        <h1>This works!</h1>
        <Suspense fallback={<h1>Loading</h1>}>
          <Example />
        </Suspense>
      </div>
    </FirebaseAppProvider>
  );
}

export default App;
