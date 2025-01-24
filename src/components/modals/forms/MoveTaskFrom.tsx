import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useModalToggle } from "../../../context/ModalContext";
import { Button } from "../../button/Button";
import { useTaskContext } from "../../../context/TaskContext";
import { taskCategories } from "../../../constants/task-categories.constants";
import { Task } from "../../../interfaces/Task.interfaces";

interface FormValues {
  currentCategory: string;
  newCategory: string;
}

// get excluded categories
const getExcludedCategories = (task: Task): string[] => {
  const excludedCategories: string[] = taskCategories.filter(
    (category) => category !== task.category
  );

  return excludedCategories;
};

export const MoveTaskForm = ({ taskID }: { taskID: string }) => {
  const { closeModal } = useModalToggle();

  //update task from task context
  const { findTask, updateCategory } = useTaskContext();
  const task = findTask(taskID);

  const excludedCategories = getExcludedCategories(task);

  const initialValues: FormValues = {
    currentCategory: task.category,
    newCategory: excludedCategories[0],
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: FormValues, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
        updateCategory(task, values.newCategory);
        closeModal();
      }}
    >
      {({ values }) => (
        <Form className="max-w-full">
          <div className="my-8">
            <div className="flex flex-col mb-4 ">
              <label htmlFor="currentCategory" className="mb-0.5">
                From
              </label>
              <Field
                type="text"
                name="currentCategory"
                id="currentCategory"
                className="p-2.5 border-mainWidth border-solid border-primary rounded"
                disabled
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="taskDescription" className="mb-0.5">
                To
              </label>
              <Field
                name="newCategory"
                as="select"
                className="p-2.5 border-mainWidth border-solid border-primary rounded"
              >
                {excludedCategories &&
                  excludedCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </Field>
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
      )}
    </Formik>
  );
};
