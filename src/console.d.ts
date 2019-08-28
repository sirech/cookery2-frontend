// Fix for annoying VSCode bug
declare module 'console' {
  export = typeof import('console')
}
