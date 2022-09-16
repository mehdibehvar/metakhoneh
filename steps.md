1. npx-create-next-app@latest --typescript

2. npm install @reduxjs/toolkit react-redux [
    install redux-toolkit and then config it for next.js(just create store and add provider to _app.ts)
]

3. Create src directory and in it:pages{pages of app} , features{for createSlices} , app{stor.ts and hooks.ts}
4. inside app create two file: 1-store.ts 2.hooks.ts[in the hooks.ts we export useAppdispatch that asigned to thier types, so we will not need asign (export type AppDispatch = typeof store.dispatch;) to the usedispatch every time we want use it.]

5. config the store in nextjs [All that is happening here is we put a <Provider> around our entire app, and pass the store as a prop.]
6. createSlices in features directory;
7. npm install sass reactstrap bootstrap[for using reactstrap in nextjs just install them and import {import 'bootstrap/dist/css/bootstrap.min.css';} in the _app.ts no other config need]
8. add custom ducument.tsx to pages
9. set reset css and import font in the globals.scss[To add a web font to your Next.js application, add the font to a Custom Document.Adding fonts link to _document is preferred over individual pages.].
10. add getLayout property to page.
11. create Meta component(with default value).
12.