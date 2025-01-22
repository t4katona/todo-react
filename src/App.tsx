import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Button } from "./components/button/Button";
import { TaskBoard } from "./components/tasks/task-board/TaskBoard";
import { Modal } from "./components/modals/Modal";
import { useModalManager } from "./hooks/useModalManager.hooks";
function App() {
  const { openModal, currentModal } = useModalManager();
  return (
    <>
      <Navbar />
      <main className="w-full">
        <header className="flex justify-between items-center mb-8">
          <h2 className="font-medium text-xl">All tasks</h2>
          <Button
            variant="filled"
            icon="plus"
            onClick={() => {
              openModal("create-task-modal");
              console.log(currentModal);
            }}
          >
            Create task
          </Button>
        </header>
        <TaskBoard />
      </main>
      <Modal />
    </>
  );
}

export default App;
