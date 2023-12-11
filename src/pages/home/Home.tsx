import { useEffect, useState } from 'react';
import { Form, Select, Button, Row, Col, Table, Pagination } from 'antd';

import { getMedicine } from '../../services/medicine.service';
import {
  useGetActiveIngredient,
  useGetReference,
  useGetTradeName,
} from '../../hooks/medicine.hook';

import { FilterMedicine, Medicine } from '../../models/medicine.model';

const Home = () => {
  const [dataActiveIngredient, fecthDataActiveIngredient] =
    useGetActiveIngredient();
  const [dataReference, fecthDataReference] = useGetReference();
  const [dataTradeName, fecthDataTradeName] = useGetTradeName();

  const [dataSource, setDataSource] = useState<Medicine[]>([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const [stateFilter, setStateFilter] = useState<{
    isFiltering: boolean;
    values: FilterMedicine;
  }>({
    isFiltering: false,
    values: {},
  });

  const columns = [
    {
      title: 'Referência',
      dataIndex: 'reference',
      key: 'reference',
    },
    {
      title: 'Princípio ativo',
      dataIndex: 'activeIngredient',
      key: 'activeIngredient',
    },
    {
      title: 'Nome comercial do medicamento similar',
      dataIndex: 'tradeName',
      key: 'tradeName',
    },
    {
      title: 'Detentor do registro do medicamento similar',
      dataIndex: 'holderOfSimilarMedicineRegistration',
      key: 'holderOfSimilarMedicineRegistration',
    },
    {
      title: 'Forma Farmacêutica',
      dataIndex: 'pharmaceuticalForm',
      key: 'pharmaceuticalForm',
    },
    {
      title: 'Concentração',
      dataIndex: 'concentration',
      key: 'concentration',
    },
    {
      title: 'Data da inclusão',
      dataIndex: 'inclusionDate',
      key: 'inclusionDate',
    },
  ];

  useEffect(() => {
    if (dataActiveIngredient.length === 0) fecthDataActiveIngredient();
    if (dataReference.length === 0) fecthDataReference();
    if (dataTradeName.length === 0) fecthDataTradeName();
  }, []);

  useEffect(() => {
    const temp = stateFilter.isFiltering
      ? { current: 1, pageSize: 10 }
      : { current: pagination.current, pageSize: pagination.pageSize };

    fetchData(temp.current, temp.pageSize);
  }, [pagination.current, pagination.pageSize]);

  const fetchData = (
    page: number,
    pageSize: number,
    values?: FilterMedicine
  ) => {
    console.log(values);
    getMedicine(page, pageSize, values || stateFilter.values).then(
      (response) => {
        const { data, total } = response.data;
        ruleSetValueTable(data, total);
        setStateFilter((prev) => ({ ...prev, isFiltering: false }));
      }
    );
  };

  const handlePageChange = (page: number) => {
    setPagination((prevPagination: any) => ({
      ...prevPagination,
      current: page,
    }));
  };

  const onFinish = (values: FilterMedicine) => {
    resetPagination();
    fetchData(1, 10, values);
    setStateFilter({ values, isFiltering: true });
  };

  const ruleSetValueTable = (data: Medicine[], total: number) => {
    setDataSource(data);
    setPagination((prevPagination) => ({
      ...prevPagination,
      total,
    }));
  };

  const resetPagination = () => {
    setPagination({
      current: 1,
      pageSize: 10,
      total: 0,
    });
  };

  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col span={6} style={{ marginBottom: '16px' }}>
            <Form.Item
              label="Referência"
              name="reference"
              style={{ width: '100%' }}
            >
              <Select placeholder="Selecione" style={{ width: '100%' }}>
                {dataReference.map((item) => {
                  return (
                    <Select.Option value={item.reference} key={item.reference}>
                      {item.reference}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={6} style={{ marginBottom: '16px' }}>
            <Form.Item
              label="Princípio ativo"
              name="activeIngredient"
              style={{ width: '100%' }}
            >
              <Select placeholder="Selecione" style={{ width: '100%' }}>
                {dataActiveIngredient.map((item) => {
                  return (
                    <Select.Option
                      value={item.activeIngredient}
                      key={item.activeIngredient}
                    >
                      {item.activeIngredient}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={6} style={{ marginBottom: '16px' }}>
            <Form.Item
              label="Nome comercial do medicamento similar"
              name="tradeName"
              style={{ width: '100%' }}
            >
              <Select placeholder="Selecione" style={{ width: '100%' }}>
                {dataTradeName.map((item) => {
                  return (
                    <Select.Option value={item.tradeName} key={item.tradeName}>
                      {item.tradeName}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col
            span={2}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              marginBottom: '16px',
            }}
          >
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Filtrar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={pagination.total}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </Row>
    </div>
  );
};

export default Home;
