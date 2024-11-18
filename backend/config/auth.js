import passport from "passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import User from "../models/user.js"

const config = () => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  }

  passport.use(
    new Strategy(jwtOptions, async (payload, next) => {
      try {
        const user = await User.findById(payload.id)
        if (!user) {
          return next(null, false)
        }
        next(null, payload)
      } catch (error) {
        next(error, false)
      }
    })
  )
}

export default config
