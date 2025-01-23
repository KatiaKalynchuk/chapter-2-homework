import { signUp } from "@/services/auth";
import { AuthData } from "@/services/auth/types";
import { NavigationContext } from "@/services/navigation/context";
import { useContext } from "react";

export const useHandleSubmit = () => {
  const onNavigateContext = useContext(NavigationContext);

  const handleSubmit = async (data: AuthData) => {
    try {
      await signUp(data);
      if (onNavigateContext?.navigate) {
        onNavigateContext?.navigate({ to: "/editor" });
      }
    } catch (error) {
      console.error("Error user sign up: ", error);
      // TODO: use code with correct router
      // navigate({
      //     to: '/log-in',
      //     search: { message: 'Could not authenticate user' },
      // });

      if (onNavigateContext?.navigate) {
        onNavigateContext?.navigate({
          to: "/sign-up?message=Could not register user",
        });
      }
    }
  };

  return handleSubmit;
};
