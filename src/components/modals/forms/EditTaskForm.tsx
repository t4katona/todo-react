import { Formik, Form, Field } from "formik";
import { useModalToggle } from "../../../hooks/use-modal-toggle.hooks";
import { Button } from "../../button/Button";
import { useTaskState } from "../../../hooks/use-task-state.hooks";
interface FormValues {
  taskName: string;
  taskDescription: string;
}

export const EditTaskForm = ({ taskID }: { taskID: string }) => {
  const { closeModal } = useModalToggle();

  const updateTask = useTaskState((state) => state.updateTask);
  const tasks = useTaskState((state) => state.tasks);
  const task = tasks.find((task) => task.id === taskID);

  if (!task) {
    return null;
  }

  const initialValues: FormValues = {
    taskName: task.name,
    taskDescription: task.description,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        updateTask(taskID, values.taskName, values.taskDescription);
        actions.resetForm();
        closeModal();
      }}
    >
      <Form className="max-w-full">
        <div className="my-8">
          <div className="flex flex-col mb-4 ">
            <label htmlFor="taskName" className="mb-0.5">
              Task name
            </label>
            <Field
              type="text"
              name="taskName"
              id="taskName"
              className="p-2.5 border-mainWidth border-solid border-primary rounded"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="taskDescription" className="mb-0.5">
              Task description
            </label>
            <Field
              type="text"
              name="taskDescription"
              id="taskDescription"
              className="p-2.5 border-mainWidth border-solid border-primary rounded"
            />
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-x-2">
          <Button variant="text" onClick={closeModal}>
            Close
          </Button>
          <Button type="submit" variant="filled" icon="save">
            Save
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
