import { useState } from "react";

export function useForm (estadoInicial){
    const [form, setForm] = useState(estadoInicial);

    const onChangeForm = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    const resetForm = () => {
        setForm(estadoInicial)
    }
    return { form, onChangeForm, resetForm }
}