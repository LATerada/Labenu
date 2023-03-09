import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                header: {

                }
            }
        }
    },
    colors: {
        orange: {
            500: "#FE7E02"
        }
    }
})