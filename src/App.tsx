import {Person2, Person3Outlined } from '@mui/icons-material'

import css from './App.module.scss'
import { Input, Badge } from './components'

function App() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css['inputs-wrapper']}>
          <h1>Inputs</h1>
          <Input type="text" label="Default" />
          <Input type="text" label="Disabled" disabled fullWidth/>
          <Input type="email" label="Input" helperText={'With Helper Text'} />
          <Input type="password" label="type Password" fullWidth/>
          <Input
            type="text"
            label="With Error"
            error
            helperText={'Invalid Value. Please, try again!'}
          />
        </div>
      </div>
      <div className={css['badges-wrapper']}>
        <Badge label={'Redux'} />
        <Badge label={'Redux'} variant="outlined"/>

        <Badge label={'React Native'} onDelete={()=> console.log()}/>
        <Badge label={'React Native'} variant="outlined" onDelete={()=> console.log()}/>
        
        <Badge label={'NodeJS'} disabled onDelete={()=> console.log()}/>
        <Badge label={'NodeJS'} disabled variant="outlined" onDelete={()=> console.log()}/>

        <Badge label={'HTML5'} icon={<Person2 />} onDelete={()=> console.log()}/>
        <Badge label={'HTML5'} icon={<Person2 />} variant="outlined" onDelete={()=> console.log()}/>

        <Badge label={'Redux'} size="small"/>
        <Badge label={'Redux'} variant="outlined" size="small"/>

        <Badge label={'React Native'} size="small" onDelete={()=> console.log()}/>
        <Badge label={'React Native'} size="small" variant="outlined" onDelete={()=> console.log()}/>
        
        <Badge label={'NodeJS'} disabled size="small" onDelete={()=> console.log()}/>
        <Badge label={'NodeJS'} disabled size="small" variant="outlined" onDelete={()=> console.log()}/>
      
        <Badge label={'HTML5'} size="small" icon={<Person3Outlined />} onDelete={()=> console.log()}/>
        <Badge label={'HTML5'} size="small" icon={<Person3Outlined />} variant="outlined" onDelete={()=> console.log()}/>

      
      </div>

    </div>
  )
}

export default App
