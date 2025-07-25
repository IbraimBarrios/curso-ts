// Utility Tipes

interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTask(id: string, task: Partial<Task>) {
  //
  console.log("");
}

const newTask = { name: "Kevin" };

updateTask("1", newTask);

// Required <T>

interface ToDo {
  id?: number;
  name?: string;
}

const myTodo: Required<ToDo> = {};

// Records<Keys, Types> Para la creación de objetos
// {key: value}

interface CatInfo {
  age: number;
  name: string;
}

type CatName = "moi" | "baris" | "luffy";

const cats: Record<CatName, CatInfo> = {
  baris: { age: 2, name: "" },
  luffy: { age: 2, name: "" },
  moi: { age: 2, name: "" },
};

// Pick <T, Properties>

interface ToDo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<ToDo2, "title" | "completed">;

const otherTodo: TodoPreview = { title: "Clear room", completed: false };

// Omit<T, Properties>
type TodoOmited = Omit<ToDo2, "description">;
const todoOmited: TodoOmited = { title: "Clear room", completed: false };
