import { Summary } from "../Sumary";
import { TransactionsTable } from "../TrasactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}