import { Formik, Form, Field } from "formik";
import { Button } from "../../button/Button";
import { useModalToggle } from "../../../hooks/use-modal-toggle.hooks";
import { Task } from "../../../interfaces/Task.interfaces";
import { generateTaskID } from "../../../helpers/task-id-generator.helper";
import { useTaskState } from "../../../hooks/use-task-state.hooks";

interface FormValues {
  taskName: string;
  taskDescription: string;
  taskCategory: string;
}

export const CreateTaskForm = () => {
  const { closeModal } = useModalToggle();
  const addTask = useTaskState((state) => state.addTask);

  const handleSubmit = (values: {
    taskName: string;
    taskDescription: string;
    taskCategory: string;
  }): void => {
    const task: Task = {
      id: generateTaskID(),
      name: values.taskName,
      description: values.taskDescription,
      category: values.taskCategory,
    };
    addTask(task);
    closeModal();
  };

  const initialValues: FormValues = {
    taskName: "",
    taskDescription: "",
    taskCategory: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();

        handleSubmit(values);
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
          <div className="flex flex-col gap-2 md:flex-row" role="group">
            <label className="flex items-center border-mainWidth border-solid border-primary p-2.5 rounded cursor-pointer md:w-full md:pt-4 md:pb-4">
              <Field
                type="radio"
                name="taskCategory"
                value="toDo"
                className="mr-2 cursor-pointer"
              />
              To-Do
            </label>

            <label className="flex items-center border-mainWidth border-solid border-primary p-2.5 rounded cursor-pointer md:w-full md:pt-4 md:pb-4">
              <Field
                type="radio"
                name="taskCategory"
                value="inProgress"
                className="mr-2 cursor-pointer"
              />
              In Progress
            </label>

            <label className="flex items-center border-mainWidth border-solid border-primary p-2.5 rounded cursor-pointer md:w-full md:pt-4 md:pb-4">
              <Field
                type="radio"
                name="taskCategory"
                value="completed"
                className="mr-2 cursor-pointer"
              />
              Completed
            </label>

            <label className="flex items-center border-mainWidth border-solid border-primary p-2.5 rounded cursor-pointer md:w-full md:pt-4 md:pb-4">
              <Field
                type="radio"
                name="taskCategory"
                value="onHold"
                className="mr-2 cursor-pointer"
              />
              On Hold
            </label>
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-x-2">
          <Button variant="text" onClick={closeModal}>
            Close
          </Button>
          <Button type="submit" variant="filled" icon="plus">
            Create task
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
