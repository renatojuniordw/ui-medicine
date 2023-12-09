import { Form, Select, Button, Row, Col } from 'antd';
import { useGetAllMedicine } from '../../hooks/medicine.hook';

const Home = () => {
  const [listMedicines, fetchMedicines] = useGetAllMedicine();
  console.log(listMedicines);

  const onFinish = (values: any) => {
    fetchMedicines();
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
        <Col span={24}>{/* <DataTable columns={columns} data={data} /> */}</Col>
      </Row>
    </div>
  );
};

export default Home;
