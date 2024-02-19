interface Action<T = any> {
  type: string;
  payload?: T;
}

export const createAction = <T = any>(type: string, payload?: T): Action<T> => ({ type, payload });
