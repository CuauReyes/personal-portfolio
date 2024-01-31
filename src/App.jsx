import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import React from "react";
import { columns, users } from "./data";

function App() {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return "";
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50"></span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50"></span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50"></span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <main>
        <header>
          <Navbar isBordered>
            <NavbarContent justify="start">
              <NavbarBrand className="mr-4">
                <p className="hidden sm:block font-bold text-inherit">
                  Cuau Reyes
                </p>
              </NavbarBrand>
              <NavbarContent className="hidden sm:flex gap-3">
                <NavbarItem>
                  <Link color="foreground" href="#">
                    About Me
                  </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" aria-current="page" color="secondary">
                    Projects
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Contact
                  </Link>
                </NavbarItem>
              </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-[10rem] h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                type="search"
              />
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
          </Navbar>
        </header>
        <section className=" container mx-auto">
          <h1 className="mb-2 font-bold text-4xl text-center pb-8 pt-8">
            Cuau Reyes Projects
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            <Card
              isBlurred
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 mx-2 my-1 max-w-[400px]"
            >
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">App 1</p>
                  <p className="text-small text-default-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
            <Card
              isBlurred
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 mx-2 my-1 max-w-[400px]"
            >
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">App 2</p>
                  <p className="text-small text-default-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
            <Card
              isBlurred
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 mx-2 my-1 max-w-[400px]"
            >
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">App 3</p>
                  <p className="text-small text-default-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="container mx-auto">
          <Accordion selectionMode="multiple">
            <AccordionItem
              key="1"
              aria-label="Chung Miller"
              startContent={
                <Avatar
                  isBordered
                  color="primary"
                  radius="lg"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              }
              subtitle="4 unread messages"
              title="Chung Miller"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Janelle Lenard"
              startContent={
                <Avatar
                  isBordered
                  color="success"
                  radius="lg"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              }
              subtitle="3 incompleted steps"
              title="Janelle Lenard"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Zoey Lang"
              startContent={
                <Avatar
                  isBordered
                  color="warning"
                  radius="lg"
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                />
              }
              subtitle={<p className="flex">2 issues to</p>}
              title="Zoey Lang"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </section>
        <section className="container mx-auto">
          <Table aria-label="Example table with custom cells" isBlurred>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={users}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </section>
        <footer className="items-center">
          <p className="text-sm text-default-400 text-center">
            © 2024 Rose Dev
          </p>
          <p className="font-normal text-center">Deployed on Netlify</p>
        </footer>
      </main>
    </>
  );
}

export default App;
