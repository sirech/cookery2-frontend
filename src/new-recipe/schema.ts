import * as Yup from 'yup'

const steps = Yup.array()
  .of(
    Yup.object().shape({
      description: Yup.string().required(),
      duration: Yup.number()
        .min(1)
        .required()
    })
  )
  .min(1)

const ingredients = Yup.array()
  .of(
    Yup.object().shape({
      name: Yup.string().required(),
      quantity: Yup.number()
        .min(1)
        .required(),
      unit: Yup.string().required()
    })
  )
  .min(0)

export default Yup.object().shape({
  name: Yup.string().required(),
  steps,
  ingredients
})
