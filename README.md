# Arcade Frontend Exercise

This project is a pair programming exercise designed to help demonstrate:

  - An understanding of modern React best practices
  - Writing testable code
  - The ability to work with other developers

## The Goals

The app is simple: a list of people with a search box.

As a user, I can search for a person's name and the list will filter down to only show people that match my search input.

The feature is sitting under [src/components/PeopleList](src/components/PeopleList), and the `Person` interface has these properties:

```ts
// src/types.ts

export interface Person {
  id: string;
  imageUrl?: string;
  name: string;
  teamName?: string;
}
```

The goals are to:
  - [ ] extend the search function to support filtering by `teamName`
  - [ ] identify (and fix) any potential performance issues


## Our Stack

The project is written in TypeScript (optional but preferred).

- Babel / Node v14.7.0 / Yarn
- NextJS / React / Chakra UI
- Jest


## Prerequisites

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Setup

**Clone repo**

```bash
git clone git@github.com:workplacearcade/arcade-frontend-exercise.git

cd arcade-frontend-exercise
```

**Install node**

```bash
nvm install
```

**Install dependencies**

```bash
yarn install
```


## Development

Start the dev server and open the page in your browser.

```bash
yarn dev

# defaults to http://localhost:3000
```


## Unit Tests

We use Jest to run our test suite. You can run that with:

```bash
yarn test

# or keep tests running
yarn test:watch
```
