import { Form, Formik } from "formik";
import React from "react";
import { useContext } from "react";
import * as yup from "yup";
import CustomStack from "../Stacks/CustomStack";
import { FormContainer } from "../Stacks/InputFormStack";
import ErrorMessage from "./ErrorMessage";

const NewSeasonForm = ({ innerref, handleStepNext, film }) => {

    /**season {
        id        String    @id @default(auto()) @map("_id") @db.ObjectId
        title     String
        season    Int
        episodes  episode[]
        film      film?     @relation(fields: [filmId], references: [id], onDelete: Cascade)
        filmId    String?   @db.ObjectId
        createdAt DateTime  @default(now())
        watched   watched[]
      } **/
    const validationSchema = yup.object().shape({
        season: yup.number().required("required"),
        title: yup.string().required("required"),
        filmId: yup.string().required("required"),
      });

    const initialValues = {
        season:"",
        title: "",
        filmId: film?.id,
    };
  return (
      <Formik
          innerRef={innerref}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, helpers) => {
              handleStepNext(values);
          }}
      >
          {({ values, handleChange, errors,handleBlur, touched, setFieldValue }) => (
              <Form>
              <CustomStack className="h-full w-full flex flex-col gap-5 text-whites-40">
                    {/** Season Number */}
                    <FormContainer>
                  <label
                    htmlFor="season"
                    className="label font-[Inter-Regular] text-base text-whites-100 text-opacity-75"
                  >
                   Segment Number (required)
                  </label>
                  <input
                    id="season"
                    type="number"
                    value={values.season}
                    name="season"
                    onChange={handleChange}
                    placeholder="Season Number"
                    onBlur={handleBlur}
                  />
    
                  <ErrorMessage
                    errors={touched?.season && errors?.season ? true : false}
                    name="season"
                    message={errors?.season && errors.season}
                  />
                </FormContainer>

                {/** title */}
                <FormContainer>
                  <label
                    htmlFor="title"
                    className="label font-[Inter-Regular] text-base text-whites-100 text-opacity-75"
                  >
                 Segment Title (required)
                  </label>
                  <input
                    id="title"
                    value={values.title}
                    name="title"
                    onChange={handleChange}
                    placeholder="Title "
                    onBlur={handleBlur}
                  />
    
                  <ErrorMessage
                    errors={touched?.title && errors?.title ? true : false}
                    name="title"
                    message={errors?.title && errors.title}
                  />
                </FormContainer>
              
              </CustomStack>
            </Form>
          )}
      </Formik>
  )
}

export default NewSeasonForm