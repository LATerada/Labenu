import * as React from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Card from './components/Card';
import { productList } from "./data/List"

function App() {
  const [list, setList] = React.useState(productList)
  console.log(list)
  return (
    <ChakraProvider resetCSS>
      <Flex wrap={"wrap"} gap={"16"} justify={"center"}>
        {list.map((product) => {
          return(
            <Card product={product}/>
          )
        })}
      </Flex>
    </ChakraProvider>
  )
}

export default App;
