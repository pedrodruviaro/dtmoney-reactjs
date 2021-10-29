import { MdAttachMoney } from "react-icons/md";
import { Container, Content, Logo } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <Logo>
                    <div>
                        <MdAttachMoney />
                    </div>
                    <span>dt money</span>
                </Logo>
                <button type="button">Nova Transação</button>
            </Content>
        </Container>
    );
}
