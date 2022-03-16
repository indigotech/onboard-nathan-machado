import { useMutation } from '@apollo/client';
import { AUTH_TOKEN_KEY } from 'app/constants';
import { LoginMutation } from 'app/services';

interface LoginInput {
  email: string;
  password: string;
}

interface LoginMutationResponse {
  login: {
    token: string;
  };
}

interface UseLoginParams {
  onSuccess?: (login: LoginMutationResponse) => void;
  onError?: (error: Error) => void;
}

interface UseLoginResponse {
  login: (input: LoginInput) => void;
  loading: boolean;
}

export function useLogin({ onSuccess, onError }: UseLoginParams): UseLoginResponse {
  const [loginMutation, { loading }] = useMutation(LoginMutation);

  const login = (input: LoginInput) => {
    loginMutation({
      variables: { email: input.email, password: input.password },
      onCompleted: (response: LoginMutationResponse) => {
        localStorage.setItem(AUTH_TOKEN_KEY, response.login.token);
        onSuccess?.(response);
      },
      onError,
    });
  };

  return { login, loading };
}
