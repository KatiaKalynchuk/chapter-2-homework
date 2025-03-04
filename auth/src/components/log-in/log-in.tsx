import UserAuth from '@/components/user-auth/user-auth';
import { useHandleSubmit } from './log-in-controller';
import { NavLink } from "react-router-dom";

interface LogInProps {
    message?: string;
}

export const LogIn = ({ message }: LogInProps) => {
    const handleSubmit = useHandleSubmit();

    return (
        <div className="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none">
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <UserAuth
                      title="Log in"
                      description="Please provide your credentials:"
                      message={message}
                      buttonText="Log in"
                      onSubmit={handleSubmit}
                    />
                    <NavLink
                      to="/sign-up"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                        Sign up
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
