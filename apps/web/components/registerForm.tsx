import { z } from "zod";
import axios from "axios";
import useSWRMutation from "swr/mutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "ui";
import { OAuthButtonGroup } from "./OAuthButtonGroup";

const validationSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

interface IRegisterForm {
  email: string;
  fullName: string;
  password: string;
}

export function RegisterForm() {
  const toast = useToast();

  const signup = async (key: string, options: { arg: IRegisterForm }) => {
    const { arg } = options;
    const response = await axios.post("/api/signup", arg);

    return response.data;
  };

  const { trigger } = useSWRMutation("/signup", signup, {
    onSuccess: (data) =>
      toast({ title: data.message, status: "success", position: "top-right" }),
  });

  const onSubmit = (values: IRegisterForm) => {
    console.log("Values: ", values);
    trigger(values);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <Container maxW="lg" py={{ base: "4", md: "10" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "2xl" })}>
              CoderOne 👋
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Log In
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
          backgroundColor="white"
          textColor="black"
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isInvalid={errors.fullName?.message ? true : false}>
                <FormLabel htmlFor="full-name">Full Name</FormLabel>
                <Input id="full-name" type="text" {...register("fullName")} />
                <FormErrorMessage>Required!</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email?.message ? true : false}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" {...register("email")} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password?.message ? true : false}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" type="password" {...register("password")} />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              {/* <PasswordField /> */}
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="outline" onClick={handleSubmit(onSubmit)}>
                Sign up
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
