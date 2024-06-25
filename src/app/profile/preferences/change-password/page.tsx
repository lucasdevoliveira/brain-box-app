"use client"

import Header from "@/components/header"
import Nav from "@/components/nav"
import { useRouter } from 'next/navigation'
import InputText from "@/components/input-text"
import { User, Mail, Lock, Fullscreen } from "lucide-react"
import Button from "@/components/button"
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Route = {
  name: string;
  value: string;
}

const ChangePassword = () => {
  const router = useRouter()
  const route:Route = {
    name: "Change password",
    value: "change-password"
  }
  const form = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
          .min(8, "Senha precisa ter no minimo 8 caracteres")
          .max(12, "Senha precisa ter no maximo 12 caracteres")
          .required('Campo obrigatorio'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Senhas não estão iguais')
        .min(8, "Senha precisa ter no minimo 8 caracteres")
        .max(12, "Senha precisa ter no maximo 12 caracteres")
        .required('Campo obrigatorio'),
    }), 
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <main className="dark:bg-[#141718]">
      <Header title={route.name} />
      <form onSubmit={form.handleSubmit} className="px-5 flex gap-10 flex-col mt-28">
        <InputText 
          id="newPassword"
          name="newPassword"
          placeholder="New password" 
          icon={<User color="#C2C3CB" size={24} />} 
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.newPassword}
          error={form.errors.newPassword}
        />
        <InputText 
          id="confirmPassword"
          name="confirmPassword"
          type="text"
          placeholder="Confirm password" 
          icon={<Mail color="#C2C3CB" size={24} />} 
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.confirmPassword}
          error={form.errors.confirmPassword}
        />
        <Button 
          label="Save changes" 
          type="submit" 
        />
      </form>
      <Nav onClick={(route: string) => router.push(route)} />
    </main>
  )
}

export default ChangePassword