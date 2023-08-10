import React from 'react'
import { BuyListComponent } from './components/BuyListComponent'
import { SecondBuyListComponent } from './components/SecondBuyListComponent'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

export default function MainComponent() {
  return (
    <div>
        {/* <BuyListComponent/> */}
        {/* <SecondBuyListComponent/> */}
        <RouterProvider router={router}/>
    </div>
  )
}
