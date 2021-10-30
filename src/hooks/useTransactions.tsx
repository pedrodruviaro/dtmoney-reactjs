import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    useContext,
} from "react";
import { api } from "../services/api";

/* 
------- Typescript -------
*/
interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

/*
------- Creating context -------
*/
const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);
TransactionsContext.displayName = "Transaction Context";

/*
------- Creating Transaction Provider -------
*/
export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions").then(({ data }) =>
            setTransactions(data.transactions)
        );
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

/*
------- Creating Custom Hook -------
*/
export function useTransactions() {
    const context = useContext(TransactionsContext);
    return context;
}
