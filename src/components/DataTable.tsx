import { Table } from 'antd';
import { ColumnType } from 'antd/es/table';

interface DataTableProps {
  columns: ColumnType<any>[];
  data: any[];
}

const DataTable = ({ columns, data }: DataTableProps) => {
  return <Table columns={columns} dataSource={data} />;
};

export default DataTable;
