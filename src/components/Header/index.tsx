import { MdAttachMoney } from "react-icons/md";
import { Container, Content, Logo } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <Logo>
                    <div>
                        <MdAttachMoney />
                    </div>
                    <span>dt money</span>
                </Logo>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
}
