import React from 'react';
import { Grid } from '@material-ui/core';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import validarCpf from 'validar-cpf';
import api from '~/services/api';

import Layout from '../../component/Layout';
import history from '../../services/history';

import Styles from './style';
import { validateEmail } from '../../utils/validateUtils';

export default function Profile() {
  const classes = Styles();

  async function handleNewIncident({ name, email, telephone, cpf }) {
    try {
      if (name === '' || email === '' || telephone === '' || cpf === '') {
        toast.error('Todos os campos são obrigatório.');
        return;
      }

      const isCpfValid = validarCpf(cpf);
      if (!isCpfValid) {
        toast.error('CPF não é válido.');
        return;
      }

      const isEmailValid = validateEmail(email);
      if (!isEmailValid) {
        toast.error('Email não é válido.');
        return;
      }

      await api.post('customers', {
        name,
        email,
        telephone,
        cpf,
      });

      history.push('/');
    } catch (err) {
      toast.error('Erro ao cadastrar, tente novamente.');
    }
  }

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
          <h2>Cadastrar Cliente</h2>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            justify="flex-end"
            alignItems="flex-start"
            style={{ background: '#fff' }}
          >
            <div style={{ height: 400, width: '100%' }}>
              <Form
                onSubmit={handleNewIncident}
                className={classes.formCustomer}
              >
                <Input name="name" placeholder="Nome" />
                <Input name="email" placeholder="Email" />
                <Input name="telephone" placeholder="Telefone" />
                <Input name="cpf" placeholder="CPF" />

                <button className="button" type="submit">
                  Cadastrar
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
