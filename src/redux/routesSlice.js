import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      isActive: false,
      points: [
        [59.84660399, 30.29496392], [59.82934196, 30.42423701], [59.83567701, 30.38064206],
      ]
    },
    {
      id: 2,
      isActive: false,
      points: [
        [59.82934196, 30.42423701], [59.82761295, 30.41705607], [59.84660399, 30.29496382]
      ],
    },
    {
      id: 3,
      isActive: false,
      points: [
        [59.83567701, 30.38064206], [59.84660399, 30.29496392], [59.82761295, 30.41705607]
      ],
    },
  ]
}

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setActiveRoute: (state, {payload}) => {
      state.value.forEach(route => {
        route.isActive = route.id === payload
      })
    }
  }
})

export const selectRoutes = (state) => state.routes.value
export const selectActiveRoute = (state) => {
  return state.routes.value.filter(route => route.isActive === true)
}

export const {reducer, actions} = routesSlice