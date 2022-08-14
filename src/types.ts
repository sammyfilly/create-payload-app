import type arg from 'arg'

export type Args = {
  '--help': BooleanConstructor
  '--name': StringConstructor
  '--language': StringConstructor
  '--collections': StringConstructor
  '--db': StringConstructor
  '--secret': StringConstructor
  '--use-npm': BooleanConstructor
  '--no-deps': BooleanConstructor
  '--dry-run': BooleanConstructor
  '--beta': BooleanConstructor
  '-h': string
  '-n': string
  '-t': string
}

export type CliArgs = arg.Result<Args>

export type ProjectTemplate = StaticTemplate | GitTemplate

export type StaticTemplate = {
  name: string
  type: 'static'
}

export type GitTemplate = {
  name: string
  type: 'starter'
  url: string
}
