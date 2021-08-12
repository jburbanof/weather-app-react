import * as yup from "yup"

export const searchSchema = yup.object().shape({
    city: yup.string().required(),
    countryCode: yup.string().min(2).max(2).required()
})