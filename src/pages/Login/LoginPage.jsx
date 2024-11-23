import { Box, Button, Flex, Switch, TextField } from "@radix-ui/themes";

export function LoginPage() {
  return (
    <Box
      style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}
    >
      <Flex align="center">
        <TextField.Root radius="full" placeholder="Search the docs…" />
        <TextField.Root radius="full" placeholder="Search the docs…" />
        <Switch defaultChecked />
        <Button>Login</Button>
      </Flex>
    </Box>
  );
}
