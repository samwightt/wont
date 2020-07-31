import React, { Suspense } from "react";
import root from "./root";
import { AuthCheck } from "reactfire";
import LoginForm from "components/forms/Login";
import ApplicationLayout from "components/layouts/ApplicationLayout";

const routes = [...root];

routes.forEach((item) => {
  const Component = item.component;
  item.component = () => {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <AuthCheck fallback={<LoginForm />}>
          <ApplicationLayout>
            <Component />
          </ApplicationLayout>
        </AuthCheck>
      </Suspense>
    );
  };
});

export default routes;
