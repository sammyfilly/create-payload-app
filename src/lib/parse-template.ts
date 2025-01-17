import prompts from 'prompts'
import type { CliArgs, ProjectTemplate } from '../types'

export async function parseTemplate(
  args: CliArgs,
  validTemplates: ProjectTemplate[],
): Promise<ProjectTemplate> {
  if (args['--template']) {
    const templateName = args['--template']
    const template = validTemplates.find(t => t.name === templateName)
    if (!template) throw new Error('Invalid template given')
    return template
  }

  const response = await prompts(
    {
      type: 'select',
      name: 'value',
      message: 'Choose project template',
      choices: validTemplates.map(p => {
        return {
          title: p.name,
          value: p.name,
          description: p.description,
        }
      }),
      validate: (value: string) => !!value.length,
    },
    {
      onCancel: () => {
        process.exit(0)
      },
    },
  )

  const template = validTemplates.find(t => t.name === response.value)
  if (!template) throw new Error('Template is undefined')

  return template
}
