import React, { useState, useEffect } from 'react';
import {
  MdFilterList,
  MdAdd,
  MdCropSquare,
  MdMoreVert,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from 'react-icons/md';

import {
  Container,
  Header,
  Filter,
  FilterButton,
  FilterInput,
  Content,
  AddButton,
  TableContainer,
  TableFooter,
  Separator,
  TableFooterContent,
  TableFooterContentLeft,
  TableFooterContentRight,
} from './styles';

import { IClient } from '../../utils/interfaces/IClient';
import { clientList } from '../../utils/data/Clients';

import searchImg from '../../assets/icons/search.svg';
import arrowDownImg from '../../assets/icons/arrow.svg';

const Clients: React.FC = () => {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    async function getClients(): Promise<void> {
      setClients(clientList);
    }

    getClients();
  }, []);
  return (
    <Container>
      <Header>
        <Filter>
          <FilterButton>
            <MdFilterList />
            <h1>FILTRAR</h1>
          </FilterButton>
          <FilterInput>
            <input placeholder="Buscar por nome..." />
            <img src={searchImg} alt="Buscar" />
          </FilterInput>
        </Filter>
        <AddButton>
          <MdAdd />
          <h1>Adicionar</h1>
        </AddButton>
      </Header>
      <Content>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th style={{ width: '5%' }}>
                  <MdCropSquare />
                </th>
                <th style={{ width: '25%' }}>Nome</th>
                <th style={{ width: '15%' }}>Status</th>
                <th style={{ width: '15%' }}>Telefone</th>
                <th style={{ width: '15%' }}>E-mail</th>
                <th style={{ width: '15%' }} />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.email}>
                  <td>
                    <MdCropSquare />
                  </td>
                  <td>{client.name}</td>
                  <td>
                    <span className={client.status}>
                      {client.status === 'client' ? 'Cliente' : 'Lead'}
                    </span>
                  </td>
                  <td>{client.phone}</td>
                  <td>{client.email}</td>
                  <td>
                    <MdMoreVert />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
        <TableFooter>
          <Separator />
          <TableFooterContent>
            <TableFooterContentLeft>
              <span>Itens por página: </span>
              <h3>10</h3>
              <img src={arrowDownImg} alt="Página" />
              <span>1-10 de 3.456</span>
            </TableFooterContentLeft>

            <TableFooterContentRight>
              <MdKeyboardArrowRight size={20} />
              <MdKeyboardArrowLeft size={20} />
            </TableFooterContentRight>
          </TableFooterContent>
        </TableFooter>
      </Content>
    </Container>
  );
};

export default Clients;
