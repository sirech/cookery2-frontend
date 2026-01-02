import React, { ComponentType } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Link,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material'
import {
  Restaurant as RestaurantIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material'

import { Recipe as RecipeType } from './types'
import AdapterLink from 'components/adapter-link'

const Item = ({ value, Icon }: { value: number; Icon: ComponentType }) => (
  <ListItem>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    {value}
  </ListItem>
)

interface Props {
  recipe: RecipeType
  showActions: boolean
}

const Recipe: React.FC<Props> = ({ recipe, showActions }: Props) => (
  <Card>
    <CardHeader title={recipe.name}></CardHeader>
    <CardContent>
      <List>
        <Item value={recipe.servings} Icon={RestaurantIcon} />
        <Item value={recipe.duration} Icon={ScheduleIcon} />
      </List>
    </CardContent>
    {showActions && (
      <CardActions>
        <Link
          href={`/recipes/${recipe.id}`}
          color="primary"
          underline="none"
          component={AdapterLink}
        >
          DETAILS
        </Link>
      </CardActions>
    )}
  </Card>
)

export default Recipe
