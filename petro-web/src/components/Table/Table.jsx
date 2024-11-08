import { chakra } from "@chakra-ui/react"
import { tableRecipe } from "./table.recipe"

export const Table = chakra("table", tableRecipe)

export const TableHead = chakra("thead", {
    base: {
      backgroundColor: "gray.100",
    },
  });
  
  export const TableRow = chakra("tr", {});
  
  export const TableHeader = chakra("th", {
    base: {
      padding: "1em",
      borderBottom: "1px solid",
      borderColor: "gray.300",
      textAlign: "left",
      fontWeight: "bold",
    },
  });
  
  export const TableBody = chakra("tbody", {});
  
  export const TableData = chakra("td", {
    base: {
      padding: "1em",
      borderBottom: "1px solid",
      borderColor: "gray.200",
    },
  });