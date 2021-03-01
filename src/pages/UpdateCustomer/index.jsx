import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import validarCpf from 'validar-cpf';
import api from '~/services/api';

import Layout from '../../component/Layout';
import history from '../../services/history';

import Styles from './style';
import { getSessionObjectValue } from '../../utils/storage';
import { validateEmail } from '../../utils/validateUtils';

export default function Profile() {
  const classes = Styles();
  const [customer, setCustomer] = useState({});

  function handleInputName(event) {
    const data = customer;
    data.name = event.target.value;
    setCustomer(data);
  }

  function handleInputEmail(event) {
    const data = customer;
    data.email = event.target.value;
    setCustomer(data);
  }

  function handleInputTelephone(event) {
    const data = customer;
    data.telephone = event.target.value;
    setCustomer(data);
  }

  function handleInputCpf(event) {
    const data = customer;
    data.cpf = event.target.value;
    setCustomer(data);
  }

  async function handleUpdateCustomer() {
    try {
      if (
        customer.name === '' ||
        customer.email === '' ||
        customer.telephone === '' ||
        customer.cpf === ''
      ) {
        toast.error('Todos os campos são obrigatório.');
        return;
      }

      const isCpfValid = validarCpf(customer.cpf);
      if (!isCpfValid) {
        toast.error('CPF não é válido.');
        return;
      }

      const isEmailValid = validateEmail(customer.email);
      if (!isEmailValid) {
        toast.error('Email não é válido.');
        return;
      }

      await api.put(`customers/${customer.id}`, {
        name: customer.name,
        email: customer.email,
        telephone: customer.telephone,
        cpf: customer.cpf,
      });

      history.push('/');
      toast.info('Atualizado com sucesso!');
    } catch (err) {
      toast.error('Erro ao atualizar, tente novamente.');
    }
  }

  useEffect(() => {
    setCustomer(getSessionObjectValue('update'));
  }, []);

  return (
    <Layout>
      <Grid
        container
        spacing={2}
        item
        md={5}
        justify="flex-start"
        className={classes.wrapper}
      >
        <Grid item md={9} className={classes.title}>
          <h2>Atualizar Cliente</h2>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} style={{ background: '#fff' }}>
            <div style={{ height: 400, width: '100%' }}>
              <Form
                onSubmit={handleUpdateCustomer}
                className={classes.formCustomer}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  onChange={handleInputName}
                  onBlur={handleInputName}
                  defaultValue={customer.name}
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleInputEmail}
                  onBlur={handleInputEmail}
                  defaultValue={customer.email}
                />
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  placeholder="Telefone"
                  onChange={handleInputTelephone}
                  onBlur={handleInputTelephone}
                  defaultValue={customer.telephone}
                />
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder="CPF"
                  onChange={handleInputCpf}
                  onBlur={handleInputCpf}
                  defaultValue={customer.cpf}
                />

                <button className="button" type="submit">
                  Atualizar
                </button>

                <div className={classes.link}>
                  <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para lista de Clientes
                  </Link>
                </div>
              </Form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
