import { CodegenConfig } from '@graphql-codegen/cli'
//여러 파일로 나누기 
//https://github.com/dotansimha/graphql-code-generator/issues/5928

//https://nomadcoders.co/nuber-eats/lectures/2279
//https://the-guild.dev/graphql/codegen/docs/guides/react-vue
const config: CodegenConfig = {
  schema: 'http://localhost:2021/graphql',
  config: { 
    namingConvention: 'keep',

  },
  documents: ['src/**/!(*.generated).{ts,tsx}'], //['src/**/*.tsx'], 
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/__generated__/gql-types.ts': { plugins: ['typescript'] },
    './src/': {
      preset: 'near-operation-file',
      config:{
          avoidOptionals :true, //https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#maybevalue-string-default-value-t--null
          maybeValue: 'T | null',
      //     scalars:{
      //     Date: 'string',
      //     DateTime: 'string',
      //     FloatType: 'number',
      //     IntType: 'number',
      // }
      },
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: './__generated__/gql-types.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },
  require: ['ts-node/register'],
  // verbose :true,
}
 
export default config