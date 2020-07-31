import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  DrawerFooter,
  Input,
} from "@chakra-ui/core";
import { useHabitCreate } from "data/habits";

interface CreateHabitFormProps {
  onCreateHabit: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const CreateHabitForm: React.FC<CreateHabitFormProps> = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const createHabit = useHabitCreate();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required."),
    }),
    onSubmit: async (input, context) => {
      setSubmitting(true);
      await createHabit(input);
      props.onCreateHabit();
      setSubmitting(false);
      context.resetForm();
    },
  });

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        size="lg"
        onClose={() => {
          props.onClose();
          formik.resetForm();
        }}
      >
        <DrawerOverlay />
        <form onSubmit={formik.handleSubmit}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Start a habit</DrawerHeader>
            <DrawerBody>
              <FormControl
                isRequired
                isInvalid={!!formik.errors.name && formik.touched.name}
              >
                <FormLabel htmlFor="habit_name">Habit name</FormLabel>
                <Input
                  id="habit_name"
                  isDisabled={submitting}
                  placeholder="ex. 'Go for a run daily'"
                  {...formik.getFieldProps("name")}
                />
                <FormHelperText>
                  A descriptive name for your habit that sets it apart. Short
                  but sweet.
                </FormHelperText>
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={
                  !!formik.errors.description && formik.touched.description
                }
              >
                <FormLabel htmlFor="habit_description">
                  Habit description
                </FormLabel>
                <Textarea
                  id="habit_description"
                  isDisabled={submitting}
                  placeholder="ex. 'I need to run daily. To do so, I will...'"
                  {...formik.getFieldProps("description")}
                />
                <FormHelperText>
                  A complete description for your habit. Outline all of the
                  steps you need to do to complete your habit here. Don't worry,
                  you can change everything later.
                </FormHelperText>
              </FormControl>
            </DrawerBody>
            <DrawerFooter>
              <Button type="submit" variantColor="green" isLoading={submitting}>
                Create new habit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};

export default CreateHabitForm;
