import UserActionType from './user.types';

export const setCurrentUser = user => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionType.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionType.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const SignInSuccess = user => ({
  type: UserActionType.SIGN_IN_SUCCESS,
  payload: user
})

export const SignInFailure = error => ({
  type: UserActionType.SIGN_IN_FAILURE,
  payload: error
})

export const checkUserSession = () => ({
  type: UserActionType.CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: UserActionType.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: UserActionType.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
  type: UserActionType.SIGN_OUT_FAILURE,
  payload: error
})

export const signUpStart = (userCredentials) => ({
  type: UserActionType.SIGN_UP_START,
  payload: userCredentials
})

export const signUpSuccess = ({user, data}) => ({
  type: UserActionType.SIGN_UP_SUCCESS,
  payload: {user, data}
})

export const signUpFailure = (error) => ({
  type: UserActionType.SIGN_UP_FAILURE,
  payload: error
})
