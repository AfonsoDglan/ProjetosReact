import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styles';
import { X } from 'phosphor-react';
export function NewTransactionModal() {
    return(
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton asChild>
                    <X size={24}/>
                </CloseButton>
                <form action="">
                    <input type="text" placeholder='Descrição' required/>
                    <input type="number" placeholder='Preço' required/>
                    <input type="text" placeholder='Categoria' required/>
                </form>
                <button type='submit'>
                    Cadastrar
                </button>
                <Dialog.Close/>
            </Content>
        </Dialog.Portal>
    )
}