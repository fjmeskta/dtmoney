import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';
Modal.setAppElement('#root');
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close">
          <img src={closeImg} alt="Fechar" />
        </button>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  );
}