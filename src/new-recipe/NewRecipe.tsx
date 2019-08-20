import React from 'react'

import { Formik, Field, FormikProps } from 'formik'

interface RecipeForm {
  name: string
}

const initialValues: RecipeForm = {
  name: ''
}

const NewRecipe = () => (
  <section>
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }: FormikProps<RecipeForm>) => (
        <form onSubmit={handleSubmit}>
          <h2>New Recipe</h2>
          <Field name="name" />

          <button type="submit">Create</button>
        </form>
      )}
    </Formik>
  </section>
)
export default NewRecipe
