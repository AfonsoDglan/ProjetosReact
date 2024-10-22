import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./componentes/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Trasactions() {
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de Site</td>
                            <PriceHighlight variant="income">
                                R$ 12.000,00
                            </PriceHighlight>
                            <td>Venda</td>
                            <td>13/02/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <PriceHighlight variant="outcome">
                                - R$ 59,00
                            </PriceHighlight>
                            <td>Alimentação</td>
                            <td>10/02/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}