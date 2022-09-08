import type { NextPage } from "next"
import React, { useState, useEffect } from "react"

//Components
import { Workingarea } from "views/WorkingArea"

//Styled Component
import { WorkLayout } from "styles/Styled"

//Loading
import { Loading } from "components/Loading"

const WorkPage: NextPage = () => {
  // const [loading, setLoading] = useState(true)
  // let timer: NodeJS.Timeout
  // useEffect(() => {
  //   timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])

  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <WorkLayout>
        <Workingarea />
      </WorkLayout>
      {/* )} */}
    </>
  )
}

export default WorkPage
