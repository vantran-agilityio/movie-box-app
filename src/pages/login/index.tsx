import { ButtonVariants } from '@common-types/button';
import { TextFieldTypes } from '@common-types/textfield';
import { TitleVariants } from '@common-types/title';
import Button from '@components/Button';
import Form from '@components/Form';
import Text from '@components/Text';
import TextField from '@components/TextField';
import Title from '@components/Title';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <main className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="h-full flex flex-col items-center">
        <Form className=" w-1/3" onSubmit={() => undefined} />
      </div>
    </main>
  );
};

export default Login;
