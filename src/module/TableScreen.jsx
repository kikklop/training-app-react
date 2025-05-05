import React from 'react';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { DataTableCard2 } from 'asab_webui_components/dist/components/DataTable2/DataTable2';
import { Link } from 'react-router-dom';
import { DateTime } from 'asab_webui_components/dist/components/DateTime/DateTime';

export function TableScreen(props) {
  const { t } = useTranslation();

  const loader = async ({ params }) => {
    try {
      const requestParams = new URLSearchParams(params);
      const response = await fetch(
        `https://devtest.teskalabs.com/data?${requestParams.toString()}`
      );
      const data = await response.json();

      const rows = data.data;
      const count = data.count;

      return { count, rows };
    } catch (error) {
      console.error('Data loading failed:', error);
      return { count: 0, rows: [] };
    }
  };

  const columns = [
    {
      title: t('table|username'),
      thStyle: { minWidth: '2rem' },
      render: ({ row }) => {
        return (
          <div className="tooltip-wrapper">
            <Link to={`/detail/${row.id}`}>{row.username}</Link>
            <span className="tooltip-text">ID: {row.id}</span>
          </div>
        );
      },
    },
    {
      title: t('table|email'),
      thStyle: { minWidth: '4rem' },
      render: ({ row }) => row.email,
    },
    {
      title: t('table|address'),
      thStyle: { minWidth: '4rem' },
      render: ({ row }) => row.address,
    },
    {
      title: t('table|created'),
      thStyle: { minWidth: '4rem' },
      render: ({ row }) => <DateTime value={row.created} />,
    },
    {
      title: t('table|last_sign_in'),
      thStyle: { minWidth: '4rem' },
      render: ({ row }) => <DateTime value={row.last_sign_in} />,
    },
    {
      thStyle: { width: '0px' },
      tdStyle: { padding: '0px', whiteSpace: 'nowrap' },
      render: ({ row }) => (
        <>
          <Link to={`/detail/${row.id}`}>
            <button className="btn btn-primary me-1">
              <i className="bi bi-search"></i>
            </button>
          </Link>
          <button onClick={() => handleDelete(row)} className="btn btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </>
      ),
    },
  ];

  const handleDelete = row => {
    alert(`${t('table|delete_text')} ${row.id}`);
  };

  return (
    <Container className="h-100">
      <DataTableCard2 header={t('table|title')} columns={columns} loader={loader} />
    </Container>
  );
}
