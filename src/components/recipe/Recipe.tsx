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
} from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'
import RestaurantIcon from '@material-ui/icons/Restaurant'

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

const Recipe = ({ recipe, showActions }: Props) => (
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
          to={`/recipes/${recipe.id}`}
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
