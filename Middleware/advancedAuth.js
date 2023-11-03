import { auth } from 'express-oauth2-jwt-bearer'

const checkJwt = auth({
  audience: --'https://book-store-api', // e.g. https://book-store-api
  issuerBaseURL: `https://{yourDomain}/`
})

export default checkJwt
