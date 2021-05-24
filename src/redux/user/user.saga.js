import {all, call, put, takeLatest} from "redux-saga/effects";
import UserActionType from "./user.types";
import {auth, createUserProfileDocument, getCurrentUser, googleAuthProvider} from "../../firebase/firebase.utils";
import {
  SignInFailure,
  SignInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess
} from "./user.actions";


export function* onGoogleSignInStart() {
  yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleAuthProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(SignInFailure(error.message))
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionType.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* signInWithEmailAndPassword({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(SignInFailure(error.message))
  }
}

export function* getSnapshotFromUserAuth(userAuth, data) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, data)
    const userSnapshot = yield userRef.get()
    
    yield put(SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(SignInFailure(error.message))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuth)
}

export function* isUserAuth() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
    
  } catch (error) {
    yield put(SignInFailure(error))
  }
}

function* signOutUser() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionType.SIGN_OUT_START, signOutUser)
}

export function* signUpUser({payload: {email, password, displayName}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, data: {displayName: displayName}}))
  } catch (error) {
    yield put(signUpFailure(error.message))
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionType.SIGN_UP_START, signUpUser)
}

export function* signInAfterSignUp({payload: {user, data}}) {
  yield getSnapshotFromUserAuth(user, data)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionType.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
  yield all([
      call(onGoogleSignInStart),
      call(onEmailSignInStart),
      call(onCheckUserSession),
      call(onSignOutStart),
      call(onSignUpStart),
      call(onSignUpSuccess)
    ]
  )
}
