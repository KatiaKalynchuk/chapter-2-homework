import React from 'react';
import { createLazyFileRoute } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";

const Auth = React.lazy(() => import('auth/Auth'));

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  const router = useRouter();

  return <Auth onNavigate={router.navigate} />
}
