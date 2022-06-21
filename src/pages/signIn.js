import {
  Authenticator,
  // Flex,
  // Grid,
  Image,
  View,
  Text,
  useTheme,
  Heading,
  useAuthenticator,
  Button
} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import logo from "../components/assets/elinklogo.png"
// import Dashboard from "./Dashboard";
// import Sidebar from '../components/shared/Sidebar';
// import { useState } from 'react';
// import { Auth } from 'aws-amplify';
import { Routes, Route, Navigate } from 'react-router-dom';


// const Navbar = lazy(() => import('../components/shared/Navbar'));


const components = {

  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src={logo}
          width="100px"
          
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
         className="text-center">
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your email',
    },
    password: {
      labelHidden: false,
      placeholder: 'Enter your password'
    }
  },
  signUp: {
    email: {
      labelHidden: false,
      label: 'Email:',
      placeholder: 'Enter your email address',
      isRequired: true,
      order: 1
    },
    username: {
      labelHidden: false,
      label: 'Username:',
      placeholder: 'Enter your username',
      isRequired: true,
      order: 2
    },
    phone_number: {
      labelHidden: false,
      label: 'Phone Number:',
      placeholder: 'Enter your Phone Number',
      isRequired: false,
      order: 3,
    },
    password: {
      labelHidden: false,
      label: 'Enter your password',
      order: 4,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      labelHidden: false,
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: false,
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

export default function App() {

  // const [isAuthenticated, setIsAuthenticated] = useState(true)

  // Auth.currentUserInfo().then(
  //     data => data === null ? setIsAuthenticated(false) : ''
  // )
  // .catch(e =>{
  //     console.log(e)
  //     setIsAuthenticated(false)
  // })

  return (
    <Authenticator formFields={formFields} components={components}>
      <Routes>
        <Route
            path="*"
            element={<Navigate to="/dashboard" />}
        />
      </Routes>
    {({ signOut }) => <button onClick={signOut}>Sign out</button>}
  </Authenticator>
  )
  
}