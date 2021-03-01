import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '../../services/history';
import Layout from '../../component/Layout';

import Styles from './style';
import { setSessionObjectValue } from '../../utils/storage';

export default function Profile() {
  const [customers, setCustomers] = useState([]);

  async function handleDelete({ id }) {
    try {
      const response = await api.delete(`customers/${id}`);

      if (response.status !== 200) {
        throw new Error();
      }

      setCustomers(customers.filter((customer) => customer._id !== id));

      toast.info('Cliente excluído com sucesso');
    } catch (err) {
      toast.error('Erro ao cadastrar, tente novamente.');
    }
  }

  async function handleUpdate(data) {
    try {
      setSessionObjectValue('update', data);
      history.push('/update');
    } catch (err) {
      toast.error('Erro ao cadastrar, tente novamente.');
    }
  }

  useEffect(() => {
    api.get('customers').then((res) => {
      setCustomers(res.data);
    });
  }, []);

  const classes = Styles();
  const columns = [
    {
      field: 'name',
      headerName: 'Nome',
      width: 300,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'telephone',
      headerName: 'Telefone',
      width: 140,
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 140,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton aria-label="edit">
            <EditIcon onClick={() => handleUpdate(params.row)} />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon onClick={() => handleDelete({ id: params.row.id })} />
          </IconButton>
        </strong>
      ),
    },
  ];

  return (
    <Layout>
      <Grid container spacing={2} item md={12} className={classes.wrapper}>
        <Grid item md={9} className={classes.title}>
          <h2>Lista de Clientes</h2>
        </Grid>
        <Grid item md={5} className={classes.containerButton}>
          <Link className="button" to="/new">
            Cadastrar novo Cliente
          </Link>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} style={{ background: '#fff' }}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={customers.map((item) => {
                  return {
                    id: item._id,
                    name: item.name,
                    email: item.email,
                    telephone: item.telephone,
                    cpf: item.cpf,
                  };
                })}
                columns={columns}
                pageSize={5}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
