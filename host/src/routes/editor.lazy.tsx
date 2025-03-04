import { Header } from "@/components/header/header";
import { useAuth } from "@/services/auth/context";
import {
  createLazyFileRoute,
  useRouter,
  Navigate,
} from "@tanstack/react-router";
import React from 'react';

const TaskEditor = React.lazy(() => import('taskEditor/TaskEditor'));

export const Route = createLazyFileRoute("/editor")({
  component: Editor,
});

function Editor() {
  const { session } = useAuth();
  const router = useRouter();

  if (session === undefined) {
    return "Loading ...";
  }

  return session ? (
    <>
      <Header />
      <TaskEditor onNavigate={router.navigate} />
    </>
  ) : (
    <Navigate to="/login" />
  );
}
