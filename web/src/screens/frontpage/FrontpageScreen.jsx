import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Detail, List } from '../../components'

function FrontpageScreen() {
  const [list, setList] = useState()
  const handleList = () => {
    setList(!list)
  }
  return (
    <div >
    <div className='pt-5 '>
        <Link onClick={handleList}> Welcome to the best webpage ever</Link>
    </div>
        {list &&
        <List/>
        }
    </div>
  )
}

export default FrontpageScreen