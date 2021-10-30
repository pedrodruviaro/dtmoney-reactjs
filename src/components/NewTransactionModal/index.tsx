import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import {
    AiOutlineClose,
    AiOutlinePlusCircle,
    AiOutlineMinusCircle,
} from "react-icons/ai";
import { useState } from "react";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    // states
    const [type, setType] = useState("deposit");

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <AiOutlineClose />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <AiOutlinePlusCircle
                            style={{ color: "var(--green)" }}
                        />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <AiOutlineMinusCircle style={{ color: "var(--red)" }} />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
