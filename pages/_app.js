import '../styles/globals.css'
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return( 
    <ThirdwebProvider      
      desiredChainId= {ChainId.Mumbai}
      chainRpc= {{
    [ChainId.Mumbai]:'https://polygon-mumbai.infura.io/v3/61ede82ce3f6407081553aa946933360'
        }}
    >
      {<ThemeProvider> 
        <Component{...pageProps} />
      </ThemeProvider>}
          </ThirdwebProvider>
    )
}

export default MyApp