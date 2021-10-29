import { Container } from "./styles";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <BsArrowUpCircle style={{ color: "var(--green)" }} />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <BsArrowDownCircle style={{ color: "var(--red)" }} />
                </header>
                <strong>- R$900,00</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Entradas</p>
                    <MdAttachMoney style={{ color: "var(--shape)" }} />
                </header>
                <strong>R$100,00</strong>
            </div>
        </Container>
    );
}
