import { Center, Text } from "@chakra-ui/react"
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { Card } from "../components/Card/Card";
import { Link } from '../components/Link/Link'
import { Modal } from "../components/Modal/Modal";
import {Table, TableHead, TableRow, TableHeader,TableBody} from '../components/Table/Table'
import { Tooltip } from "../components/Tooltip/Tooltip";
const LandingPage = () => {
    return ( 
        <Center id="landing-page"  bgColor='background' h='100vh' w='100vw' flexDirection='column'>
          <Text as="h1" fontSize='2xl' color='textPrimary'>PetrowWeb</Text>
          <Text as='p' color='textSecondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, enim? Fuga, corporis molestiae a laborum dolore fugiat architecto facere similique debitis tenetur illo accusamus sunt dolores voluptas? Nemo, ullam expedita?</Text>
          <Button size='sm' visual='outline' >Normal Button</Button>
          <Input Visual='outline' size='sm'></Input>
          <Card size="sm" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde eligendi aspernatur soluta corrupti ab quos nam hic ad praesentium sapiente, magnam alias voluptas provident, velit omnis, odio quisquam quis?
          </Card>
          <Modal size='md'>asdasdasdasdasdasd</Modal>
          <Table>
            <TableHead>dasdasd</TableHead>
            <TableBody>
            <TableRow><TableHeader>asdasd</TableHeader></TableRow>
            <TableRow><TableHeader>asdasd</TableHeader></TableRow>
            <TableRow><TableHeader>asdasd</TableHeader></TableRow>
            </TableBody>
          </Table>
          <Tooltip>dasdasdasd</Tooltip>
        </Center>
     );
}
 
export default LandingPage; 