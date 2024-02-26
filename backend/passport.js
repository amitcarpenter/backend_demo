const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "your id";
const GOOGLE_CLIENT_SECRET = "your id";

GITHUB_CLIENT_ID = "your id";
GITHUB_CLIENT_SECRET = "your id";

TWITTER_CONSUMER_KEY = "tF8P7V2dotmnb700TRGOaFj2J";
TWITTER_CONSUMER_SECRET = "wFwKTtpheTLkw4UX97gCcAXFqoodbqqaBsYT57U9GAuGxA5z0J";

FACEBOOK_APP_ID = "7212870735459306";
FACEBOOK_APP_SECRET = "ba7335138e9f051d1ad596ec86fba30a";

INSTAGRAM_CLIENT_ID = "930508638448815";
INSTAGRAM_CLIENT_SECRET = "117f29f70ce19821f58ba0da8a40a7e4";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:5000/auth/twitter/callback",
    },
    function (token, tokenSecret, profile, done) {
      console.log(token, tokenSecret);
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        username: profile.username,
      };
      return done(null, user);
    }
  )
);

passport.use(
  new InstagramStrategy(
    {
      clientID: "YOUR_INSTAGRAM_CLIENT_ID ",
      clientSecret: "YOUR_INSTAGRAM_CLIENT_SECRET",
      callbackURL: "http://localhost:5000/auth/instagram/callback",
      scope: [
        "instagram_basic",
        "instagram_manage_comments",
        "instagram_manage_insights",
        "instagram_content_publish",
      ],
    },
    function (accessToken, refreshToken, profile, done) {
      // Your user creation logic here
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        username: profile.username,
      };
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
