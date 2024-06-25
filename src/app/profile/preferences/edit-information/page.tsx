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

const EditInformation = () => {
  const router = useRouter()
  const route:Route = {
    name: "Edit information",
    value: "edit-information"
  }
  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
          .required('Campo obrigatorio'),
        email: Yup.string()
          .email("E-mail invalido")
          .required('Campo obrigatorio'),
        password: Yup.string()
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
          id="fullName"
          name="fullName"
          placeholder="Full Name" 
          icon={<User color="#C2C3CB" size={24} />} 
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.fullName}
          error={form.errors.fullName}
        />
        <InputText 
          id="email"
          name="email"
          type="text"
          placeholder="Email" 
          icon={<Mail color="#C2C3CB" size={24} />} 
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.email}
          error={form.errors.email}
        />
        <InputText 
          id="password"
          name="password"
          type="password"
          placeholder="Password" 
          icon={<Lock color="#C2C3CB" size={24} />} 
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.password}
          error={form.errors.password}
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

export default EditInformation