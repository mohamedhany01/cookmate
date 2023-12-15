# CookMate

CookMate is an online platform that aims to bring food enthusiasts together in a community where they can share, discover, and enjoy cooking recipes. Whether you're a seasoned chef or a culinary novice, CookMate provides a comprehensive set of features that allow you to not only find the perfect dish to whip up but also contribute to a growing repository of diverse and delectable recipes.

Create a platform where users can share their favourite recipes. The app should allow users to browse, search, and contribute recipes. It should also provide user authentication and the ability to rate recipes.

## Installation Locally

1. Clone the repository
2. Make sure you have nodejs >= `18` installed
3. Copy `.env.example` to be `.env`
4. Initialize the environment `DATABASE_URL` in `.env`
5. Run the following command `npm run build:prisma:generate` to generate ORM schema and build the project
6. Run the following command `npm run dev` to start dev server locally

## Demo

You can find a live demo on Vercel on this link: [CookMate](https://cookmate-ruby.vercel.app)
