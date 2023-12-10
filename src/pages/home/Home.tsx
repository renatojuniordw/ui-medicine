import { useEffect, useState } from 'react';
import { Form, Select, Button, Row, Col, Table, Pagination } from 'antd';

import { getMedicine } from '../../services/medicine.service';

const Home = () => {
  const [dataSource, setDataSource] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
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

  const fetchData = async (page: number, pageSize: number) => {
    try {
      const response = await getMedicine(page, pageSize);
      const { data, total } = response.data;

      setDataSource(data);
      setPagination((prevPagination) => ({
        ...prevPagination,
        total,
      }));
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setPagination((prevPagination: any) => ({
      ...prevPagination,
      current: page,
    }));
  };

  useEffect(() => {
    fetchData(pagination.current, pagination.pageSize);
  }, [pagination.current, pagination.pageSize]);

  const onFinish = (values: any) => {
    console.log('Valores do filtro:', values);
  };

  return (
    <div>
      <Row gutter={16} align="middle">
        <Form onFinish={onFinish} layout="inline">
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item label="Opção 1" name="option1">
                <Select placeholder="Selecione">
                  <Select.Option value="value1">Opção 1</Select.Option>
                  <Select.Option value="value2">Opção 2</Select.Option>
                  {/* Adicione mais opções conforme necessário */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Opção 2" name="option2">
                <Select placeholder="Selecione">
                  <Select.Option value="value1">Opção 1</Select.Option>
                  <Select.Option value="value2">Opção 2</Select.Option>
                  {/* Adicione mais opções conforme necessário */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Opção 3" name="option3">
                <Select placeholder="Selecione">
                  <Select.Option value="value1">Opção 1</Select.Option>
                  <Select.Option value="value2">Opção 2</Select.Option>
                  {/* Adicione mais opções conforme necessário */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Opção 4" name="option4">
                <Select placeholder="Selecione">
                  <Select.Option value="value1">Opção 1</Select.Option>
                  <Select.Option value="value2">Opção 2</Select.Option>
                  {/* Adicione mais opções conforme necessário */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Filtrar
            </Button>
          </Form.Item>
        </Form>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          <Pagination
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={pagination.total}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
