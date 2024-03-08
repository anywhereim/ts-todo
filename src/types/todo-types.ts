export interface Todo {
  id?: string;
  deadline: string;
  title: string;
  content: string;
  state: boolean;
}

export interface WorkingTodos extends Todo {
  state: false;
}

export interface DoneTodos extends Todo {
  state: true;
}
