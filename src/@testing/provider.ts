import path from 'path'
import { Pact, SpecificationVersion } from '@pact-foundation/pact'

const provider = () =>
  new Pact({
    port: 8990,
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: SpecificationVersion.SPECIFICATION_VERSION_V2,
    consumer: 'frontend',
    provider: 'backend',
  })
export default provider
