import { Play } from "phosphor-react";
import { CountdownCOntainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";
import { useState } from "react";

const newCycleFormValidateSchema = z.object({
    task: z.string().min(1, 'Informe a tarefa'),
    minutesAmaunt: z.number().min(5, 'O intervalo precisa ser de no mínimo 5 minutos.').max(60, 'O intervalo precisa ser de no máximo 60 minutos.'),
})

interface NewCycleFormData {
    task: string,
    minutesAmount: number
}

interface Cycle {
    id: string
    task: string
    minutesAmount: number
}
export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidateSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })
     
    function handleCreateNewCycle(data:NewCycleFormData) {
        console.log("foiiiiiiiii")
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
        }
        setCycles((state) => [...state, newCycle])
        setActiveCycleId(id)
        reset()
    }

    const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId)
    console.log(activeCycleId)

    const task = watch('task')
    return(
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        type="text"
                        list="task-suggestions"
                        id="task"
                        placeholder="Dê um nome para o seu projeto"
                        {...register('task')}
                    />
                    <datalist id="task-suggestions">
                        <option value="projeto 1" />
                        <option value="projeto 2" />
                        <option value="projeto 3" />
                        <option value="projeto 4" />
                    </datalist>
                    <label htmlFor="minuteAmount">durante</label>
                    <MinutesAmountInput 
                        type="text" 
                        id="minuteAmount"
                        step={5}
                        min={5}
                        max={60}
                        placeholder="- 00 +" 
                        {...register('minuteAmount', { valueAsNumber: true })}
                    />
                    <span>minutos.</span>
                </FormContainer>
                <CountdownCOntainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownCOntainer>
                <StartCountdownButton disabled={!task} type="submit"><Play size={24}/> Começar</StartCountdownButton>
            </form>
        </HomeContainer>
    )
}