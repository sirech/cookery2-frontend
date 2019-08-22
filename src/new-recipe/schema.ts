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

export default Yup.object().shape({
  name: Yup.string().required(),
  steps
})
