import { Form } from "@/components/Form/Form";
import { FormGroup } from "@/components/Form/Group";
import { FormInput } from "@/components/Form/Input";
import { FormLabel } from "@/components/Form/Label";
import Head from "next/head";

export default function AdminLogin() {
  return (
    <>
      <Head>
        <title>Admin Login</title>
        <meta name="description" content="Admin login for edukabiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white min-h-screen flex items-center justify-center p-10px">
        <div className="bg-blue max-w-[884px] w-full rounded-10px flex flex-col justify-center items-center min-h-[580px]">
          <div className="max-w-[400px] w-full flex-shrink-0">
            <h5 className="text-white mb-48px">Masuk dengan akun admin kamu</h5>
            <Form>
              <FormGroup className="mb-16px">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput name="email" />
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}