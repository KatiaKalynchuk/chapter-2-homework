import UserAuth from '@/components/user-auth/user-auth';
import { useHandleSubmit } from './sign-up-controller.ts';
import { NavLink } from 'react-router-dom';

interface SignUpProps {
  message?: string;
}

export const SignUp = ({ message }: SignUpProps) => {
  const handleSubmit = useHandleSubmit();

  return (
    <div className="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <UserAuth
            title="Sign up"
            description="Please provide your credentials:"
            message={message}
            buttonText="Sign up"
            onSubmit={handleSubmit}
          />
          <NavLink
            to="/log-in"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};
