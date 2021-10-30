import { Container } from "./styles";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const { transactions } = useTransactions();

    // CALCULATING
    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === "deposit") {
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
            } else {
                acc.withdraws += transaction.amount;
                acc.total -= transaction.amount;
            }

            return acc;
        },
        {
            deposits: 0,
            withdraws: 0,
            total: 0,
        }
    );

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <BsArrowUpCircle style={{ color: "var(--green)" }} />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <BsArrowDownCircle style={{ color: "var(--red)" }} />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <MdAttachMoney style={{ color: "var(--shape)" }} />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}
