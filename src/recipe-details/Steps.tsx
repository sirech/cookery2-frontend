import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableCell,
  TableBody,
  TableRow,
} from '@material-ui/core'
import { Step as StepType } from 'new-recipe/types'

interface Props {
  list: StepType[]
}

const Steps: React.FC<Props> = ({ list }: Props) => (
  <Card>
    <CardHeader title="Steps" />
    <CardContent>
      <Table>
        <TableBody>
          {list.map((step, index) => (
            <TableRow key={index}>
              <TableCell>{step.description}</TableCell>
              <TableCell>{step.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)
export default Steps
