export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

export type InitialState = {
  user: User | null;
};

export type Action = "SET_USER";

export type ActionsType = {
  type: Action;
  payload: User | [] | null;
};
