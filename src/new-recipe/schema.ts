import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string().required(),
  steps: Yup.array()
    .of(
      Yup.object().shape({
        description: Yup.string().required(),
        duration: Yup.number()
          .min(1)
          .required()
      })
    )
    .min(1)
})
