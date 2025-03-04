import { createFileRoute, useSearch } from '@tanstack/react-router';
import { SignUp } from '@/components/sign-up/sign-up.tsx';

interface SearchParams {
  message?: string;
}

export const Route = createFileRoute('/log-in' as never)({
  component: SignUpPage,
});

function SignUpPage() {
  const { message } = useSearch({ from: '/sign-up' }) as SearchParams;

  return <SignUp message={message} />;
}
