import React, { ComponentType } from 'react'
import { useAsync } from 'react-use'

import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'
import RestaurantIcon from '@material-ui/icons/Restaurant'

import { Recipe as RecipeType } from './types'
import { recipeList } from './recipeList.service'

const Item = ({ value, Icon }: { value: number; Icon: ComponentType }) => (
  <ListItem>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    {value}
  </ListItem>
)
const Recipe = ({ recipe }: { recipe: RecipeType }) => (
  <Card>
    <CardHeader title={recipe.name}></CardHeader>
    <CardContent>
      <List>
        <Item value={recipe.servings} Icon={RestaurantIcon} />
        <Item value={recipe.duration} Icon={ScheduleIcon} />
      </List>
    </CardContent>
  </Card>
)

const RecipeList = () => {
  const state = useAsync(async (): Promise<RecipeType[]> => {
    return await recipeList().then(r => r.data)
  }, [])

  return (
    <section data-testid="recipe-list">
      <>
        {state.loading ? (
          <div>Loading...</div>
        ) : state.error ? (
          Error
        ) : (
          <>
            <Grid container spacing={2}>
              {(state.value || []).map((recipe, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
                  <Recipe recipe={recipe} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </>
    </section>
  )
}
export default RecipeList
